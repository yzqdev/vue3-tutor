const loaderUtils = require('loader-utils');
// var hljs = require('highlight.js');
const cheerio = require('cheerio');
const markdown = require('markdown-it');
var Token = require('markdown-it/lib/token');

/**
 * `<pre></pre>` => `<pre v-pre></pre>`
 * `<code></code>` => `<code v-pre></code>`
 * @param  {string} str
 * @return {string}
 */
var addVuePreviewAttr = function (str) {
  return str.replace(/(<pre|<code)/g, '$1 v-pre');
};

/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */
var renderHighlight = function (str, lang) {
  if (!(lang && hljs.getLanguage(lang))) {
    return '';
  }

  // return hljs.highlight(lang, str, true).value;

  // let codeText = markdown.utils.escapeHtml(str)
  let code = '````html\n' + str + '````';
  return markdown.render(code)

};

/**
 * html => vue file template
 * @param  {[type]} html [description]
 * @return {[type]}      [description]
 */
var renderVueTemplate = function (html, wrapper) {
  var $ = cheerio.load(html, {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false,
    xmlMode: true,
  });

  var output = {
    style: $.html('style'),
    script: $.html($('script').first())
  };
  var result;

  $('style').remove();
  $('script').remove();

  if (wrapper) {
    result = `<template><${wrapper}>` + $.html() + `</${wrapper}></template>\n`
  } else {
    result = `<template>` + $.html() + `</template>\n`
  }
  result += output.style + '\n' + output.script;
  return result;
};

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var parser, preprocess;
  var opts = loaderUtils.getOptions(this);

  var preventExtract = false;

  if (opts.preventExtract) {
    delete opts.preventExtract;
    preventExtract = true;
  }

  if (typeof opts.render === 'function') {
    parser = opts;
  } else {
    opts = Object.assign({
      preset: 'default',
      html: true,
      highlight: renderHighlight, //高亮部分放在C
      wrapper: 'section'
    }, opts);

    const plugins = opts.use;
    preprocess = opts.preprocess;

    delete opts.use;
    delete opts.preprocess;

    parser = markdown(opts.preset, opts);

    //add ruler:extract script and style tags from html token content
    !preventExtract &&
      parser.core.ruler.push("extract_script_or_style", function replace(state) {
        let tag_reg = new RegExp("<(script|style)(?:[^<]|<)+</\\1>", "g");
        let newTokens = [];
        state.tokens
          .filter(token => token.type == "fence" && token.info == "html")
          .forEach(token => {
            let tokens = (token.content.match(tag_reg) || []).map(content => {
              let t = new Token("html_block", "", 0);
              t.content = content;
              return t;
            });
            if (tokens.length > 0) {
              newTokens.push.apply(newTokens, tokens);
            }
          });
        state.tokens.push.apply(state.tokens, newTokens);
      });

    if (plugins) {
      plugins.forEach(function (plugin) {
        if (Array.isArray(plugin)) {
          parser.use.apply(parser, plugin);
        } else {
          parser.use(plugin);
        }
      });
    }
  }

  /**
   * override default parser rules by adding v-pre attribute on 'code' and 'pre' tags
   * @param {Array<string>} rules rules to override
   */
  function overrideParserRules(rules) {
    if (parser && parser.renderer && parser.renderer.rules) {
      const parserRules = parser.renderer.rules;
      rules.forEach(function (rule) {
        if (parserRules && parserRules[rule]) {
          const defaultRule = parserRules[rule];
          parserRules[rule] = function () {
            return addVuePreviewAttr(defaultRule.apply(this, arguments));
          };
        }
      });
    }
  }

  overrideParserRules(['code_inline', 'code_block', 'fence']);

  if (preprocess) {
    source = preprocess.call(this, parser, source);
  }


  const content = parser.render(source);
  const result = renderVueTemplate(content, opts.wrapper);

  if (opts.raw) {
    return result;
  } else {
    return 'module.exports = ' + JSON.stringify(result);
  }
};

export const genScssOptions = function(env) {
  let prependKey = env == 'vite' ? 'additionalData' : 'prependData';
  return {
    [prependKey]: `$primary-color: #42b983;`,
  };
};


import Icon from '../icon'
import { Checkbox } from '../checkbox'
import Node from './node.jsx'
import { getTranstionProp } from '../base/transition'
import { getChild } from '../_tool/utils'
import cloneVNode from '../_tool/clone.js'
import { Sync, RemoveCircleOutline, AddCircleOutline, ChevronUp } from 'kui-icons'
export default {
  name: 'TreeNode',
  props: {
    data: Object,
    isLeaf: Object,
    disabled: Boolean,
    icon: [String, Array],
    title: String,
  },
  provide() {
    return {
      VNode: this,
    }
  },
  data() {
    return {
      defaultData: this.data || {},
      loading: false,
      draged: false,
      droped: false,
      reload: true,
    }
  },
  watch: {
    data(val, Oval) {
      this.defaultData = val || {}
    }
  },
  inject: {
    Tree: { default: {} },
    VNode: { default: null },
  },
  created() {
    let { defaultCheckedKeys = [], draggable } = this.Tree
    let checked = defaultCheckedKeys.indexOf(this.$vnode.key) > -1
    if (checked) {
      this.updateChildCheck(this.defaultData, checked)
      if (this.VNode)
        this.updateParentCheck(this.VNode)
    }
  },
  beforeDestroy() {
    /*     let { defaultSelectedKeys = [],
          defaultExpandedKeys = [],
          defaultCheckedKeys = [],
          halfCheckedKeys = [],
        } = this.Tree
        let key = this.$vnode.key
        let s = defaultSelectedKeys.indexOf(key),
          e = defaultExpandedKeys.indexOf(key),
          c = defaultCheckedKeys.indexOf(key),
          h = halfCheckedKeys.indexOf(key);
        s > -1 && defaultSelectedKeys.splice(s, 1);
        e > -1 && defaultExpandedKeys.splice(e, 1);
        c > -1 && defaultCheckedKeys.splice(c, 1);
        h > -1 && halfCheckedKeys.splice(h, 1); */
  },
  methods: {
    updateChildCheck({ children = [], disabled }, checked) {
      !disabled && children.forEach(item => {
        if (!item.disabled) {
          let { defaultCheckedKeys } = this.Tree
          const key = item.key
          let index = defaultCheckedKeys.indexOf(key)
          // console.log(key, checked)
          checked ? index < 0 && defaultCheckedKeys.push(key) : index > -1 && defaultCheckedKeys.splice(index, 1)
          this.Tree.defaultCheckedKeys = defaultCheckedKeys
          this.updateChildCheck(item, checked)
        }
      })
    },
    updateParentCheck({ defaultData, VNode }) {
      if (!defaultData || defaultData.disabled) return;
      let { children = [], key } = defaultData
      let { defaultCheckedKeys, halfCheckedKeys } = this.Tree
      const normal = children.filter(({ disabled }) => !disabled)
      let checkedLength = normal.filter(({ key }) => defaultCheckedKeys.indexOf(key) > -1).length
      let halfcheckedLength = normal.filter(({ key }) => halfCheckedKeys.indexOf(key) > -1).length
      // let key = defaultData.key,
      let isCheckAll = checkedLength == normal.length;

      let halfIndex = halfCheckedKeys.indexOf(key)
      let checkIndex = defaultCheckedKeys.indexOf(key)

      isCheckAll ? defaultCheckedKeys.push(key) : (checkIndex > -1 && defaultCheckedKeys.splice(checkIndex, 1))
      if ((halfcheckedLength > 0 || checkedLength > 0) && !isCheckAll)
        halfIndex < 0 && halfCheckedKeys.push(key)
      else
        halfIndex > -1 && halfCheckedKeys.splice(halfIndex, 1);
      VNode && this.updateParentCheck(VNode)
    },
    handleCheck(e) {
      if (!this.defaultData.disabled) {
        const checked = e.target.checked
        let { Tree } = this
        let key = this.$vnode.key

        let { defaultCheckedKeys, halfCheckedKeys } = this.Tree
        let index = defaultCheckedKeys.indexOf(key)
        checked && index < 0 ? defaultCheckedKeys.push(key) : defaultCheckedKeys.splice(index, 1)
        this.Tree.defaultCheckedKeys = defaultCheckedKeys

        let halfIndex = halfCheckedKeys.indexOf(key)

        if (checked && halfIndex > -1) {
          halfCheckedKeys.splice(halfIndex, 1)
        }

        this.updateChildCheck(this.defaultData, checked)
        this.VNode && this.updateParentCheck(this.VNode)
        Tree.onCheck(e.target.checked, key, this.defaultData, this)
      }
    },
    handleSelect(e) {
      let { disabled, key } = this.defaultData
      if (!disabled) {
        let { Tree } = this
        if (Tree.directory) {
          this.handleExpand(e)
        }
        if (Tree.defaultSelectedKeys.indexOf(key) < 0) {
          Tree.onSelect(key, this.defaultData, this)
        }
      }
    },
    handleExpand(e) {
      e.stopPropagation()
      let { Tree, VNode } = this
      if ((VNode && VNode.$slots.default) || this.$slots.default) {
        let data = {
          ...this.$props,
          children: this.$children
        }
        Tree.onExpand(this.$vnode.key, data, this)
      } else {
        Tree.onExpand(this.$vnode.key, this.defaultData, this)
      }
    },
    onDragStart(e) {
      this.draged = true
      this.Tree.onDragStart(e, this)
    },
    onDragEnd(e) {
      this.draged = false
      this.Tree.onDragEnd(e, { node: this.defaultData, parent: this.getParent() })
      this.$forceUpdate()
    },
    onDragEnter(e) {
      this.droped = true
      this.Tree.onDragEnter(e, { node: this.defaultData, parent: this.getParent() })
    },
    onDragLeave(e) {
      this.droped = false
      this.Tree.onDragLeave(e, { node: this.defaultData, parent: this.getParent() })
    },
    onDrop(e) {
      this.droped = false
      if (!this.defaultData.disabled) {
        this.Tree.onDrop(e, { node: this.defaultData })
      }
    },
    onDragOver(e) {
      e.preventDefault()
    },
    getParent() {
      return this.VNode ? this.VNode.defaultData : { children: this.Tree.defaultData }
    }
  },
  render(h) {
    // return <div/>
    let p = { ...this.$props }
    delete p.data
    let data = Object.assign(p, this.defaultData)
    let { isLeaf, disabled, icon, title, children = [] } = data

    let slotChilds = getChild(this.$slots.default)

    let itemNode = [], { Tree, loading, reload } = this;
    let key = this.$vnode.key
    let { defaultSelectedKeys = [], defaultExpandedKeys = [], defaultCheckedKeys = [], halfCheckedKeys = [],
      checkable, showLine, directory, draggable, showIcon, showExtra } = Tree
    const expand = defaultExpandedKeys.indexOf(key) > - 1,
      selected = defaultSelectedKeys.indexOf(key) > - 1,
      checked = defaultCheckedKeys.indexOf(key) > - 1,
      indeterminate = halfCheckedKeys.indexOf(key) > - 1;

    let hasChilds = slotChilds.length > 0 || children.length > 0
    if ((hasChilds || 'load-data' in Tree.$listeners) && isLeaf !== true) {
      let arrowCls = ['k-tree-arrow', { 'k-tree-arrow-open': expand }]
      let arrowNode = <span class={arrowCls} onClick={this.handleExpand}>
        <Icon type={loading ? Sync : (showLine ? (expand ? RemoveCircleOutline : AddCircleOutline) : ChevronUp)} spin={loading} />
      </span>
      itemNode.push(arrowNode)
    } else {
      itemNode.push(<span class="k-tree-commes"></span>)
    }
    if (checkable) {
      let props = {
        props: { checked, disabled, indeterminate },
        on: { change: this.handleCheck,/*  input: e => { this.$set(this.data, 'checked', e) } */ }
      }
      itemNode.push(<Checkbox {...props} />)
    }
    let iconNode = null
    if (icon && showIcon) {
      iconNode = <Icon type={icon} class="k-tree-icon" />;
    }

    let titleCls = ['k-tree-title', { 'k-tree-title-selected': selected }]

    if (Tree.$scopedSlots.title) {
      title = Tree.$scopedSlots.title({ node: this.defaultData, parent: this.getParent() })
    }
    let innerNode = [iconNode, title]

    const titleProps = {
      class: titleCls,
      attrs: {
        tabIndex: "-1",
        draggable: draggable && !disabled
      },
      on: {}
    }
    if (!directory) {
      titleProps.on.click = this.handleSelect;
    }
    if (draggable) {
      titleProps.on.dragstart = this.onDragStart
      titleProps.on.dragend = this.onDragEnd
      titleProps.on.drop = this.onDrop
      titleProps.on.dragenter = this.onDragEnter
      titleProps.on.dragleave = this.onDragLeave
      titleProps.on.dragover = this.onDragOver
    }
    itemNode.push(<span {...titleProps}>{innerNode}</span>)

    let childs = null
    if (expand && hasChilds && reload) {
      if (slotChilds.length) {
        // childs = slotChilds
        childs = slotChilds.map((vnode, i) => {
          vnode.data.key = vnode.data.key || `${key}_${i}`
          let ele = cloneVNode(vnode)
          return ele;

        })
      } else {
        childs = children.map((item, i) => {
          const k = item.key || `${key}_${i}`
          item.key = k
          return <Node data={item} key={k} />
        })
      }
    }
    let onProps = getTranstionProp('k-tree-slide')
    const itemProps = {
      attrs: {},
      class: ['k-tree-item', {
        'k-tree-item-disabled': disabled,
        'k-tree-item-drag': this.draged,
        'k-tree-item-drop': this.droped && !disabled,
        'k-tree-item-extra-hidden': !showExtra,
        'k-tree-item-selected': directory && selected
      }],
      on: {}
    }
    if (directory) {
      itemProps.on.click = this.handleSelect
    }

    let extraNode;
    if (Tree.$scopedSlots.extra) {
      let extra = Tree.$scopedSlots.extra({ node: this.defaultData, parent: this.getParent() })
      extraNode = <span class='k-tree-item-extra'>{extra}</span>
    }
    return (
      <div class="k-tree-children">
        <div {...itemProps}>{itemNode}{extraNode}</div>
        <transition-group class="k-tree-item-children" tag="div" {...onProps}>{childs}</transition-group>
      </div>)
  }
}
<template>
  <el-input
      ref="buttonRef"

      :model-value="name"
      :placeholder="placeholder"
      :style="{ width: width,  fontSize: '14px !important'  }"
      clearable
      @clear="clearText"

  ></el-input>
  <el-popover
      ref="popoverRef"
      :virtual-ref="buttonRef"
      @hide="hidePop"
      placement="bottom"
      trigger="click"
      virtual-triggering
  >
    <el-input
        v-if="showSearch"
        v-model="filterText"
        placeholder="请输入关键词搜索"
    />
    <el-tabs v-model="departmentActiveName" class="demo-tabs">
      <el-tab-pane v-if="orgList" label="指定部门" name="指定部门">
        <el-scrollbar height="240px" ref="scrollRef">
          <el-tree
              ref="treeRef"
              :check-strictly="true"
              :data="orgList"
              :filter-node-method="filterNode"
              :props="defaultProps"
              :show-checkbox="false"
              :default-checked-keys="defaultCheckedKeys"
              default-expand-all
              node-key="id"
              @node-click="nodeClick"
          />
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </el-popover>
</template>

<script lang="ts" setup>
import {onMounted, ref, unref, watch} from "vue";
import {ElMessage, ElTree} from "element-plus";
import API from "@/api";
import {departments} from "@/components/departs";

const buttonRef = ref();
let visible = ref(false);
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: "请选择部门",
  },
  width: {
    type: String,
    default: "180px",
  },
  department: {
    type: Boolean,
    default: false,
  },
  current: {
    type: [Object, Array],
    default: [],
  },
  showSearch: {
    type: Boolean,
    default: true,
  },
});
let emit = defineEmits(["update:name", "onRange", 'update:id']);
const popoverRef = ref();
const scrollRef = ref()
const onClickOutside = () => {
  visible.value = false
  console.log('click out')
  unref(popoverRef).popperRef?.delayHide?.();
};

function clearText() {
  emit("update:name", "");
}

function hidePop() {
  ElMessage.success("hide")
  scrollRef.value.setScrollTop(0)
}

function setPopData(item) {
  ElMessage.success("点击pop" + item.name);
  emit("update:name", item.name);
  visible.value = false;
}

const departmentActiveName = ref("指定部门");

const defaultCheckedKeys: any = ref(props.current);
watch(
    () => props.current,
    (newVal) => {
      // console.log(newVal)
      defaultCheckedKeys.value = newVal;
      /*if (treeRef.value) {
        let { nodesMap } = treeRef.value.store;
        let localMap: any = Object.values(nodesMap);
        localMap.map((item) => {
          item.checked = false;
        });
        newVal.map((item) => {
          treeRef.value.store.nodesMap[item].checked = true;
        });
      }*/
    },
    {
      immediate: false, // 这个属性是重点啦
      deep: true, // 深度监听的参数
    }
);

const filterText = ref("");
const selectInput = ref("");

const handleUser = (item: any) => {
  emit("onRange", item);
};

const changeInput = (e: any) => {
  okrOrg();
};

// 获取所有部门信息
const orgList = ref(null);
const okrOrg = async () => {
  const {data} = departments
  orgList.value = getTree(data, 0);

};

const defaultProps = {
  children: "children",
  label: "name",
};

const getTree = (data, Pid) => {
  let result = [];
  let temp;
  for (let i = 0; i < data.length; i++) {
    if (data[i].pid == Pid) {
      temp = getTree(data, data[i].id);
      if (temp.length) {
        data[i].children = temp;
      }
      result.push(data[i]);
    }
  }
  return result;
};

interface Tree {
  id: number;
  name: string;
  children?: Tree[];
}

const treeRef = ref<InstanceType<typeof ElTree>>();

watch(filterText, (val) => {
  treeRef.value!.filter(val);
});
const filterNode = (value: string, data: Tree) => {
  if (!value) return true;
  return data.name.includes(value);
};
const nodeClick = (currentObj, treeStatus) => {
  console.log(currentObj);
  emit('update:id', currentObj.id)
  emit("onRange", currentObj);
  scrollRef.value.setScrollTop(0)
  unref(popoverRef).hide()

};
onMounted(() => {
  okrOrg();
});
</script>
<style lang="scss">
.el-popover {
  min-width: 300px !important;
}
</style>
<style lang="scss" scoped>


.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.depart-popup {
  z-index: 2046;
  position: absolute;
  padding: 1rem;
  inset: 134.4px auto auto 700.8px;
  margin: 0px;
  box-shadow: var(--el-box-shadow-light);
  transition: all 0.3s;

  .depart-item {
    min-width: 140px;

    cursor: pointer;
  }

  .active {
    color: cyan;
  }
}

.is-light {
  background: var(--el-bg-color-overlay);
  border: 1px solid var(--el-border-color-light);
}

.range-popcon {
  position: absolute;
  opacity: 0;
  z-index: -100;
  top: 0;
  width: 350px;
  height: 0;
  overflow: hidden;
  background: #fff;
  box-shadow: var(--el-box-shadow-dark);
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.5s;

  &.active {
    opacity: 1;
    top: calc(100% + 5px);
    z-index: 100;
    height: auto;
    overflow: auto;
  }
}

.avatar-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  &.active {
    background: #efefef;
  }

  &:hover {
    background: #efefef;
  }

  img {
    width: 30px !important;
    height: 30px !important;
    border-radius: 30px;
    margin-right: 5px;
  }

  .headPicture {
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin-right: 5px;
    background: rgba(40, 121, 255, 1);
    font-size: 15px;
    color: #fff;
    line-height: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name {
    width: 295px;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //用省略号显示
    white-space: nowrap; //不换行
  }
}
</style>

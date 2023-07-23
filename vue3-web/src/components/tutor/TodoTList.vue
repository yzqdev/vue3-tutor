<style lang="scss" scoped>
input {
  font-size: 14px;
}

body,
ul,
div,
html {
  padding: 0;
  margin: 0;
}

.hidden {
  display: none;
}

.main {
  width: 800px;
  margin: 0 auto;
}

li {
  list-style-type: none;
  line-height: 40px;
  position: relative;
  border: 1px solid transparent;
  padding: 0 20px;

  .status-span {
    display: block;
    width: 10px;
    height: 10px;
    background: #ccc;
    margin: 14px 10px 0 0;
    float: left;
  }

  .status-span.status-end {
    background: #09f;
  }

  .close {
    position: absolute;
    color: #f00;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    right: 20px;
    cursor: pointer;
    display: none;
    top: 0;
  }
}

li:hover {
  border: 1px solid #09f;
}

li:hover .close {
  display: block;
}

li div {
  display: block;
}

li.eidting div {
  display: none;
}

li .text2 {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}

li.eidting .text2 {
  display: block;
}

li .text-keyword {
  height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  width: 80%;
  display: none;
}

.text-keyword {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  outline: none;
}
</style>
<template>
  <div class="main">
    <h2>小目标列表</h2>
    <div class="list">
      <h3>添加小目标</h3>
      <el-input type="text" class="text-keyword" placeholder="输入小目标后，按回车确认" @keyup.enter="addList" v-model="addText" />
      <!--如果noend等于0，就是全部完成了就显示‘全部完成了’，如果没有就是显示已完成多少条（prolist.length-noend）和未完成多少条（noend）-->
      <p>共有{{ prolist.length }}个目标，{{ noend == 0 ? "全部完成了" : "已完成" + (prolist.length - noend) + "，还有" + noend + "条未完成" }}</p>
      <el-radio-group v-model="chooseType">
        <el-radio name="chooseType" :checked="true" label="all">所有目标</el-radio>

        <el-radio name="chooseType" label="finish">已完成目标</el-radio>

        <el-radio name="chooseType" label="unfinish">未完成目标</el-radio>
      </el-radio-group>
    </div>
    <ul>
      <li class="li1" v-for="(list, index) in newList" :class="{ eidting: curIndex === index }">
        <div>
          <span class="status-span" @click="changeType(index)" :class="{ 'status-end': list.status }"></span>
          <span @dblclick="curIndex = index">{{ list.name }}</span>
          <span class="close" @click="delectList(list)">X</span>
        </div>
        <input type="text" class="text2" v-model="list.name" @keyup.esc="cancelEdit(list)" @blur="edited" @focus="editBefore(list.name)" @keyup.enter="edited" v-focus />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { Directive } from "vue";

const addText =  ref("");
//name-名称,status-完成状态
const prolist =  ref([
  { name: "HTML5", status: false },
  { name: "CSS3", status: false },
  { name: "vue", status: false },
  { name: "react", status: false },
]);
const newList =  ref<any>([]);
const curIndex = ref("");
const beforeEditText =  ref("");
const curType =  ref("all");
const chooseType =  ref("all");

//计算属性，返回未完成目标的条数，就是数组里面status=false的条数
const noend = computed(() => {
  return prolist.value.filter(function (item) {
    return !item.status;
  }).length;
});

function addList() {
  //添加进来默认status=false,就是未完成状态
  prolist.value.push({
    name: addText,
    status: false,
  });
  //添加后，清空addText
  addText.value = "";
}

watch( chooseType , (type, oldValue, onCleanup) => {
  //type=1时，选择所有目标
  //type=2时，选择所有已完成目标
  //type=3时，选择所有未完成目标
  curType.value = type;
  console.error(type);

  switch (type) {
    case "all":
      newList.value = prolist;
      break;
    case "finish":
      newList.value = prolist.filter(function (item) {
        return item.status;
      });
      break;
    case "unfinish":
      newList.value = prolist.filter(function (item) {
        return !item.status;
      });
      break;
  }
});

/*改变单条数据的完成状态*/
function changeType(index) {
  newList[index].status = !newList[index].status;
  //更新数据
}

function delectList(list) {
  const index = prolist.value.indexOf(list);
  //根据索引，删除数组某一项
  prolist.value.splice(index, 1);
  //更新newList  newList可能经过prolist.filter()赋值，这样的话，删除了prolist不会影响到newList  那么就要手动更新newList
  //newList=prolist;
}

//修改前
function editBefore(name) {
  //先记录当前项（比如这一项，{name:"HTML5",status:false}）
  //beforeEditText="HTML5"
  beforeEditText.value = name;
}

//修改完成后
function edited() {
  //修改完了，设置curIndex=""，这样输入框就隐藏，其它元素就会显示。因为在li元素 写了：:class="{'eidting':curIndex===index}"  当curIndex不等于index时，eidting类名就清除了！
  //输入框利用v-model绑定了当前项（比如这一项，{name:"HTML5",status:false}）的name,当在输入框编辑的时候，比如改成‘HTML’,实际上当前项的name已经变成了‘HTML’，所以，这一步只是清除eidting类名，隐藏输入框而已
  //还有一个要注意的就是虽然li遍历的是newList，比如改了newList的这一项（{name:"HTML5",status:false}），比如改成这样（{name:"HTML",status:true}）。实际上prolist的这一项（{name:"HTML5",status:false}），也会被改成（{name:"HTML",status:true}）。因为这里是一个对象，而且公用一个堆栈！修改其中一个，另一个会被影响到
  curIndex.value = "";
  newList.push(addText);
}

//取消修改
function cancelEdit(val) {
  //上面说了输入框利用v-model绑定了当前项（比如这一项，{name:"HTML5",status:false}）的name,当在输入框编辑的时候，比如改成‘HTML’,实际上当前项的name已经变成了‘HTML’，所以，这一步就是把之前保存的beforeEditText赋值给当前项的name属性，起到一个恢复原来值得作用！
  val.name = beforeEditText;
  curIndex.value = "";
}

onMounted(() => {
  //初始化，把prolist赋值给newList。默认显示所有目标
  newList.value = prolist;
});
const vFocus: Directive = {
  updated(el) {
    el.focus();
  },
};
</script>

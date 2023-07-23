<template>
  <div class="join">
    <article class="w-[30%] mr-8 p-[50px] rounded-3xl border-gray-500 border-2" v-for="item in works">
      <article class="title">{{ item.name }}</article>
      <article class="work-tips">{{ item.place }}</article>
      <article class='mb-4'>要求:</article>
      <article class="work-content" v-html="item.need"></article>
    </article>
  </div>
</template>

<script setup>
 let works=$ref([
   {
     name: '前端工程师',
     place: '地点:安徽合肥',
     need: `1. 计算机科学相关专业毕业，本科以上学历。

2. 3年以上工作经验，但有技术实力者不限。

3. 有扎实的数据结构、算法等计算机知识基础，有良好的代码习惯。

4. 精通HTMLCSSJavaScript等前端技术栈，熟悉MVVM等设计模式，熟悉前沿开发技术如ES6、CSS预处理、Webpack、npm等工具框架。`,
   },
   {
     name: 'UI设计师',
     place: '地点:安徽合肥',
     need: `1. 具备高度的责任心和团队合作精神，不玻璃心，具备较强的自我驱动能力；
2. 有较强的界面、icon设计能力，设计师该会用的软件不多解释；
3. 喜欢把玩各种APP，对交互和用户体验敏感；
4. 必须熟练使用sketch.熟悉MAC系统
加分项：有电商经验、动效设计、手绘能力者；
为了让我们更好的了解你，请提供真实作品`,
   },
   {
     name: '产品经理',
     place: '地点:安徽合肥',
     need: `1. 根据市场调研及市场分析的结果，制定正确的产品推广策略、产品年度营销计划，并对销售目标负责；
2. 有效运用相关产品知识及推广策略，培训、支持、激励销售队伍；
3. 关注产品市场动向，准确把握与产品相关的市场信息，定期提供市场信息报告并提出相应策略；策划产品推广活动，协助销售队伍共同促进产品增长，达成销售目标`,
   },
 ])
</script>

<style lang="scss" scoped>
.join {
  background-color: #f1f3f6;
  height: calc(100vh - 80px);
  padding: 80px 200px;
  display: flex;

  .work-item {
    width: 30%;
    margin-right: 30px;
    padding: 50px;
    border-radius: 60px;
    border: 2px solid lightgrey;
    background-color: white;

    .title {
      font-style: normal;
      font-weight: 900;
      font-size: 3rem;
      color: #34364d;
      margin-bottom: 3rem;
    }

    .work-tips {
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      color: #c6c8d9;
      margin-bottom: 2rem;
    }

    .work-content {
    }
  }
}
</style>

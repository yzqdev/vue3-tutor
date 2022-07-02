<template>
  <div class="like">
    <Bigtitle msg="编辑markdown" />
    <Markdown></Markdown>
  </div>
</template>

<script>
import Bigtitle from "@/components/BigTitle.vue";
import Markdown from "@/components/Markdown.vue";

export default {
  name: "MyTitle",
  components: {
    Markdown,
    Bigtitle,
  },
};
</script>

<template>
  <div><Father></Father></div>
</template>

<script>
import Father from "@/components/Father.vue";
export default {
  name: "VueTricks",
  components: { Father },
  props: [],
  data() {
    return {
      name: "",
    };
  },
  watch: {},
  mounted() {
    this.function();
  },
  methods: {
    function() {},
  },
};
</script>

<style scoped></style>

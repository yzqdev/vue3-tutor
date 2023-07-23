<script setup lang="ts">
import { reactify } from "@vueuse/core";

// a plain function
function add(a: number, b: number): number {
  return a + b;
}

// now it accept refs and returns a computed ref
// (a: number | Ref<number>, b: number | Ref<number>) => ComputedRef<number>
const reactiveAdd = reactify(add);

const a = ref(1);
const b = ref(2);
const sum = reactiveAdd(a, b);

console.log(sum.value); // 3

a.value = 5;

console.log(sum.value); // 7

const reactifiedConsole = reactifyObject(console);

const aStr = ref("42");

reactifiedConsole.log(aStr); // no longer need `.value`
</script>

<template>
  <h2>reactivity</h2>
</template>

<style scoped lang="scss"></style>

<template>
  <n-grid x-gap="12" :cols="2">
    <n-gi>
      <n-input
        type="textarea"
        v-model:value="input"
        :autosize="{ minRows: 10 }"
      ></n-input>
    </n-gi>
    <n-gi>
      <n-input
        type="textarea"
        :value="text"
        :autosize="{ minRows: 10 }"
      ></n-input>
    </n-gi>
  </n-grid>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const input = ref("");
const text = computed(() => {
  let txt = input.value;
  return unescape(txt.replace(/\\u/g, "%u"));
});
</script>

<style scoped></style>

<template>
  <div>
    <n-data-table
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :cascade="false"
      striped
    />
  </div>
</template>

<script lang="ts">
import { NButton, NTag } from "naive-ui";
import { defineComponent, ref, computed, h } from "vue";
export default defineComponent({
  name: "Table",
  setup() {
    let data = [
      {
        key:1,
        name: "07akioni",
        index: "07",
        children: [
          {
            key:11,
            name: "08akioni",
            index: "08",
          },
        ],
      },
      {
        key:2,
        name: "17akioni",
        index: "17",
        children: [
          {
            key:22,
            name: "18akioni",
            index: "18",
          },
        ],
      },
    ];
    let columns = [
      {
        type: "selection",
      },
      {
        title: "name",
        key: "name",
      },
      {
        title: "index",
        key: "index",
      },
    ];
    return {
      pagination: {
        pageSize: 10,
      },
      data,
      columns,
    };
  },
});
</script>

<style scoped></style>

<template>
  <div>
    <n-data-table
      :columns="columns"
      :data="result"
      :pagination="pagination"
      :cascade="false"
      striped
    />
    <StoreIcon
      src="https://api.iconify.design/line-md:emoji-grin-twotone.svg?color=%238c00ff"
    ></StoreIcon>
    <StoreIcon
      src="https://api.iconify.design/fluent-emoji-flat:robot.svg?color=%23ff0000"
    ></StoreIcon>
    <StoreIcon
      src="https://chendj89.github.io/chendj89/assets/xiaochou.jpg"
    ></StoreIcon>
  </div>
</template>

<script lang="ts">
import { NButton, NTag } from "naive-ui";
import { defineComponent, ref, computed, h } from "vue";
import StoreIcon from "./storeIcon";
import { isSlotEmpty } from "naive-ui/es/_utils";
/**
 * 并发请求
 * @param {*} urls 待请求的url数组
 * @param {*} maxNum 最大并发数
 */
export function useRequire(urls: string[], maxNum: number) {
  return new Promise((resolve) => {
    if (urls.length === 0) {
      resolve([]);
      return;
    }
    const results: any = [];
    // 下一个请求下标
    let index = 0;
    // 当前请求完成的数量
    let count = 0;
    async function request() {
      if (index === urls.length) {
        return;
      }
      const i = index;
      const url = urls[index];
      index++;
      try {
      let token=localStorage.getItem('auth')
      if(token){
        token=`token `+token;
      }
        results[i] = await fetch(url, {
          headers: {
            authorization: token,
          },
        }).then((res) => res.json());
      } catch (error) {
        results[i] = error;
      } finally {
        count++;
        if (count >= urls.length) {
          resolve(results);
        }
        request();
      }
    }
    const times = Math.min(maxNum, urls.length);
    for (let i = 0; i < times; i++) {
      request();
    }
  });
}

export default defineComponent({
  name: "Table",
  components: {
    StoreIcon,
  },
  setup() {
    let data = [
      {
        key: 1,
        name: "07akioni",
        index: "07",
        children: [
          {
            key: 11,
            name: "08akioni",
            index: "08",
          },
        ],
      },
      {
        key: 2,
        name: "17akioni",
        index: "17",
        children: [
          {
            key: 22,
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
        title: "名称",
        key: "name",
      },
      {
        title: "图标",
        key: "icon",
        render: (item: any) => {
          if (item.icon.indexOf("svg") > -1) {
            return h(StoreIcon, { src: item.icon });
          } else {
            return h("img", { width: 20, src: item.icon });
          }
        },
      },
      {
        title: "描述",
        key: "desc",
      },
    ];
    let result: any = ref([]);
    let index = 0;
    let store = localStorage.getItem("storeList");
    if (store) {
      result.value = JSON.parse(store);
    } else {
      fetch(
        "https://api.github.com/repos/chendj89/data/issues?sort=created&direction=asc&labels=menu",
      )
        .then((res) => res.json())
        .then((res) => {
          let strArray = res.map((item: any) => {
            let body = item.body.replace("```json", "").replace("```", "");
            body = JSON.parse(body);
            result.value.push({
              ...body,
              name: body.name + index,
              key: body.name + index,
              children: [],
              index: body.name + index++,
            });
            return item.comments_url;
          });

          useRequire(strArray, 3).then((data: any) => {
            data.forEach((list: any, index: number) => {
              list.forEach((item: any) => {
                let str = item.body.replace("```json", "").replace("```", "");
                let obj = JSON.parse(str);
                result.value[index]?.children.push({
                  ...obj,
                  key: obj.name,
                  index: index++,
                });
              });
            });
            localStorage.setItem("storeList", JSON.stringify(result.value));
          });
        });
    }

    return {
      pagination: {
        pageSize: 10,
      },
      data,
      columns,
      result,
    };
  },
});
</script>

<style scoped></style>

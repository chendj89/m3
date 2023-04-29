<template>
  <div style="padding: 50px">
    <rIconLink :data="data2"></rIconLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from "vue";
import rIconLink from "@/pure/rIconLink";
import rIconUser from "@/pure/rIconUser";
import rIconButton from "@/pure/rIconButton";
import getLocalSvg from "@/utils/localSvg";
const quickIcon = getLocalSvg("quick");
const shopIcon = getLocalSvg("shop");
const shopIcon2 = getLocalSvg("shop2");
export default defineComponent({
  name: "Home",
  components: {
    rIconLink,
  },
  setup() {
    const data2 = {
      name: "",
      url: "http://www.baidu.com",
      src: shopIcon,
      size: 28,
      badge: "v2",
      dropdown: "width:240px",
      options: [
        {
          name: "userInfo",
          key: "header",
          type: "render",
          render: () =>
            rIconUser({
              src: shopIcon,
              name: "九转灵山",
              desc: "哈哈哈",
            }),
        },
        {
          label: "滨海湾金沙，新加坡",
          key: "marina bay sands",
          icon: () => rIconButton({ src: quickIcon, disabled: true }),
        },
        {
          label: "布朗酒店，伦敦",
          key: "brown's hotel, london",
          icon: () => rIconButton({ src: shopIcon2, disabled: true }),
        },
      ],
    };
    return { data2 };
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <div class="logo-wrapper">
    <router-link :to="{name:'Home'}" class="logo-content">
      <img v-if="showLogo" class="logo-img" src="../../assets/logo.png" />
      <div
        v-if="showTitle"
        :class="[
          !appConfig.isCollapse || alwaysShow ? 'show-title' : 'close-title',
        ]"
      >
        <span class="logo-title">{{ projectName }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import useAppConfigStore from "@/store/modules/app-config";
import { defineComponent } from "vue";
import { projectName } from "../../setting";
export default defineComponent({
  name: "Logo",
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
    showLogo: {
      type: Boolean,
      default: true,
    },
    alwaysShow: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const appConfig = useAppConfigStore();
    return {
      appConfig,
      projectName,
    };
  },
});
</script>
<style lang="scss" scoped>
.logo-wrapper {
  height: $logoHeight;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed var(--border-color);
  .logo-content {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  .logo-img {
    width: 30px;
  }
  .logo-title {
    font-weight: bold;
  }
  .show-title {
    transform: scale(1);
    width: auto;
    transition: transform 0.2s ease-in;
  }
  .close-title {
    transform: scale(0);
    width: 0;
  }
}
</style>

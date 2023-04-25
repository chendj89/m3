<template>
  <n-el> 123 </n-el>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { post, type Response } from "@/api/http";
import { login } from "@/api/url";
import type { UserState } from "@/store/types";

import useUserStore from "@/store/modules/user";
export default defineComponent({
  name: "Login",
  setup() {
    const username = ref("admin");
    const password = ref("123456");
    const loading = ref(false);
    const router = useRouter();
    const route = useRoute();
    const userStore = useUserStore();
    const onLogin = () => {
      post({
        url: login,
        data: {
          username: username.value,
          password: password.value,
        },
      })
        .then(({ data }: Response) => {
          userStore.saveUser(data as UserState).then(() => {
            router
              .replace({
                path: route.query.redirect
                  ? (route.query.redirect as string)
                  : "/",
              })
              .then(() => {
                loading.value = false;
              });
          });
        })
        .catch((error) => {
          loading.value = false;
        });
    };
    onLogin();
  },
});
</script>

<style lang="scss" scoped></style>

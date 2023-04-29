import { nextTick, ref } from "vue";
/**
 * 判断是否为svg
 */
export const svg = /^<svg/;
/**
 * 判断网络地址
 */
export const http = /^http/;
export const x = ref(0);
export const y = ref(0);
export const show = ref(false);

/**
 * 选择
 * @param key
 * @param option
 */
export const select = (key: string | number, option: any) => {
  show.value = false;
  if (http.test(option?.url)) {
    window.open(option.url);
  }
};
/**
 * 右键上下文
 * @param e
 */
export const contextMenu = (e: MouseEvent) => {
  e.preventDefault();
  show.value = false;
  nextTick().then(() => {
    show.value = true;
    x.value = e.clientX;
    y.value = e.clientY;
  });
};
/**
 * 点击外侧
 */
export const clickOutSlide = () => {
  show.value = false;
};
export const clickHandle = (e: any) => {
  console.log(e);
};

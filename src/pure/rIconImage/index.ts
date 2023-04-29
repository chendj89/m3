import { svg } from '@/utils/regExp'
import storeIcon from '@/views/form/storeIcon'
import { NIcon, NAvatar } from 'naive-ui'
import { h } from 'vue'
interface iRIimage {
  /**
   * 图源 svg格式、网络图片、base64
   */
  src: string
  [x: string]: any
}
/**
 * 渲染图标
 * @param opts
 * @param {string} opts.src 图源 svg格式、网络图片、base64
 */
export default function rIconImage(opts: iRIimage) {
  const isSvg = svg.test(opts.src)
  let { src, ...rest } = opts
  // return h(storeIcon,{src,...rest});
  if (isSvg) {
    return h(NIcon, { innerHTML: src, ...rest })
  } else {
    return h(NAvatar, {
      color: 'transparent',
      src: src,
      ...rest
    })
  }
}

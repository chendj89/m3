import { defineComponent, type PropType, h } from "vue";

import {
  x,
  y,
  show,
  select,
  contextMenu,
  clickOutSlide,
  clickHandle,
  svg,
} from "@/utils/dropdown";
import { NAvatar, NDropdown, NIcon, NImage } from "naive-ui";

export default defineComponent({
  name: "RIcon",
  props: {
    /**
     * 数据
     */
    data: {
      required: true,
      type: Object,
      default: {
        name: "",
        src: "",
        size: 32,
        options: [],
      },
    },
  },
  setup(props, ctx) {
    return {
      x,
      y,
      show,
      select,
      contextMenu,
      clickOutSlide,
      clickHandle,
    };
  },
  render() {
    return (
      <div style="cursor: pointer;display: inline-block;height:100%">
        <NDropdown
          placement="bottom-start"
          trigger="manual"
          options={this.data.options}
          show={this.show}
          x={this.x}
          y={this.y}
          onClickoutside={this.clickOutSlide}
          onSelect={this.select}
          size="small"
        />
        {svg.test(this.data.src)
          ? h(NIcon, {
              innerHTML: this.data.src,
              size: this.data.size,
              onclick: this.clickHandle,
              oncontextmenu: this.contextMenu,
            })
          : h(NAvatar, {
              color: "transparent",
              src: this.data.src,
              size: this.data.size,
              onclick: this.clickHandle,
              oncontextmenu: this.contextMenu,
            })}
      </div>
    );
  },
});

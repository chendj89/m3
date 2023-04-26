import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "StoreIcon",
  props: {
    src: {
      type: String,
      default: () => "",
    },
  },
  setup(props, ctx) {
    const src = props.src;
    const oSrc = localStorage.getItem(src);
    let aSrc: any = ref("");
   
    if (oSrc) {
      aSrc.value = `data:image/svg+xml;base64,${window.btoa(
        unescape(encodeURIComponent(oSrc))
      )}`;
    } else {
      aSrc.value = src;
      if (src.startsWith("http")) {
        fetch(src)
          .then((res) => res.blob())
          .then((blob) => {
            let reader: any = new FileReader();
            reader.readAsText(blob, "utf-8");
            reader.onload = function () {
              localStorage.setItem(src, reader.result.replace(/\"/gm, "'"));
            };
          });
      }
    }

    return {
      aSrc,
    };
  },
  render() {
    return <img width={32} src={this.aSrc} />;
  },
});

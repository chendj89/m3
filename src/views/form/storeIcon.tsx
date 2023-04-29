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
      if (oSrc.startsWith("http")) {
        aSrc.value = oSrc;
      } else {
        aSrc.value = `data:image/svg+xml;base64,${window.btoa(
          unescape(encodeURIComponent(oSrc))
        )}`;
      }
    } else {
      aSrc.value = src;
      if (src.startsWith("http")) {
        fetch(src)
          .then((res) => res.blob())
          .then((blob) => {
            console.log("blob", blob);
            if (blob.type == "image/svg+xml") {
              let reader: any = new FileReader();
              reader.readAsText(blob, "utf-8");
              reader.onload = function () {
                localStorage.setItem(src, reader.result.replace(/\"/gm, "'"));
              };
            } else {
              localStorage.setItem(src, src);
            }
          });
      }
    }

    return {
      aSrc,
    };
  },
  render() {
    return <img width={20} src={this.aSrc} />;
  },
});

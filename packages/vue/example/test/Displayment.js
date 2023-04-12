import { h } from "../../dist/mini-vue.esm-bundler.js";

export default {
  name: "Displayment",
  props: {
    count: {
      type: Number,
    },
  },
  render({ count }) {
    console.log(`<Displayment count = ${count} />`);
    return h("div", {}, count);
  },
};

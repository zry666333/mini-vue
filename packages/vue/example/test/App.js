import { h, ref } from "../../dist/mini-vue.esm-bundler.js";

export default {
  name: "App",
  setup() {
    const msg = ref("hello world");

    const handleClick = () => {
      msg.value = "hello vue3";
    };

    return {
      msg,
      handleClick,
    };
  },
  render() {
    return h("div", {}, [
      h(
        "button",
        {
          onClick: this.handleClick,
        },
        this.msg
      ),
    ]);
  },
};

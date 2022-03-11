import Vue from "vue";
import store from "../store";
let actions = null;

Vue.directive("rule", {
  // 当绑定元素插入到 DOM 中。
  bind: function(el, binding) {
    if (!actions) {
      actions = store.state.user.actions.map(item => item.action);
    }
    if (actions.includes(binding.value)) return;
    el.setAttribute("disabled", "disabled");
    el.classList.add("is-disabled");
  }
});

<template>
  <div class="toast" v-text="message"></div>
</template>
<script>
import { reactive, toRefs } from "vue";

export default {
  name: "Toast",
  props: ["message"],
};
export const useToastEffect = () => {
  const toastData = reactive({
    toastShow: false,
    toastMessage: "",
  });
  const { toastShow, toastMessage } = toRefs(toastData);
  const showToast = (message) => {
    toastShow.value = true;
    toastMessage.value = message;
  };
  return {
    toastShow,
    toastMessage,
    showToast,
  };
};
</script>
<style lang="scss" scoped>
@import "../style/variables.scss";

.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: $bgColor;
}
</style>
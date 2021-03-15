<template>
  <div class="wrapper">
    <ShopInfo :item="item" :hideBorder="true"></ShopInfo>
  </div>
  <Toast v-show="toastShow" :message="toastMessage"></Toast>
</template>
<script>
import ShopInfo from "../../components/ShopInfo";
import { useRoute } from "vue-router";
import { get } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast";
import { ref } from "vue";

const useShopEffect = (showToast) => {
  const route = useRoute();
  const item = ref({});
  get(`/api/shop/${route.params.id}`)
    .then((resp) => {
      item.value = resp.data;
    })
    .catch(() => {
      showToast("请求失败");
    });
  return {
    item,
  };
};
export default {
  name: "Shop",
  components: { ShopInfo, Toast },
  setup() {
    const { toastShow, toastMessage, showToast } = useToastEffect();
    const { item } = useShopEffect(showToast);
    return {
      item,
      toastShow,
      toastMessage,
    };
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding: 0 .18rem;
}
</style>
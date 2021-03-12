<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <ShopInfo v-for="item in nearbyList" :key="item._id" :item="item" />
  </div>
  <Toast v-show="toastShow" :message="toastMessage"></Toast>
</template>
<script>
import { ref } from "vue";
import ShopInfo from "../../components/ShopInfo";
import { get } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast";

const useNearbyEffect = (showToast) => {
  const nearbyList = ref([]);
  get("/api/shop/hot-list")
    .then((resp) => {
      nearbyList.value = resp.data;
    })
    .catch(() => {
      showToast("请求失败");
    });
  return {
    nearbyList,
  };
};
export default {
  name: "Nearby",
  components: { ShopInfo, Toast },
  setup() {
    const { toastShow, toastMessage, showToast } = useToastEffect();
    const { nearbyList } = useNearbyEffect(showToast);
    return { toastShow, toastMessage, nearbyList };
  },
};
</script>
<style lang="scss" scoped>
.nearby {
  &__title {
    font-size: 0.18rem;
    line-height: 0.25rem;
    margin: 0.16rem 0 0.02rem;
  }
}
</style>
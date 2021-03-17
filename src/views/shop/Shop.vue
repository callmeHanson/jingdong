<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back iconfont" @click="goBack">&#xe609;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe65f;</span>
        <input class="search__content__input" type="text" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <ShopInfo :item="item" :hideBorder="true"></ShopInfo>
    <div class="goods">
      <ShopGoods />
    </div>
  </div>
  <Toast v-show="toastShow" :message="toastMessage"></Toast>
</template>
<script>
import ShopInfo from "../../components/ShopInfo";
import ShopGoods from "../../components/ShopGoods";
import { useRoute, useRouter } from "vue-router";
import { get } from "../../utils/request";
import Toast, { useToastEffect } from "../../components/Toast";
import { ref } from "vue";

const useShopEffect = (showToast) => {
  const route = useRoute();
  const router = useRouter();
  const item = ref({});
  get(`/api/shop/${route.params.id}`)
    .then((resp) => {
      item.value = resp.data;
    })
    .catch(() => {
      showToast("请求失败");
    });
  const goBack = () => {
    router.push("/");
  };
  return {
    item,
    goBack,
  };
};
export default {
  name: "Shop",
  components: { ShopInfo, Toast, ShopGoods },
  setup() {
    const { toastShow, toastMessage, showToast } = useToastEffect();
    const { item, goBack } = useShopEffect(showToast);

    return {
      item,
      toastShow,
      toastMessage,
      goBack,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";

.wrapper {
  padding: 0 0.18rem;
}
.search {
  margin: 0.16rem 0 0.04rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 0.32rem;
  &__back {
    margin-right: 0.16rem;
    width: 0.12rem;
    font-size: 0.22rem;
    color: $search_fontColor;
  }
  &__content {
    flex: 1;
    border-radius: 0.16rem;
    background: $search_bgColor;
    display: flex;
    align-items: center;
    &__icon {
      margin: 0 0.12rem 0 0.16rem;
      color: $search_fontColor;
    }
    &__input {
      font-size: 0.14rem;
      line-height: 0.16rem;
      color: $content_fontcolor;
      outline: none;
      border: none;
      background: none;
      width: 100%;
      padding-right: 0.2rem;
    }
  }
}
.goods {
  position: fixed;
  top: 1.46rem;
  left: 0;
  right: 0;
  bottom: 0.49rem;
  overflow-y: auto;
}
</style>
<template>
  <div class="goods">
    <div class="goods__nav">
      <div
        class="goods__nav__item"
        :class="{ 'goods__nav__item--active': index === 0 }"
        v-for="(item, index) in navList"
        :key="item"
        v-text="item"
      ></div>
    </div>
    <div class="goods__items"></div>
  </div>
  <Toast v-show="toastShow" :message="toastMessage" />
</template>
<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { get } from "../utils/request";
import Toast, { useToastEffect } from "../components/Toast";

const useShopNavEffect = () => {
  const navList = ref(["全部商品", "秒杀", "新鲜水果", "休闲食品", "时令蔬菜", "肉蛋家禽"]);
  return {
    navList,
  };
};

const useShopGoodsEffect = (showToast) => {
  const goodsList = ref([]);
  const route = useRoute();
  const getGoodsList = () => {
    get(`/api/shop/${route.params.id}/products`)
      .then((resp) => {
        if (resp?.errno === 0) {
          goodsList.value = resp.data;
        } else {
          showToast("请求失败");
        }
      })
      .catch(() => {
        showToast("请求失败");
      });
  };
  return {
    goodsList,
    getGoodsList,
  };
};

export default {
  name: "Goods",
  components: { Toast },
  setup() {
    const { toastShow, toastMessage, showToast } = useToastEffect();
    const { navList } = useShopNavEffect();
    const { goodsList, getGoodsList } = useShopGoodsEffect(showToast);

    getGoodsList();
    return {
      toastShow,
      toastMessage,
      navList,
      goodsList,
      getGoodsList,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../style/mixins.scss";

.goods {
  height: 100%;
  display: flex;
  &__nav {
    width: 0.76rem;
    flex: 0 0 0.76rem;
    background: #f5f5f5;
    &__item {
      width: 0.76rem;
      line-height: 0.4rem;
      text-align: center;
      font-size: 0.14rem;
      color: #333333;
      @include ellipsis;
      &--active {
        background: #ffffff;
      }
    }
  }
  &__items {
    flex: 1;
    // overflow: hidden;
  }
}
</style>
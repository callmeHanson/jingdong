<template>
  <div class="shop">
    <img :src="item.imgUrl" alt="" class="shop__img" />
    <div class="shop__content" :class="{'shop__content--bordered': !hideBorder}">
      <div class="shop__title" v-text="item.name"></div>
      <div class="shop__tags">
        <span class="shop__tag">月售{{item.sales}}</span>
        <span class="shop__tag">起送￥{{item.expressLimit}}</span>
        <span class="shop__tag">基础运费￥{{item.expressPrice}}</span>
      </div>
      <div class="shop__highlight" v-text="item.slogan"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["item", "hideBorder"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../style/variables.scss";

.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    width: 0.56rem;
    height: 0.56rem;
    margin-right: 0.16rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--bordered {
      border-bottom: 1px solid $content_bgColor;
    }
  }
  &__title {
    font-size: 0.16rem;
    line-height: 0.22rem;
    color: $content_fontcolor;
  }
  &__tags {
    font-size: 0.13rem;
    line-height: 0.18rem;
    margin: 0.08rem 0;
  }
  &__tag {
    margin-right: 0.16rem;
  }
  &__highlight {
    font-size: 0.13rem;
    line-height: 0.18rem;
    color: #e93b3b;
  }
}
</style>
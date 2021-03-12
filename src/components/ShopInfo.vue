<template>
  <div class="shop">
    <img :src="item.imgUrl" alt="" class="shop__img" />
    <div class="shop__content">
      <div class="shop__title" v-text="item.name"></div>
      <div class="shop__tags">
        <span
          class="shop__tag"
          v-for="(tag, tagIndex) in item.tags"
          :key="tagIndex"
          v-text="tag"
        ></span>
      </div>
      <div class="shop__highlight" v-text="item.slogan"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopInfo",
  props: ["item"],
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
    border-bottom: 1px solid $content_bgColor;
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
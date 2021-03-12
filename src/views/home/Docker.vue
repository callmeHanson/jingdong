<template>
  <div class="docker">
    <div
      class="docker__item"
      :class="{ 'docker__item--active': index === 0 }"
      v-for="(item, index) in dockerList"
      :key="item.icon"
    >
      <div class="iconfont" v-html="item.icon"></div>
      <div class="docker__item__title" v-text="item.name"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      { icon: "&#xe600;", name: "首页" },
      { icon: "&#xe61d;", name: "购物车" },
      { icon: "&#xe61e;", name: "订单" },
      { icon: "&#xe60b;", name: "我的" },
    ];
    return {
      dockerList,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";

.docker {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content_bgColor;
  padding: 0 0.18rem;
  box-sizing: border-box;
  display: flex;
  color: $content_fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4fc;
    }
    &__title {
      font-size: 0.2rem;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem 0;
    }
  }
}
</style>
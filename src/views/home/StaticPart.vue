<template>
  <div class="position">
    <i class="iconfont position__position">&#xe61f;</i>
    北京理工大学国防科技园2号楼10层
    <i class="iconfont position__bell">&#xe7c4;</i>
  </div>
  <div class="search">
    <span class="iconfont search__icon">&#xe65f;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="" srcset="" />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in staticPartList" :key="item.name">
      <img class="icons__item__img" :src="`http://www.dell-lee.com/imgs/vue3/${item.img}.png`" alt="" />
      <p class="icons__item__text" v-text="item.name"></p>
    </div>
  </div>
  <div class="gap"></div>
</template>
<script>
export default {
  name: "StaticPart",
  setup() {
    const staticPartList = [
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
      { img: "超市", name: "超市便利" },
    ];
    return { staticPartList };
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/mixins.scss";

.position {
  position: relative;
  line-height: 0.22rem;
  padding: 0.16rem 0.24rem 0.16rem 0;
  font-size: 0.16rem;
  @include ellipsis;
  .iconfont {
    font-size: 0.2rem;
  }
  &__position {
    position: relative;
    top: 0.01rem;
  }
  &__bell {
    position: absolute;
    top: 0.16rem;
    right: 0;
  }
}
.search {
  line-height: 0.32rem;
  background: $search_bgColor;
  border-radius: 0.16rem;
  color: $search_fontColor;
  margin-bottom: 0.12rem;
  &__icon {
    margin: 0 0.12rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &__text {
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      margin: 0 auto;
      width: 0.4rem;
      height: 0.4rem;
    }
    &__text {
      text-align: center;
      color: $content_fontcolor;
      font-size: 0.12rem;
      line-height: 0.17rem;
      margin: 0.06rem 0 0.16rem 0;
    }
  }
}
.gap {
  height: 0.1rem;
  background: $content_bgColor;
  margin: 0 -0.18rem;
}
</style>
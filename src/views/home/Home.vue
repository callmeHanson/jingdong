<template>
  <div class="wrapper">
    <StaticPart></StaticPart>
    <Nearby></Nearby>
  </div>
  <Docker></Docker>
</template>
<script>
import StaticPart from "./StaticPart";
import Nearby from "./Nearby";
import Docker from "./Docker";

export default {
  name: "Home",
  components: { StaticPart, Nearby, Docker },
};
</script>
<style lang="scss" scoped>
@import "../../style/variables.scss";

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.1rem;
  color: $content_fontcolor;
  overflow: auto;
}
</style>
<template>
  <transition name="fade" mode="out-in"
    ><router-view></router-view>
  </transition>
</template>

<script>
export default {
  async created() {
    await this.$store.dispatch("app/init");
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0.7;
}
</style>

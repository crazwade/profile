<template>
  <div class="p-2 h-full w-full overflow-auto">
    <div id="main" class="flex flex-col  ">
      <MyInfo />
      <WorkExp />
      <SideProj />
    </div>
  </div>
</template>

<script setup lang='ts'>
import MyInfo from './components/MyInfo.vue';
import WorkExp from './components/WorkExp.vue';
import SideProj from './components/SideProj.vue';

</script>

<style lang="scss" scoped>

</style>

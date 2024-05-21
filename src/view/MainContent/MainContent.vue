<template>
  <div>
    <div id="main" class="flex flex-col w-full h-full overflow-auto">
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

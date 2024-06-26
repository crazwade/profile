<template>
  <div class="p-6 h-full w-full overflow-auto">
    <div id="main" class="flex flex-col">
      <MyInfo />
      <SkillTool />
      <WorkExp />
      <SideProj />
    </div>
  </div>
</template>

<script setup lang='ts'>
import MyInfo from './components/MyInfo.vue';
import WorkExp from './components/WorkExp.vue';
import SideProj from './components/SideProj.vue';
import SkillTool from './components/SkillTools.vue';

</script>

<style lang="scss" scoped>

</style>

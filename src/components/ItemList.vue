<template>
  <el-row v-for="(list, listIndex) in data" :key="listIndex">
    <el-col :span="24">
      <div class=" flex items-start">
        <div class=" ml-10 font-extrabold text-3xl">．</div>
        <div class=" flex-grow flex-shrink-1 text-sm leading-6 my-2">{{ list }}</div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang='ts'>
defineProps<{
  data: string[]
}>();
</script>

<style lang="scss" scoped>

</style>

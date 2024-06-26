<script setup lang='ts'>
defineProps<{
  skillList: string[]
}>();
</script>

<template>
  <div
    v-for="(skill, skillIndex) in skillList"
    :key="skillIndex"
    class="inline text-[#d89946] text-sm font-medium italic"
  >
    {{ skill }}
    <span v-if="skillIndex !== skillList.length - 1" class=" mx-1"> / </span>
  </div>
</template>

<style lang="scss" scoped>

</style>

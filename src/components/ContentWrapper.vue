<script setup lang='ts'>
defineProps<{
  label: string
}>();
</script>

<template>
  <div class="flex flex-col mt-5" >
    <div class="text-[#F0F8FF] font-semibold text-lg bg-[#495F98] py-1 pl-4 mb-[0.6rem] flex justify-start items-center">
      {{ label }}
    </div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>

</style>

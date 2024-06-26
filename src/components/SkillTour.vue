<script setup lang='ts'>
defineProps<{
  skillTools: {
    label: string;
    skill: string[];
  }[]
}>();

const arrayToString = (arr: string[]): string => {
  return arr.join(', ');
};
</script>

<template>
  <div class="flex flex-col gap-[0.2rem] pl-4">
    <template v-for="(item, index) in skillTools" :key="index">
      <div class="flex flex-row items-baseline py-1">
        <div class="text-[#21325e] font-bold text-lg whitespace-nowrap">
          {{ item.label }}:
        </div>
        &nbsp;
        <div class="text-base text-[#21325E]">
          {{ arrayToString(item.skill) }}
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>

</style>

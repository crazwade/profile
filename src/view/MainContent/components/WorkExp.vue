<template>
  <div class=" mt-2">
    <div v-for="(item, index) in workExpItem" :key="index" class=" my-3">
      <div class="inline">
        <span class="font-semibold text-lg">{{ item.title }}</span>
        <span class="text-gray-600">, </span>
        <span class=" text-blue-500 text-base">{{ item.company }}</span>
        <span class="text-gray-600">, </span>
        <span class="font-semibold text-gray-600 text-lg">{{ item.local }}</span>
        <span class="text-gray-600">, </span>
        <span class="text-gray-600 text-sm">{{ item.time }}</span>
      </div>
      <div class=" my-1">
        <div
          v-for="(skill, skillIndex) in item.skill"
          :key="skillIndex"
          class="inline text-gray-400 text-base italic"
        >
          {{ skill }}
          <span v-if="skillIndex !== item.skill.length - 1" class=" mx-1"> / </span>
        </div>
      </div>
      <el-row v-for="(list, listIndex) in item.content" :key="listIndex">
        <el-col :span="24">
          <div class=" flex items-start">
            <el-icon size="24px" class=" my-2 ml-10"><List /></el-icon>
            <div class=" flex-grow flex-shrink-1 text-sm leading-6 my-2 ml-2">{{ list }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm, locale } = useI18n();

type WorkExpType = {
  company: string;
  time: string;
  title: string;
  local: string;
  skill: string[];
  project: {
    name: string;
    skill: string[];
  }[];
  content: string[];
}

const workExpItem = ref<WorkExpType[]>(tm('experience') as WorkExpType[]);

watch(() => locale.value, () => {
  workExpItem.value = tm('experience') as WorkExpType[];
});

</script>

<style lang="scss" scoped>
</style>

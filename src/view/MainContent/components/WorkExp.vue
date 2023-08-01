<template>
  <div>
    <div v-for="(item, index) in workExpItem" :key="index" class=" mb-2">
      <div class="inline">
        <span class="font-semibold text-lg">{{ item.title }}</span>
        <span class="text-gray-600">, </span>
        <span class=" text-blue-500 text-base">{{ item.company }}</span>
        <span class="text-gray-600">, </span>
        <span class="font-semibold text-gray-600 text-lg">{{ item.local }}</span>
        <span class="text-gray-600">, </span>
        <span class="text-gray-600 text-base">{{ item.time }}</span>
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

const listData = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const workExpItem = ref<WorkExpType[]>(tm('experience') as WorkExpType[]);

watch(() => locale.value, () => {
  workExpItem.value = tm('experience') as WorkExpType[];
});

</script>

<style lang="scss" scoped>
</style>

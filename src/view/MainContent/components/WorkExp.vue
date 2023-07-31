<template>
  <div>
    <div v-for="(item, index) in workExpItem" :key="index">
      <div>
        <span>
          {{ item.title }},
        </span>
        <span>
          {{ item.company }},
        </span>
        <span>
          {{ item.time }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();

type WorkExpType = {
  company: string;
  time: string;
  title: string;
  skill: string[];
  project: {
    name: string;
    skill: string[];
  }[];
  content: string[];
}

const workExpItem = tm('experience') as WorkExpType[];
</script>

<style lang="scss" scoped>
</style>


// i18n
{
  "userTypes": ["普通用戶", "管理員", "訪客"],
}
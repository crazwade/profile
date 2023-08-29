<template>
  <div class=" mt-2">
    <div v-for="(item, index) in workExpItem" :key="index" class=" my-3">
      <div class="inline">
        <span class="font-semibold text-lg">{{ item.title }}</span>
        <span class="text-gray-600">, </span>
        <span class=" text-blue-500 text-base hover:underline hover:cursor-pointer" @click="transferURL(item.link)">{{ item.company }}</span>
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
      <ItemList :data="item.content" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ItemList from '../../../components/ItemList.vue';
import { transferURL } from '../../../common/transferURL';

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
  link: string;
}

const workExpItem = ref<WorkExpType[]>(tm('experience') as WorkExpType[]);

watch(() => locale.value, () => {
  workExpItem.value = tm('experience') as WorkExpType[];
});

</script>

<style lang="scss" scoped>
</style>

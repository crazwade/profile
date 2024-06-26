<template>
  <ContentWrapper :label="$t('EXPERIENCE')">
    <div v-for="(item, index) in workExpItem" :key="index" class="mt-3 pl-4">
      <div class="inline">
        <span class="text-[#3d63be] font-bold text-lg">{{ item.title }}</span>
        <span class="text-gray-600">, </span>
        <span class="text-[#7ab7ff] font-semibold text-base underline hover:cursor-pointer hover:text-blue-700" @click="transferURL(item.link)">{{ item.company }}</span>
        <span class="text-gray-600">, </span>
        <span class="text-gray-600 text-sm">{{ item.local }}</span>
        <span class="text-gray-600">, </span>
        <span class="text-gray-600 text-sm">{{ item.time }}</span>
      </div>
      <div class="my-[0.2rem]">
        <SkillList :skillList="item.skill" />
      </div>
      <ItemList :data="item.content" />
    </div>
  </ContentWrapper>
</template>

<script setup lang='ts'>
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import SkillList from '@/components/SkillList.vue';
import ContentWrapper from '@/components/ContentWrapper.vue';
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

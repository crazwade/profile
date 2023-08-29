<template>
  <div>
    <div class=" text-2xl font-semibold my-3">
      {{ $t('sideproject') }}
    </div>
    <div v-for="(item, index) in sideProjItem" :key="index" class=" mt-3">
      <div class="inline">
        <span
          v-if="item.link"
          class="font-semibold text-lg cursor-pointer hover:text-blue-600 hover:underline"
          @click="gotoDemo(item.link)"
        >
          {{ item.title }}
        </span>
        <span v-else class="font-semibold text-lg">{{ item.title }}</span>
        <span class="text-gray-600"> - </span>
        <span class="text-gray-600 text-sm">{{ item.detail }}</span>
      </div>
      <div class=" my-3">
        <ItemList :data="item.content" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { watch, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import ItemList from '../../../components/ItemList.vue';

const { tm, locale } = useI18n();

type SideProjType = {
  title: string;
  detail: string;
  content: string[];
  link?: string;
}

const sideProjItem = ref<SideProjType[]>(tm('project') as SideProjType[]);

const gotoDemo = (url: string) => {
  window.open(url, '_blank');
};

watch(() => locale.value, () => {
  sideProjItem.value = tm('project') as SideProjType[];
});
</script>

<style lang="scss" scoped>

</style>

<template>
  <div>
    <div class=" text-2xl font-semibold my-3">
      {{ $t('sideproject') }}
    </div>
    <div v-for="(item, index) in sideProjItem" :key="index" class=" mt-3">
      <div class="inline">
        <span class="font-semibold text-lg">{{ item.title }}</span>
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
}

const sideProjItem = ref<SideProjType[]>(tm('project') as SideProjType[]);

watch(() => locale.value, () => {
  sideProjItem.value = tm('project') as SideProjType[];
});
</script>

<style lang="scss" scoped>

</style>

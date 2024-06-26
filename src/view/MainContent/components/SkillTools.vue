<script setup lang='ts'>
import { watch, ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ContentWrapper from '@/components/ContentWrapper.vue';
import SkillTour from '@/components/SkillTour.vue';

type SkillObj = {
  label: string;
  skill: string[];
}

const { tm, locale } = useI18n();

const skillTools = ref<SkillObj[]>(tm('skillTools') as SkillObj[]);

watch(() => locale.value, () => {
  skillTools.value = tm('skillTools') as SkillObj[];
});
</script>

<template>
  <ContentWrapper :label="$t('skill')">
    <SkillTour :skillTools="skillTools" />
  </ContentWrapper>
</template>

<style lang="scss" scoped>

</style>

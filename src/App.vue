<template>
  <div class="flex justify-center items-center h-screen bg-neutral-600">
    <div class=" relative max-w-[918px] h-full p-4 bg-white py-5 px-5 overflow-y-auto">
      <MainContent
        ref="MainContentRef"
      />
      <ControlArea
        @langChange="langChange"
        @exportPDF="exportPDF"
        :langValue="langValue"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import MainContent from './view/MainContent/MainContent.vue';
import ControlArea from './view/ControlArea/ControlArea.vue';

const { locale } = useI18n();
const langValue = ref(false);
const MainContentRef = ref<InstanceType<typeof MainContent>>();
const langChange = (newLang: boolean) => {
  langValue.value = newLang;
};

const exportPDF = () => {
  const filename = 'English Resume.pdf';
  const fileURL = '/src/assets/file/English_resume.pdf';

  const link = document.createElement('a');
  link.href = fileURL;
  link.setAttribute('download', filename);
  link.click();
};

// 監聽 langValue 變化並設置 locale
const computedLocale = computed(() => {
  return langValue.value ? 'en' : 'zh';
});

// 監聽 computedLocale 變化並設置 locale
watch(computedLocale, (newLocale) => {
  locale.value = newLocale;
});

</script>

<style lang="scss" scoped>
</style>

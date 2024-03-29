<template>
  <div class="flex justify-center items-center h-screen bg-neutral-600">
    <div class=" relative max-w-[918px] h-full bg-white overflow-y-scroll text-black">
      <MainContent
        ref="MainContentRef"
        class="p-8"
        id="pdfContent"
      />
      <ControlArea
        @langChange="langChange"
        @exportPDF="exportPDF"
        :langValue="langValue"
      />
    </div>
    <div class="version"> {{ version }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import MainContent from './view/MainContent/MainContent.vue';
import ControlArea from './view/ControlArea/ControlArea.vue';
import html2pdf from 'html2pdf.js';

const version = process.env.APP_VERSION;

const { locale } = useI18n();
const langValue = ref(false);
const MainContentRef = ref<InstanceType<typeof MainContent>>();

const langChange = (newLang: boolean) => {
  langValue.value = newLang;
};

const exportPDF = () => {
  const filename = locale.value === 'en' ? 'JackyWu_Resume.pdf' : '吳國揚_履歷.pdf';

  const element = document.getElementById('pdfContent');
  html2pdf().from(element).save(filename);
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
.version {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0.2rem;
  font-size: 0.5rem;
  color: black;
  opacity: 0.8;
}
</style>

<template>
  <div class="flex justify-center items-center h-full bg-neutral-600 ">
    <div class="relative max-w-[918px] h-full bg-white text-black">
      <MainContent
        ref="MainContentRef"
        id="pdfContent"
      />
      <ControlArea
        v-model="langValue"
        @exportPDF="exportPDF"
      />
    </div>
    <div class="version"> {{ version }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import MainContent from './view/MainContent/MainContent.vue';
import ControlArea from './view/ControlArea/ControlArea.vue';
import html2pdf from 'html2pdf.js';

const version = process.env.APP_VERSION;

const { locale } = useI18n();
const langValue = ref(false);
const MainContentRef = ref<InstanceType<typeof MainContent>>();

const exportPDF = () => {
  const filename = locale.value === 'en' ? 'JackyWu_Resume.pdf' : '吳國揚_履歷.pdf';

  const element = document.getElementById('pdfContent');
  html2pdf().from(element).save(filename);
};

// 監聽 langValue 變化並設置 語言切換以及網址 querystring
watch(langValue, (newLocale) => {
  locale.value = newLocale ? 'en' : 'zh';

  if (newLocale) {
    const newUrl = `${window.location.pathname}?lang=en`;
    window.history.pushState({}, '', newUrl);
    return;
  }

  const newUrl = `${window.location.pathname}?lang=zh`;
  window.history.pushState({}, '', newUrl);
});

onMounted(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const lang = urlParams.get('lang') || 'zh';

  if (lang === 'en') {
    langValue.value = true;
    return;
  }

  langValue.value = false;
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

<template>
  <div id="main" class=" flex flex-col w-full h-full">
    <MyInfo />
    <WorkExp />
    <SideProj />
  </div>
</template>

<script setup lang='ts'>
import html2pdf from 'html2pdf.js';
import { useI18n } from 'vue-i18n';
import MyInfo from './components/MyInfo.vue';
import WorkExp from './components/WorkExp.vue';
import SideProj from './components/SideProj.vue';

const { t } = useI18n();

const exportToPDF = () => {
  const content = document.getElementById('main');
  const opt = {
    margin: 10,
    filename: `${t("info.name")} resume.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  console.log(content);

  html2pdf().from(content).set(opt).save();
};

defineExpose({
  exportToPDF
});
</script>

<style lang="scss" scoped>

</style>

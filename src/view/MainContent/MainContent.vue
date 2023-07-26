<template>
  <div id="main">
    main content, name: {{ $t("info.name") }}
  </div>
</template>

<script setup lang='ts'>
import html2pdf from 'html2pdf.js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const exportToPDF = () => {
  const content = document.getElementById('main');
  const opt = {
    margin: 10,
    filename: `${t("info.name")} resume.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  html2pdf().from(content).set(opt).save();
};

defineExpose({
  exportToPDF
});
</script>

<style lang="scss" scoped>

</style>

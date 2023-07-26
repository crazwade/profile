<template>
  <div class=" relative w-full h-full p-4">
    {{ $t("info.name") }}
    <MainContent class="contain" />
    <ControlBtn
      @langChange="langChange"
      :langValue="langValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import MainContent from './view/MainContent.vue';
import ControlBtn from './view/ControlBtn.vue';

const { locale } = useI18n();
const langValue = ref(false);

const langChange = (newLang: boolean) => {
  langValue.value = newLang;
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
.contain {
  position: relative;
  height: calc(100% - 60px);
  width: 100%;
  overflow: auto;
  .section {
    position: relative;
    width: 100%;
  }
}
</style>

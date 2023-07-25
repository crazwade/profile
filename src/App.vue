<template>
  <div class=" static w-full h-full bg-orange-400">
    {{ $t("info.name") }}
    <ControlBtn
      class="controlBtn absolute bottom-0 right-0"
      @langChange="langChange"
      :langValue="langValue"
    />
    <MainContent class="contain" />
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

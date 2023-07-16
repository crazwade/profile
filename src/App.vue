<template>
  <HeaderArea
    :showMenu="showMenu"
    :langValue="langValue"
    @scrollToSection="scrollToSection"
    @handleLangChange="handleLangChange"
  />
  <div class="contain">
    <div class="section" id="section1" style="background-color: pink;">
      Section1
    </div>
    <div class="section" id="section2" style="background-color: bisque;">
      Section2
    </div>
    <div class="section" id="section3" style="background-color: coral;">
      Section3
    </div>
    <div class="section" id="section4" style="background-color: violet;">
      Section4
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderArea from './view/HeaderArea.vue';

const { t, locale } = useI18n();
const langValue = ref(false);
const showMenu = ref(false);

/** 滑動頁面 */
const scrollToSection = (target: string) => {
  const el = document.getElementById(target);

  if (el) {
    el.scrollIntoView(
      {
        behavior: "smooth",
        block: "start",
      }
    );
  }
};

// 監聽窗口大小的變化
const handleResize = () => {
  if (window.innerWidth < 750) {
    showMenu.value = true;
  } else {
    showMenu.value = false;
  }
};

const handleLangChange = (lang: boolean) => {
  locale.value = lang ? 'en' : 'zh';
  langValue.value = !langValue.value;
};

// 監聽 langValue 變化並設置 locale
const computedLocale = computed(() => {
  return langValue.value ? 'en' : 'zh';
});

onMounted(() => handleResize());

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
    height: 100%;
    width: 100%;
  }
}
</style>

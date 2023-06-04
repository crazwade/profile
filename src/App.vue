<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

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

const removeFocus = (event: any) => {
  event.target.blur();
};

// 監聽窗口大小的變化
const handleResize = () => {
  if (window.innerWidth < 750) {
    showMenu.value = true;
  } else {
    showMenu.value = false;
  }
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

<template>
  <header class="header" :class="showMenu ? 'menu' : ''">
    <div class="menu" v-if="!showMenu">
      <el-link icon="User" type="primary" @click="scrollToSection('section1')">{{ t('title.opt1') }}</el-link>
      <el-link icon="Suitcase" type="success" @click="scrollToSection('section2')">{{ t('title.opt2') }}</el-link>
      <el-link icon="Tools" type="warning" @click="scrollToSection('section3')">{{ t('title.opt3') }}</el-link>
      <el-link icon="Paperclip" type="info" @click="scrollToSection('section4')">{{ t('title.opt4') }}</el-link>
    </div>
    <div class="menu_item" v-else>
      <el-dropdown>
        <span
          @focus="removeFocus"
          style="font-size: large; margin-left: 10px; color: white;"
        >
          Menu
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="scrollToSection('section1')">
              <el-icon><User /></el-icon>{{ t('title.opt1') }}
            </el-dropdown-item>
            <el-dropdown-item @click="scrollToSection('section2')">
              <el-icon><Suitcase /></el-icon>{{ t('title.opt2') }}
            </el-dropdown-item>
            <el-dropdown-item @click="scrollToSection('section3')">
              <el-icon><Tools /></el-icon>{{ t('title.opt3') }}
            </el-dropdown-item>
            <el-dropdown-item @click="scrollToSection('section4')">
              <el-icon><Paperclip /></el-icon>{{ t('title.opt4') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="switch">
      <el-switch
        class="mb-2"
        v-model="langValue"
        size="large"
        active-text="English"
        inactive-text="中文"
      />
    </div>
  </header>
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


<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: black;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  &.menu {
    justify-content: space-between;
  }
  .switch {
    width: 150px
  }
  .menu {
    width: calc(100% - 150px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    a {
      font-size: large;
      padding: 0 10px;
    }
  }
}
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

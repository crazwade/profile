<template>
  <header class="header" :class="showMenu ? 'menu' : ''">
    <div class="menu" v-if="!showMenu">
      <el-link
        v-for="item in data.Menu"
        :key="item.index"
        :icon="item.icon"
        :type="item.type"
        @click="scrollToSection(`section${item.index}`)"
      >
        {{ t(`title.section${item.index}`) }}
      </el-link>
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
            <el-dropdown-item
              v-for="item in data.Menu"
              :key="item.index"
              @click="scrollToSection(`section${item.index}`)"
            >
              <el-link
                :icon="item.icon"
                :type="item.type"
              >
                {{ t(`title.section${item.index}`) }}
              </el-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="switch">
      <el-switch
        class="mb-2"
        v-model="lang"
        size="large"
        active-text="English"
        inactive-text="中文"
        @change="handleLangChange"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import data from '../data/menuData';

const { t } = useI18n();

const props = defineProps<{
  showMenu: Boolean;
  langValue: Boolean;
}>();

const emit = defineEmits<{
  (e: 'scrollToSection', section: string): void,
  (e: 'handleLangChange', lang: boolean): void
}>();

const lang = computed(() => props.langValue);

const removeFocus = (event: any) => {
  event.target.blur();
};

const scrollToSection = (section: string) => {
  emit('scrollToSection', section);
};

const handleLangChange = (lang: boolean) => {
  emit('handleLangChange', lang);
};

</script>

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
</style>

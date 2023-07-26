<template>
  <div
    class="controlBtn absolute bottom-[10px] right-[10px] cursor-pointer transition-transform hover:scale-110"
    @click="dialogVisible = true"
  >
    <el-icon
      size="40px"
      class=" block"
    >
      <Setting />
    </el-icon>
  </div>
  <el-dialog
    v-model="dialogVisible"
    :title="$t('setting.title')"
    :before-close="handleClose"
  >
    <span>{{ $t('setting.lang') }}</span>
    <el-switch
      v-model="localLangSelect"
      size="large"
      active-text="English"
      inactive-text="中文"
    />
  </el-dialog>
</template>

<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue';

const localLangSelect = ref(true);
const dialogVisible = ref(false);

const props = defineProps<{
  langValue: boolean;
}>();

onMounted(() => {
  localLangSelect.value = props.langValue;
});

const emits = defineEmits<{
  (e: 'langChange', value: boolean):void;
}>();

watch(localLangSelect, () => {
  emits('langChange', localLangSelect.value);
});

const handleClose = () => {
  dialogVisible.value = false;
};


</script>

<style lang="scss" scoped>

</style>

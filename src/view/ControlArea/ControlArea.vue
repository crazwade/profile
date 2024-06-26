<template>
  <div
    class="controlBtn fixed bottom-[10px] right-[10px] cursor-pointer transition-transform hover:scale-110 hover:bg-gray-500 bg-gray-300 rounded-[50%] p-1"
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
  <div class="dialogLabel">
    <span>{{ $t('setting.lang') }}:</span>
    <el-switch
      v-model="currentValue"
      size="large"
      active-text="English"
      inactive-text="中文"
    />
  </div>
  <div class="dialogLabel">
    <span>{{ $t('setting.pdf') }}:</span>
    <el-button @click="exportPDF">Export</el-button>
  </div>
  </el-dialog>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';

const dialogVisible = ref(false);

const props = defineProps<{
  modelValue: boolean;
  onChange?: null | ((e: string | number) => void);
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'exportPDF'):void;
}>();

const currentValue = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emits('update:modelValue', value);
  },
});

const handleClose = () => {
  dialogVisible.value = false;
};

const exportPDF = () => {
  emits('exportPDF');
};
</script>

<style lang="scss" scoped>
.dialogLabel {
  display: flex;
  flex-direction: column;
  span {
    margin: 10px 0;
  }
}
</style>

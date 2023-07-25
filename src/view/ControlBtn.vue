<template>
  <div>
    <el-switch
      v-model="localLangSelect"
      size="large"
      active-text="English"
      inactive-text="中文"
    />
  </div>
</template>

<script setup lang='ts'>
import { ref, watch, onMounted } from 'vue';

const localLangSelect = ref(true);

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


</script>

<style lang="scss" scoped>

</style>

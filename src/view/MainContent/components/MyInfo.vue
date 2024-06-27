<template>
  <div class="text-black">
    <el-row>
      <el-col :span="24">
        <div class="mb-2 flex flex-wrap justify-between w-full">
          <div class="flex flex-col justify-start gap-2">
            <div class="text-6xl font-bold text-[#495F98]">{{ $t('info.name') }}</div>
            <div class="text-2xl font-semibold text-[#8bb0e4] pl-1">{{ $t('info.title') }}</div>
            <div class="text-base pl-1">{{ $t('info.degree') }}</div>
          </div>
          <div class="flex flex-wrap flex-row 768px:flex-col">
            <SocialLink :socialItems="socialItems" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';
import SocialLink from '@/components/myinfo/SocialLink.vue';

type SocialObj = {
  name: string,
  link: string,
  title: string,
}

const { tm } = useI18n();

const socialItems = tm('social') as SocialObj[];

</script>

<style lang="scss" scoped>

</style>

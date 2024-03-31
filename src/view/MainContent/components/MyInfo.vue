<template>
  <div class="text-black">
    <el-row class="mb-2">
      <el-col :span="16">
        <div class=" text-5xl mt-2 font-semibold text-black">{{ $t('info.name') }}</div>
        <div class=" text-sm my-4">{{ $t('info.degree') }}</div>
        <div class=" border-t-2 border-gray-400 w-[85%]"></div>
      </el-col>
      <el-col :span="8">
        <div
          v-for="(item, index) in socialItem"
          :key="index"
          class=" my-2 icon-link flex items-center hover:text-blue-700 hover:underline hover:font-bold"
        >
          <a
            :href="item.link"
            target="_blank"
            class=" mx-1"
          >
            <i v-if="item.name === 'email'" class="far fa-envelope text-2xl"></i>
            <i v-else :class="`fab fa-${item.name} text-2xl`"></i>
          </a>
          <a
            :href="item.name === 'email' ? `mailto:${item.link}` : item.link"
            target="_blank"
            class=" mx-1"
          >
            <span>{{ item.title }}</span>
          </a>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div>
          <span
            v-for="(item, index) in tm('skills')"
            :key="index"
            class="text-stone-600 bg-gray-100 text-sm rounded m-2 p-2 inline-block"
          >
            {{ item }}
          </span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n';

type SocialObj = {
  name: string,
  link: string,
  title: string,
}

const { tm } = useI18n();

const socialItem = tm('social') as SocialObj[];

</script>

<style lang="scss" scoped>

</style>

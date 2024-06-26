<template>
  <div class="text-black">
    <div class="mb-2 flex flex-wrap justify-between w-full">
      <div class="flex flex-col justify-start">
        <div class="text-5xl mt-2 font-semibold">{{ $t('info.name') }}</div>
        <div class="text-sm my-4">{{ $t('info.degree') }}</div>
        <div class="border-t-2 border-gray-400 w-[85%]"></div>
      </div>
      <div class="flex flex-wrap">
        <div
          v-for="(item, index) in socialItems"
          :key="index"
          class="my-2 mr-2 icon-link flex items-center hover:text-blue-700 hover:font-bold"
        >
          <a
            :href="item.name === 'email' ? `mailto:${item.link}` : item.link"
            target="_blank"
            class="mx-1 flex justify-center items-center"
          >
            <i :class="item.name === 'email' ? 'far fa-envelope text-2xl' : `fab fa-${item.name} text-2xl`"></i>
          </a>
          <a
            :href="item.name === 'email' ? `mailto:${item.link}` : item.link"
            target="_blank"
            class="mx-1 underline text-blue-500"
          >
            <span>{{ item.title }}</span>
          </a>
        </div>
      </div>
    </div>
    <el-row>
      <el-col :span="24">
        <div>
          <span
            v-for="(skill, index) in skills"
            :key="index"
            class="text-stone-600 bg-gray-100 text-sm rounded m-2 p-2 inline-block"
          >
            {{ skill }}
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

const socialItems = tm('social') as SocialObj[];
const skills = tm('skills') as string[];

</script>

<style lang="scss" scoped>

</style>

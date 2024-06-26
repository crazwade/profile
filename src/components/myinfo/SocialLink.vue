<script setup lang='ts'>
defineProps<{
  socialItems: {
    name: string,
    link: string,
    title: string,
  }[]
}>();
</script>

<template>
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
      class="mx-1 underline"
    >
      <span>{{ item.title }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>

</style>

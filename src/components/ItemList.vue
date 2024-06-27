<template>
  <ol style="list-style-type: circle;" class="pl-[2rem]">
    <template v-for="(list, listIndex) in data" :key="listIndex">
      <li>
        <el-row class="py-[4px]">
          <el-col :span="24">
            <div class="flex items-start text-[#21325e]">
              <div class="flex-grow flex-shrink-1 text-[15px] leading-6 my-[0.2rem]">{{ list }}</div>
            </div>
          </el-col>
        </el-row>
      </li>
    </template>
  </ol>
</template>

<script setup lang='ts'>
defineProps<{
  data: string[]
}>();
</script>

<style lang="scss" scoped>

</style>

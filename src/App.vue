<script setup lang="ts">
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
</script>

<template>
  <header class="header">
    <el-button @click="scrollToSection('section1')">S1</el-button>
    <el-button @click="scrollToSection('section2')">S2</el-button>
    <el-button @click="scrollToSection('section3')">S3</el-button>
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
  </div>
</template>


<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: gray;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

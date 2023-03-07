<template>
  <div class="p-12">
    <el-radio-group v-model="radioValue">
      <el-radio-button label="1"> Makesentence </el-radio-button>
      <el-radio-button label="2"> Checksentence </el-radio-button>
    </el-radio-group>
    <div class="mt-12">
      <Makesentence v-show="radioValue === '1'"></Makesentence>
      <Checksentence v-show="radioValue === '2'"></Checksentence>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Makesentence from "@/components/MakeSentence.vue";
import Checksentence from "@/components/CheckSentence.vue";
const radioValue = ref("1");
</script>

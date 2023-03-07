<template>
  <div>
    <div>当前进度：{{ index }}/{{ words.length }}</div>
    <div class="text-base !text-black" v-html="text"></div>
    <el-button class="mt-6" @click="next">下一个</el-button>
    <img v-show="loading" src="./../assets/loading.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { makeSentence } from "@/api";
import { highlightWord, getIndex, setIndex } from "@/utils";
import { ElMessage } from "element-plus";
const words = [
  "betray",
  "recruit",
  "rival",
  "intimate",
  "identical",
  "linear",
  "bully",
  "conclude",
  "parallel",
  "elaborate",
  "presume",
  "layman",
  "inevitable",
  "description",
  "outward",
  "conservative",
  "overlap",
  "conform",
  "ethical",
  "suppress",
  "presume",
  "layman",
  "inevitable",
  "description",
  "outward",
  "conservative",
  "overlap",
  "conform",
  "ethical",
  "suppress",
  "presume",
  "layman",
  "inevitable",
  "description",
  "outward",
  "conservative",
  "overlap",
  "conform",
  "ethical",
  "suppress",
];
const index = ref(getIndex());
const text = ref("");
const loading = ref(false);

const next = async () => {
  if (index.value > words.length - 1) {
    ElMessage({
      message: "没有更多了~",
      type: "success",
    });
    return;
  }
  loading.value = true;
  const res = await makeSentence(words[index.value]);
  loading.value = false;
  text.value = highlightWord(res.choices[0].message.content, words[index.value]);
  console.log("----", text.value);

  index.value = index.value + 1;
};
watch(index, (newVal) => {
  setIndex(newVal);
});
onMounted(() => {
  // next();
});
</script>

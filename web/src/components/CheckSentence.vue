<template>
  <div>
    <el-input v-model="input" @input="text=''" placeholder="Please input" @keyup.enter="submit" />
    <div>
      {{ text }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import {checkSentence} from '@/api'
const input = ref("");
const text = ref("");

const submit = async () => {
  const res = await checkSentence(input.value);
  text.value = res.choices[0].message.content;
};
</script>
<script setup>
import { computed, reactive, ref } from 'vue';
const refCount = ref(0);
const reactiveCount = reactive({ count: 0 });
const refDoubleCount = computed({
  get(){
    return refCount.value * 2;
  },
  set(newValue) {
    refCount.value = newValue;
  },
});
const reactiveDoubleCount = computed({
  get() {
    return reactiveCount.count * 2;
  },
  set(newValue) {
    reactiveCount.count = newValue;
  }
});
// 1초 뒤에 refCount와 reactiveCount의 count속성 값을 변경함
// 이를 참조해서 계산하는 computed()함수의 데이터도 함께 자동 변경됨
setTimeout(()=>{
  refCount.value = 10;
  reactiveCount.count = 20;
},1000)
console.log(refDoubleCount.value);
console.log(reactiveDoubleCount.value);
</script>
<template>
  <h1>refDoubleCount :{{ refDoubleCount }}</h1>
  <h1>reactiveDoubleCount :{{ reactiveDoubleCount }}</h1>
</template>
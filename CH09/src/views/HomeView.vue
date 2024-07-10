<script>
import { mapState, mapActions } from 'pinia';
import { useCountOptionStore } from '@/stores/countOption';
import { useCountSetupStore } from '@/stores/countSetup';
export default {
  computed: {
    //this.num, this.doubleNum 에 등록됨
    ...mapState(useCountOptionStore,['num', 'doubleNum']),
    ...mapState(useCountSetupStore, {
      myNum: 'num', // 윗줄과 같지만 this.myNum에 등록
      myDouble: 'doubleNum', // 윗줄과 같지만 this.myDouble에 등록됨
    }),
  },
  methods: {
    //this.increment(), this.getJson()에 등록됨
    ...mapActions(useCountOptionStore, ['increment','getJSON']),
    ...mapActions(useCountSetupStore, {
      myIncre: 'increment',
      myJSON: 'getJSON',
    })
  }
}
</script>

<template>
  <h1>HomeView</h1>
  <h2>num: {{ num }}</h2>
  <h2>num: {{ myNum }}</h2>
  <h2>doubleNum: {{ doubleNum }}</h2>
  <h2>doubleNum: {{ myDouble }}</h2>
  
  <button @click="increment">increment</button>
  <button @click="getJSON('https://jsonplaceholder.typicode.com/posts')">getJSON</button>
</template>

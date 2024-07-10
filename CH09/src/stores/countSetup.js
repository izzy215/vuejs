import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCountSetupStore = defineStore('countSetup', () => {
    //setup 문법
    const json = ref(null);
    const increment = () => {
        num.value++;
    };
    const getJSON = (url) => {
        increment(); //다른 액션(함수) 호출
        fetch(url)          // Promise/then 방식 했지만 async/await방식도 가능
          .then((response) => response.json())
          .then((json) => {
            json.value = json;
          })
    }
    const num = ref(10); //reactive()로 배열이나 객체 값을 생성해도 됨
    const doubleNum = computed(() => num.value * 2);
    const doubleNumPlusOne = computed(() => doubleNum.value +1);
    return {
        num,
        doubleNum,
        doubleNumPlusOne,
        json,
        increment,
        getJSON,

    };
})
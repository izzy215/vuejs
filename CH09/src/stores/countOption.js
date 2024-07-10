import { defineStore } from 'pinia';
export const useCountOptionStore = defineStore('countOption',{
    //스테이트 : 데이터 정의  = 자바스크립트 변수
    state() {
        return {
            num: 10,
            json: null
        }
    },
    //게터 : 스테이트의 값을 조회하거나 가공하기 위해 사용 computed와 같은개념
    getters: {
        doubleNum(state) {
            return state.num * 2;
        },
        doubleNumPlusOne() {
            // 다른 게터 참조시 this 사용
            return this.doubleNum + 1;
        }
    },
    //액션 : 상태를 변경하는 비동기 로직을 포함하는 함수를 정의하는 영역
    actions: {
        increment() {
            this.num++; // this키워드로 스테이트에 저장된 상태에 접근
        },
        getJSON(url) {
            this.increment(); // 다른 액션을 호출하고 싶을 때 this 사용
            fetch(url)
             .then((response) => response.json())
             .then((json) => {
                this.json = json; // 요청에 대한 응답 결과를 스테이트에 저장
             });
        },
    }
});
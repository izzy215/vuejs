<script>
import FirstChild from '@/components/FirstChild.vue';
import UserProfile from '@/components/UserProfile.vue';
import { message, reversedMessage } from '@/key.js'
import CustomButton from '@/components/CustomButton.vue';
import DefaultLayout from '@/components/DefaultLayout.vue';
import DynamicLayout from '@/components/DynamicLayout.vue';
import BasicScope from '@/components/BasicScope.vue';
import BasicScope2 from '@/components/BasicScope2.vue';
import BasicMix from '@/components/BasicMix.vue';

export default {

  mounted() {
    //const domEl =  document.querySelector('h1');
    //const domEl =  this.$refs.domEl;
    //const text = domEl.innerText;
    //console.log(text);
  },
  components: {//지역등록
    FirstChild,
    UserProfile,
    CustomButton,
    DefaultLayout,
    DynamicLayout,
    BasicScope,
    BasicScope2,
    BasicMix,
  },
  provide() { //컴포넌트에서 정의한 데이터를 자신과 컴포넌트 트리 구조로 연결된 하위 컴포넌트에 공유하는 기능 
    return {
      // message: this.message,
      // reversedMessae: this.reversedMessage
      [message]: this.message,
      [reversedMessage]: this.reversedMessage,
    }
  },
  // inject: ['message','reversedMessag'],
  inject: {
    customMessage: {
      from: message,
      default:'default aavalue',
    },
    customReversedMessage:{
      from:reversedMessage,
      default: 'default value',
    }
  },
  data() {
    return {
      dynamicName:'header',
    //  domEl: null,
      userName: '김철수',
      // message: 'Hello, Vue JS!',
      childNum: 0,
      parentNum: 5,
      message: 'parent',
      count:0,
      
    };
  },
  methods: {
    printHello(name,age) {
      alert(`안녕하세요! 저는 ${name} 이고 ${age} 살입니다.`);
    },
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    }
  },
        computed: {
            childNumOddAdd() { 
                return this.childNum % 2 === 0 ? '짝수' : '홀수';
            },
            numOddEven() {
              return this.parentNum % 2 === 0 ? '짝수' : '홀수';
            }
        },
        methods: {
            getChildNum() {
                return this.parentNum;
            },
            getParentNum() {
              return this.parentNum;
            }
        },
        mounted() {
        console.log(this.$refs.childRef.childNum);  //0
        console.log(this.$refs.childRef.childNumOddAdd);  //짝수
        console.log(this.$refs.childRef.getChildNum());  //0
        


    
        } ,


}
</script>

<!-- <template>

  <DefaultLayout>
    <template v-slot:header>
      <header>
        <h1>Header</h1>
      </header>
    </template>
    
    <template v-slot:main>
      <main>
        <h1>Main</h1>
      </main>
    </template>
    
    <template v-slot:footer>
      <footer>
        <h1>Footer</h1>
      </footer>
    </template>

  </DefaultLayout> -->
  <CustomButton/>
  <!-- <CustomButton>더블클릭</CustomButton> -->
  <!-- <h1 ref="domEl">h1태그</h1>-->
  <!-- <FirstChild  ref="childRef"/>  -->
  <!-- <h1>{{ message }}</h1>
  <h1>{{ reversedMessage }}</h1> -->
  <!--  <FirstChild/>
  <h1>{{ customMessage }}</h1>
  <h1>{{ customReversedMessage }}</h1>
 <UserProfile  @print-hello="(name,age) => printHello(name,age)"/> -->
<!-- <template>
  <DynamicLayout>
    <template #[dynamicName]>
      <h2>동적슬롯</h2>
    </template>
  </DynamicLayout>
</template> -->
<template>
  <!-- <BasicScope v-slot="slotProps">
    <h1>{{slotProps.message}}/{{ slotProps.count }}</h1>
  </BasicScope>
  <BasicScope2>
    <h1>범위: {{ message }}/{{ count }}</h1>
  </BasicScope2> -->
  <BasicMix>
    <!-- <template #header="headerProps">
      <h1>{{ headerProps.message }}</h1>
    </template> -->
    <template #header="{message}">
      <h1>{{ message }}</h1>
    </template>
    <template #main="countProps">
      <h1>{{ countProps.count }}</h1>
    </template>
    <!-- <template #main="{count}">
      <h1>{{ count }}</h1>
    </template> -->
  </BasicMix>
</template>

<style scoped>
h1{
  color:blue;
}
/* h1,
p{
  color : orange !important;
} */
</style>

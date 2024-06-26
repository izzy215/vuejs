<script>
export default {
  /* data: function() {
     return {};
   },*/

/*  data() {
    return {}
  },*/

  /*methods: {},*/
  methods: {
    // clickHandler() {// ES6의 단축 메서드명으로 표기
    //   alert('click!');
    // },
    // clickHandler(event) {
    //   console.log(event);
    // },
    // clickHandler(event) {
    //   console.log(event);
    //   //console.log(message)
    // },
    // increasement() {
    //   this.number++;
    // }
    // login() {
    //   console.log(`id: ${this.uid}`)
    //   console.log(`pw: ${this.upw}`)
    // },
    // printData() {
    //   console.log(`id: ${this.message}`)
    // },
    printData() {
      //console.log(this.fruits);
      //console.log(this.gender);
      console.log(this.selectItem);
    },
    onChangeHandler($event){
      //this.message = $event.target.value;
      if(this.selected ==='banana') {
        this.price = 500;
      }
      if(this.selected ==='apple') {
        this.price = 700;
      }
    },
    onSubmitHandler(e) {
      e.preventDefault();
      //별도의 폼 전송처리
      console.log('onSubmit Handler!');
    },
    onKeyupHanler() {
      console.log('keyup event!')
    }
  },
 computed: {
  fullName() {
    console.log('computed fullname');
    return `${this.lastName}${this.firstName}`
  },
  evenSum() {
    return this.numArr 
        .filter((v) => v % 2 === 0)
        .reduce((acc, cur) => acc + cur, 0);
  },
 },
 watch: {
    inputStr(newValue, oldValue) {
      console.log(`old value: ${ oldValue }`);
      console.log(`new value : ${ newValue }`);
    },
    arr: {
      handler(newValue, oldValue){
      
      console.log(`old value: ${ oldValue }`);
      console.log(`new value : ${ newValue }`);
      },
      deep:true,
    },
    obj :{
      handler(newValue, oldValue) {
      console.log(`old value: ${ oldValue }`);
      console.log(`new value : ${ newValue }`);
      },
      deep:true
    },
 },
  data() {
    return {
      primaryColor: 'red',
      primaryStyle: 'italic',

      // inputStr: '',
      // num:0,
      // arr:[0,1,2],
      // obj: { name: "chulsu" },
      // firstName: 'Gildong',
      // lastName: 'Hong',
      // numArr: [1,2,3,4,5]
      // uid:'',
      // upw:'1234',
      // message:'',
      // fruits: ['banana', 'orange'],
      // gender:'male',
      // selectItem:'cafeLatte',//value속성의 값이 cafeLatte인 option태그 선택
      // selected: 'banana',
      // price:500,
      //fruits:true,//true (체크), false(미체크)
      // name: '철수',
      // gender: '남자',
      // age:20,
      // //number: 0,
      // name: '철수',
      // age: 19,
      // message: '<h1>Hello, Vue JS!</h1>',
      // message2: 'Hello, Vue JS!',
      // className: 'red-color',
      // visible: true,
      // unvisible: false,
      // condition: 'A',
      // condition2: true,
      // fruits: ['apple', 'banana', 'orange'],
      // user: {
      //   name: 'John',
      //   age:20,
      //   gender: 'male',
      // }
    }
  }
}
</script>

<template>

  <h1 style="color: red; font-style: italic;">Inline Style</h1>
  <h1 :style="{ color : primaryColor, fontStyle: primaryStyle }">InlineStyle</h1>
  <h1>Innernal Style</h1>
  <h1>External Style</h1>
  <!-- <input type="text" v-model ="inputStr"/>
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button @click="arr.push(3)">배열변경</button>
  <button @click="obj.age=20">객체변경</button>
   -->

  <!-- <h1>{{ lastName }}{{ firstName }}</h1>
  <h1>{{ lastName }}{{ firstName }}</h1>
  <h1>{{ fullName }}</h1>
  <h1>{{ fullName }}</h1>
  <h1>{{ evenSum }}</h1>
  <h1>{{ numArr.filter((v) => v % 2 === 0).reduce((acc, cur) => acc + cur, 0) }}</h1> -->
<!-- <form id = "loginForm">
  <label for="uid">아이디<input type="text" id="uid" v-model="uid"/></label>
  <label for="upw">비밀번호<input type="password" id="upw" v-model="upw"/></label>
  <textarea v-model="message"></textarea>
  <label for="banana">
    <input type="checkbox" id = "banana" v-model="fruits" value="banana">banana
  </label>
  <label for="orange">
    <input type="checkbox" id = "orange" v-model="fruits" value="orange">orange
  </label>
  <label for="apple">
    <input type="checkbox" id = "apple" v-model="fruits" value="apple">apple
  </label>
  <label for="male">
    <input type="radio" id = "male" v-model="gender" value="male">male
  </label>
  <label for="female">
    <input type="radio" id = "female" v-model="gender" value="female">female
  </label>
  <select  v-model="selectItem">
    <option value="americano">아메리카노</option>
    <option value="espresso">에스프레소</option>
    <option value="cafeLatte">카페라떼</option>
  </select>
  <input type="text" @input="onChangeHandler($event)" > {{ message }}
  
  <button type="button" @click="login">로그인</button>
  <button type="button" @click="printData">데이터출력</button>

  <select  v-model="selected" @change="onChangeHandler">
    <option value="banana">바나나</option>
    <option value="apple">사과</option>
  </select>
  가격: {{ price }}원

</form> -->
<!-- <form @submit="onSubmitHandler">
  <button type = "submit">전송</button>
</form>
<input type="text" @keyup="onKeyupHanler"/>
 -->

  <!--<div v-memo="[name,gender]">
    <p>이름: {{ name }}</p>
    <p>성별: {{ gender }}</p>
    <p>나이: {{ age }}</p>
  </div>
  <button @click="name='영희'">이름변경</button>
  <button @click="gender='여자'">성별변경</button>
  <button @click="age='30'">나이변경</button>
  <h1 v-once> {{  number }} </h1>
<button type = "buttton" @click="increasement">증가</button>
<h1>method 파악 및 실습</h1>

<button type = "button" v-on:click="clickHandler">클릭</button>  
  <button type = "button" v-on:dblclick="clickHandler">더블클릭</button>  
  <button type = "button" @dblclick="clickHandler">@더블클릭</button>  
  <button type = "button" @dblclick="clickHandler($event)">$더블클릭</button>  
  <button type = "button" @click="($event)=>clickHandler($event)">$화살표함수 클릭</button>  
  <button type = "button" @click="clickHandler('Hello')">$안됨</button>  
  <button type = "button" @click="clickHandler($event)">$안됨1</button>  
-->



  <!-- <h1>data성질 파악 및 실습</h1>
  {{ name }}
  {{ age }}
  
  <p>내 이름은{{ name }}입니다.</p>
  <p>나이는{{ age }}살입니다.</p>

  {{  10 * 20 * 30 }}
  {{ name.toUpperCase() }}
<br>
  {{ message }}
  <div v-html="message"></div>
  <div v-text="message"></div>
<br>
  <div v-pre>{{ message2 }}</div>
<br>
  <h1 v-bind:class ="className">Hello, Vue JS</h1>
  <h1 :class ="className">Hello, Vue JS</h1>    
<br>
  <p v-if="visible" >이 요소는 렌더링이 됩니다.</p>
  <p v-if="unvisible"> 이 요소는 렌더링되지 앖습니다.</p>
<br>
  <p v-if="condition === 'A'"> conditon 데이터값은 A 입니다.</p>
  <p v-else-if="condition === 'B'"> conditon 데이터값은 B 입니다.</p>
  <p v-else-if="condition === 'C'"> conditon 데이터값은 C 입니다.</p>
  <p v-else-if="condition === 'D'"> conditon 데이터값은 D 입니다.</p>
  <p v-else> 어떤 조건에도 해당하지 않습니다</p>
<br>
  <p v-show="condition2">v-show 디렉티브는 조건이 참입니다.</p>
  <p v-show="!condition2">v-show 디렉티브는 조건이 거짓입니다.</p>
<br>
  <h1>fruits 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(fruit, index) in fruits" key="index">
      인덱스: {{ index }}, 값: {{ fruit }}
    </li>
  </ul>
<br>
  <h1>user 데이터의 반복 결과</h1>
  <ul>
    <li v-for="(value, key, index) in user" key="index">
       {{ index }} : {{ key }} : {{ value }}
    </li>
  </ul>-->
</template>
<style>
@import './assets/main.css';
.red-color {
  color:red;
}
/* h1{
  color: red;
  font-style : italic;
} */
</style> 
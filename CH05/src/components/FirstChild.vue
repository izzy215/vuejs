<script>
    export default {
        data() {
            return { 
                childNum: 0,
            };
        },
        computed: {
            childNumOddAdd() {
                return this.childNum % 2 === 0 ? '짝수' : '홀수';
            },
        },
        methods: {
            getChildNum() {
                return this.childNum;
            },
        },
        mounted() {
        console.log(this.$parent.parentNum);  //0
        console.log(this.$parent.numOddEven);  //짝수
        console.log(this.$parent.getParentNum());  //0
        }
    }
</script>

<template>
   <h1>FirstChild</h1>
   <h1>ParentChild</h1>
    <!-- <h1>컴포넌트</h1>
    <p>내가 만든 첫 번째 컴포넌트</p> -->
</template>
<style>
h1 {
    color : blue;
}
p {
    color : green;
}
</style>
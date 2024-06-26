<script>
import FirstChild from '@/components/FirstChild.vue';

export default {
  data() {
    return {
      domEl: null,
    };
  },
  mounted() {
    //const domEl =  document.querySelector('h1');
    const domEl =  this.$refs.domEl;
    const text = domEl.innerText;
    console.log(text);
  },
  components: {
    FirstChild,
  },
}
</script>

<template>
  <h1 ref="domEl">h1태그</h1>
  <FirstChild />
</template>

<style scoped>
h1,
p{
  color : orange !important;
}
</style>

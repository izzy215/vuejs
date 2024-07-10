<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
const id = route.params.id; //한 번에 useRoute().params.id라고 작성해도 됨
console.log(id);
console.log(route.params)
</script>
<template>
    <h1>id:{{ id }}</h1>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    computed: {
        doubleCount() {
            return this.count * 2;
        },
    },
    methods: {
        increasement() {
            this.count++;
        },
    },
}
</script>
<template>
    <h1>Count: {{ count }}</h1>
    <h2>Double Count: {{ doubleCount}}</h2>
    <button @click="increasement">증가</button>
</template>
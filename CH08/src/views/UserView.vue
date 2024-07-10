<!-- 옵션스 API -->
<!-- <script>
export default {
    beforeMount() {
        const name = this.$route.query.name;
        const age = this.$route.query.age;
        console.log(name);
        console.log(age);
    }
}
</script> -->
<!-- 컴포지션 API -->
 <script setup>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
onBeforeMount(() => {
    const name = route.query.name;
    const age = route.query.age;
    console.log(name);
    console.log(age);
})
</script>
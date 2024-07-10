<script>
export default {
    method: {
        navgateToHome() {
            this.$router.push('/');
        },
        replaceWithAbout() {
            this.$router.replace('/about');
        },
        goBack() {
            this.$router.go(-1);
        },
        goForward() {
            this.$router.go(1)
        },
    },
}
</script>

<template>
    <!-- /about -->
    <RouterLInk :to="{name:'about'}">About</RouterLInk>
    <!-- /user/mike -->
     <RouterLink :to="{name:'user',params:{id:'mike'}}">user</RouterLink>
     <!-- /about?lang=ko -->
      <RouterLink :to="{name:about,auery:{lang:'ko'}}">about</RouterLink>
      <!-- /user/mike?lang=ko -->
       <RouterLink :to="{name:'user',params:{id:'mike'},query:{lang:'ko'}}">user</RouterLink>
    <nav>

        <a href="#" @click.prevent="$router.push('/')">.push</a>
        <a href="#" @click.prevent="$router.replace('/about')">.replace</a>
        <a href="#" @click.prevent="$router.go(-1)">.go</a>
        <a href="#" @click.prevent="$router.forward">.forward</a>
        <a href="#" @click.prevent="$router.back()">.back</a>
    </nav>
    <h1>Home View</h1>
</template>
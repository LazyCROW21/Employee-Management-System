<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-light mt-2">Welcome to the Admin Panel.</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  created(){
    if(!localStorage.getItem('accessToken') || !localStorage.getItem('refreshToken')) {
      this.$router.push({path: '/login'});
    }
  },
};
</script>

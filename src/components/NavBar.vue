<template>
  <nav class="navbar navbar-dark bg-dark">
    <button @click="toggleSideNav" class="sideNavBtn m-2">
      <i class="fa-solid fa-bars"></i>
    </button>

    <span class="navbar-brand mb-0 h1">Employee Management System</span>
  </nav>
  <transition name="slide">
    <div id="sideNav" v-if="showNavBar">
      <div id="sideNavHeader" class="py-2">
        <button @click="toggleSideNav" class="sideNavBtn m-2">
          <i class="fa-solid fa-bars"></i>
        </button>
        <span class="h4 ml-2">Admin Panel</span>
        <hr>
        
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showNavBar: false,
    };
  },
  methods: {
    toggleSideNav() {
      this.showNavBar = !this.showNavBar;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
navbar {
  height: 4rem;
}
.sideNavBtn {
  background-color: transparent;
  color: white;
  height: 2rem;
  width: 2rem;
  font-size: 1.5rem;
  border: none;
}
#sideNavHeader {
  height: 4rem;
  background-color: #2c3e50;
  color: white;
}
#sideNav {
  position: fixed;
  top: 0;
  left: 0px;
  background: white;
  width: 360px;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 400ms ease;
}
.slide-enter-from {
  /* left: -360px; */
  transform: translateX(-100%);
}
.slide-enter-to {
  /* left: 0; */
  
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>

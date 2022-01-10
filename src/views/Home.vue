<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row my-2">
      <div class="col-4">
        <div class="bg-light text-end p-2">Dept1: 100</div>
      </div>
      <div class="col-4">
        <div class="bg-light text-end p-2">Dept2: 200</div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col-6">
        <div class="bg-light text-end p-2">Total Department: 100</div>
      </div>
      <div class="col-6">
        <div class="bg-light text-end p-2">Total Employee: 200</div>
      </div>
    </div>
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
};
</script>

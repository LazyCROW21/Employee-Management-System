<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-center mt-2">Add New Notice</h1>
    <hr />
    <div class="p-2 mx-auto" id="addEMPBox">
      <div class="row p-2 align-items-center">
        <div class="col-6">Subject</div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            v-model="this.addNotice['subject']"
          />
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Date</div>
        <div class="col-6">
          <input
            type="date"
            class="form-control"
            v-model="this.addNotice['date']"
          />
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Description</div>
        <div class="col-6">
          <textarea
            class="form-control"
            v-model="this.addNotice['description']"
          ></textarea>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="offset-6 col-6">
          <button class="btn btn-primary w-100">Add Notice</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "NewNotice",
  components: {
    NavBar,
  },
  data() {
    return {
      addNotice: {
        subject: "",
        date: "",
        description: "",
      },
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
hr {
  color: white;
}
.row {
  color: white;
  border-radius: 1rem;
}
.row:hover {
  color: white;
  background-color: #3c4a58;
}
tr td:first-child {
  color: black;
}
tr td:nth-child(2) {
  color: darkblue;
}
#addEMPBox {
  max-width: 720px;
}
</style>

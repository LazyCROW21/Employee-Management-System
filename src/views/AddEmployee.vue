<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-center mt-2">Add New Employees</h1>
    <hr />
    <div class="p-2 mx-auto" id="addEMPBox">
      <div class="row p-2 align-items-center">
        <div class="col-6">First Name</div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            v-model="this.addEmp['first_name']"
          />
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Last Name</div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            v-model="this.addEmp['last_name']"
          />
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Phone</div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            v-model="this.addEmp['phone']"
          />
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Email</div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            v-model="this.addEmp['email']"
          />
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Department</div>
        <div class="col-6">
          <select class="form-select" v-model="this.addEmp['dept_id']">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Designation</div>
        <div class="col-6">
          <select class="form-select" v-model="this.addEmp['designation_id']">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Salary</div>
        <div class="col-6">
          <input
            type="number"
            step="0.01"
            min="12000"
            class="form-control"
            v-model="this.addEmp['salary']"
          />
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="offset-6 col-6">
          <button class="btn btn-primary w-100">Add Employee</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AddEmployee",
  components: {
    NavBar,
  },
  data() {
    return {
      addEmp: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        dept_id: "",
        designation_id: "",
        salary: 12000
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

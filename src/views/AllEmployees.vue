<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-center mt-2">All Employees</h1>
    <hr />
    <div class="p-2">
      <div
        class="row p-2"
        v-for="employee in employees"
        v-bind:key="employee['id']"
      >
        <div class="col-1">{{ employee["id"] }}</div>
        <div class="col-2">{{ employee["first_name"] }}</div>
        <div class="col-2">{{ employee["last_name"] }}</div>
        <div class="col-2">{{ employee["phone"] }}</div>
        <div class="col-3">{{ employee["email"] }}</div>
        <div class="col-2">
          <div class="btn-group btn-group-sm" role="group">
            <button type="button" class="btn btn-primary">
              <i class="fas fa-eye"></i>
            </button>
            <button type="button" class="btn btn-info">
              <i class="fas fa-edit"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteEMPModal"
              @click="deleteEMP(employee)"
            >
              <i class="fas fa-minus-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#deleteEMPModal"
  >
    Launch demo modal
  </button> -->

  <div
    class="modal fade"
    id="deleteEMPModal"
    tabindex="-1"
    aria-labelledby="deleteEMPModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteEMPModalLabel">
            Are you sure you want to delete?
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <tbody>
              <tr>
                <td>ID</td>
                <td>: {{ this.delModalEmp['id'] }}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>: {{ this.delModalEmp['first_name'] }}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>: {{ this.delModalEmp['last_name'] }}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>: {{ this.delModalEmp['phone'] }}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>: {{ this.delModalEmp['email'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-danger">Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AllEmployees",
  components: {
    NavBar,
  },
  data() {
    return {
        delModalEmp: {
          id: -1,
          first_name: "",
          last_name: "",
          phone: "",
          email: "",
        },
      employees: [
        {
          id: 1,
          first_name: "Hardik",
          last_name: "Kardam",
          phone: "7567496109",
          email: "hardikkardam21@gmail.com",
        },
      ],
    };
  },
  methods: {
    deleteEMP(employee) {
        this.delModalEmp = employee;
    //   console.log(employee);
    },
  },
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
</style>

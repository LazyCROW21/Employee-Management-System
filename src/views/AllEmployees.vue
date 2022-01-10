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
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#viewEMPModal"
              @click="viewEMP(employee)"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#editEMPModal"
              @click="editEMP(employee)"
            >
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
  <!-- View Modal -->
  <div
    class="modal fade"
    id="viewEMPModal"
    tabindex="-1"
    aria-labelledby="viewEMPModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="viewEMPModalLabel">Employee Details</h5>
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
                <td>: {{ this.viewModalEmp["id"] }}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>: {{ this.viewModalEmp["first_name"] }}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>: {{ this.viewModalEmp["last_name"] }}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>: {{ this.viewModalEmp["phone"] }}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>: {{ this.viewModalEmp["email"] }}</td>
              </tr>
              <tr>
                <td>Department</td>
                <td>: {{ this.viewModalEmp["dept"] }}</td>
              </tr>
              <tr>
                <td>Designation</td>
                <td>: {{ this.viewModalEmp["designation"] }}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>: {{ this.viewModalEmp["salary"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-danger">Confirm</button>
        </div> -->
      </div>
    </div>
  </div>

  <!-- Edit Modal -->
  <div
    class="modal fade"
    id="editEMPModal"
    tabindex="-1"
    aria-labelledby="editEMPModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editEMPModalLabel">Edit Employee</h5>
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
                <td>: {{ this.editModalEmp["id"] }}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.editModalEmp['first_name']"
                  />
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.editModalEmp['last_name']"
                  />
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.editModalEmp['phone']"
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    v-model="this.editModalEmp['email']"
                  />
                </td>
              </tr>
              <tr>
                <td>Department</td>
                <td>
                  <select
                    class="form-select"
                    v-model="this.editModalEmp['dept_id']"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Designation</td>
                <td>
                  <select
                    class="form-select"
                    v-model="this.editModalEmp['designation_id']"
                  >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>
                  <input
                    type="number"
                    min="12000"
                    step="0.01"
                    class="form-control"
                    v-model="this.editModalEmp['salary']"
                  />
                </td>
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
          <button type="button" class="btn btn-success">Save</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Delete Modal -->
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
                <td>: {{ this.delModalEmp["id"] }}</td>
              </tr>
              <tr>
                <td>First Name</td>
                <td>: {{ this.delModalEmp["first_name"] }}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>: {{ this.delModalEmp["last_name"] }}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>: {{ this.delModalEmp["phone"] }}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>: {{ this.delModalEmp["email"] }}</td>
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
      viewModalEmp: {
        id: -1,
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        dept: "Dept 1",
        designation: "Design 1",
        salary: 12000,
      },
      editModalEmp: {
        id: -1,
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        dept: "Dept 1",
        designation: "Design 1",
        salary: 12000,
      },
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
          dept: "Dept 1",
          designation: "Design 1",
          salary: 12000,
        },
      ],
    };
  },
  methods: {
    viewEMP(employee) {
      this.viewModalEmp = employee;
    },
    deleteEMP(employee) {
      this.delModalEmp = employee;
      //   console.log(employee);
    },
    editEMP(employee) {
      this.editModalEmp = { ...employee };
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

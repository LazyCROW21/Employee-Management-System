/* eslint-disable no-console */
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
              @click="confDeleteEMP(employee)"
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
                <td>: {{ getDepartment(this.viewModalEmp["dept_id"]) }}</td>
              </tr>
              <tr>
                <td>Designation</td>
                <td>
                  :
                  {{
                    getDesignation(this.viewModalEmp["designation_id"])
                  }}
                </td>
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
                    @keyup="checkFirstName"
                  />
                  <p class="err-text" v-if="this.inputErrors.first_name">
                    {{ this.inputErrors.first_name }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.editModalEmp['last_name']"
                    @keyup="checkLastName"
                  />
                  <p class="err-text" v-if="this.inputErrors.last_name">
                    {{ this.inputErrors.last_name }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.editModalEmp['phone']"
                    @keyup="checkPhone"
                  />
                  <p class="err-text" v-if="this.inputErrors.phone">
                    {{ this.inputErrors.phone }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="email"
                    class="form-control"
                    v-model="this.editModalEmp['email']"
                    @keyup="checkEmail"
                  />
                  <p class="err-text" v-if="this.inputErrors.email">
                    {{ this.inputErrors.email }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Department</td>
                <td>
                  <select
                    class="form-select"
                    v-model="this.editModalEmp['dept_id']"
                    @change="checkDept"
                  >
                    <option
                      class="text-dark"
                      v-for="dept in Object.keys(departments)"
                      v-bind:key="dept"
                      :value="dept"
                    >
                      {{ departments[dept] }}
                    </option>
                  </select>
                  <p class="err-text" v-if="this.inputErrors.dept_id">
                    {{ this.inputErrors.dept_id }}
                  </p>
                </td>
              </tr>
              <tr>
                <td>Designation</td>
                <td>
                  <select
                    class="form-select"
                    v-model="this.editModalEmp['designation_id']"
                    @change="checkDesg"
                  >
                    <option
                      class="text-dark"
                      v-for="desg in deptdesgSelect"
                      v-bind:key="desg.id"
                      :value="desg.id"
                    >
                      {{ desg.designation }}
                    </option>
                  </select>
                  <p class="err-text" v-if="this.inputErrors.designation_id">
                    {{ this.inputErrors.designation_id }}
                  </p>
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
                    @keyup="checkSalary"
                  />
                  <p class="err-text" v-if="this.inputErrors.salary">
                    {{ this.inputErrors.salary }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p v-if="this.empEditResp" :class="this.empEditResp.cls">
            {{ this.empEditResp.txt }}
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-success"
            @click="saveEMPChanges"
            :disabled="!isFormValid"
          >
            Save
          </button>
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
          <button
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
            data-bs-target="#deleteEMPModal"
            @click="deleteEmployee"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import EmployeeService from "@/services/EmployeeService.js";
import DepartmentService from "@/services/DepartmentService.js";
import DeptDesgService from "@/services/DeptDesgService.js";

export default {
  name: "AllEmployees",
  components: {
    NavBar,
  },
  data() {
    return {
      isFormValid: true,
      inputErrors: {
        first_name: false,
        last_name: false,
        phone: false,
        email: false,
        dept_id: false,
        designation_id: false,
        salary: false,
      },
      viewModalEmp: {
        id: -1,
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        dept_id: -1,
        designation_id: -1,
        salary: 12000,
      },
      editModalEmp: {
        id: -1,
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        dept_id: -1,
        designation_id: -1,
        salary: 12000,
      },
      delModalEmp: {
        id: -1,
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
      },
      employees: [],
      departments: [],
      deptdesg: [],
      deptdesgSelect: [],
      empEditResp: false,
    };
  },
  beforeMount: function () {
    EmployeeService.getAllEmployees()
      .then(async (resp) => {
        if (resp.status == 200) {
          let datastr = await resp.text();
          this.employees = JSON.parse(datastr);
        } else {
          alert('Error fetching all employees');
        }
      })
      .catch((err) => {
        console.error(err);
      });
    DepartmentService.getAllDepartments().then(async (resp) => {
      if (resp.status == 200) {
        let datastr = await resp.text();
        this.departments = JSON.parse(datastr);
      } else {
        alert('Error fetching all departments');
      }
    });
    DeptDesgService.getAllDeptDesg().then(async (resp) => {
      if (resp.status == 200) {
        let datastr = await resp.text();
        this.deptdesg = JSON.parse(datastr);
      } else {
        alert('Error fetching all designation');
      }
    });
  },
  methods: {
    changeDesgSelect() {
      this.deptdesgSelect = [];
      let desgKeys = Object.keys(this.deptdesg);
      for (let i = 0; i < desgKeys.length; i++) {
        if (this.deptdesg[desgKeys[i]].dept_id == this.editModalEmp.dept_id) {
          this.deptdesgSelect.push(this.deptdesg[desgKeys[i]]);
        }
      }
      this.checkError();
    },
    viewEMP(employee) {
      this.viewModalEmp = employee;
      this.empEditResp = false;
    },
    getDepartment(dept_id) {
      for(let i=0; i<this.departments.length; i++) {
        if(this.departments[i].id == dept_id) {
          return this.departments[i].dept_name;
        }
      }
      return '---';
    },
    getDesignation(desg_id) {
      for(let i=0; i<this.deptdesg.length; i++) {
        if(this.deptdesg[i].id == desg_id) {
          return this.deptdesg[i].designation;
        }
      }
      return '---';
    },
    confDeleteEMP(employee) {
      this.delModalEmp = employee;
    },
    deleteEmployee() {
      EmployeeService.deleteEmployee(this.delModalEmp.id)
        .then(async (resp) => {
          if (resp.status == 200) {
            alert("Employee deleted!");
            this.employees = this.employees.filter(
              (emp) => emp.id != this.delModalEmp.id
            );
          } else {
            alert("Error!");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    editEMP(employee) {
      this.editModalEmp = { ...employee };
      this.changeDesgSelect();
    },
    saveEMPChanges() {
      if (this.checkError()) {
        return;
      }
      console.log(this.editModalEmp);
      EmployeeService.updateEmployee(this.editModalEmp.id, this.editModalEmp)
        .then(async (resp) => {
          if (resp.status == 200) {
            for (let i = 0; i < this.employees.length; i++) {
              if (this.employees[i].id == this.editModalEmp.id) {
                this.employees[i] = { ...this.editModalEmp };
                break;
              }
            }
            this.empEditResp = {
              cls: "text-success",
              txt: "Changes saved!",
            };
          } else {
            this.empEditResp = {
              cls: "text-danger",
              txt: "error in updating!",
            };
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    checkError() {
      const errKeys = Object.keys(this.inputErrors);
      for (let i = 0; i < errKeys.length; i++) {
        if (this.inputErrors[errKeys[i]]) {
          this.isFormValid = false;
          return true;
        }
      }
      this.isFormValid = true;
      return false;
    },
    checkFirstName() {
      if (this.editModalEmp.first_name) {
        this.editModalEmp.first_name = this.editModalEmp.first_name.trim();
        if (
          this.editModalEmp.first_name.length < 0 ||
          this.editModalEmp.first_name.length > 64
        ) {
          this.inputErrors.first_name = "First name should 1 to 64 characters";
        } else {
          this.inputErrors.first_name = false;
        }
      } else {
        this.inputErrors.first_name = "First name is required";
      }
      this.checkError();
    },
    checkLastName() {
      if (this.editModalEmp.last_name) {
        this.editModalEmp.last_name = this.editModalEmp.last_name.trim();
        if (
          this.editModalEmp.last_name.length < 1 ||
          this.editModalEmp.last_name.length > 64
        ) {
          this.inputErrors.last_name = "Last name should 1 to 64 characters";
        } else {
          this.inputErrors.last_name = false;
        }
      } else {
        this.inputErrors.last_name = "Last name is required";
      }
      this.checkError();
    },
    checkPhone() {
      const phoneRegex = /^[0-9]{10}$/;
      if (this.editModalEmp.phone) {
        this.editModalEmp.phone = this.editModalEmp.phone.trim();
        if (this.editModalEmp.phone.length != 10) {
          this.inputErrors.phone = "Phone should be 10 digits";
        } else if (!phoneRegex.test(this.editModalEmp.phone)) {
          this.inputErrors.phone = "Invalid phone number";
        } else {
          this.inputErrors.phone = false;
        }
      } else {
        this.inputErrors.phone = "Phone is required";
      }
      this.checkError();
    },
    checkEmail() {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.editModalEmp.email) {
        this.editModalEmp.email = this.editModalEmp.email.trim();
        if (
          this.editModalEmp.email.length < 1 ||
          this.editModalEmp.email.length > 240
        ) {
          this.inputErrors.email = "Email should be under 240 characters";
        } else if (!emailRegex.test(this.editModalEmp.email)) {
          this.inputErrors.email = "Invalid email format";
        } else {
          this.inputErrors.email = false;
        }
      } else {
        this.inputErrors.email = "Email is required";
      }
      this.checkError();
    },
    checkDept() {
      this.changeDesgSelect();
      if (this.editModalEmp.dept_id != null) {
        if (isNaN(this.editModalEmp.dept_id)) {
          this.inputErrors.dept_id = "Invalid department selected";
        } else {
          this.inputErrors.dept_id = false;
        }
      } else {
        this.inputErrors.dept_id = "Department is required";
      }
      this.checkDesg();
      // this.isFormValid = false;
      this.checkError();
    },
    checkDesg() {
      if (this.editModalEmp.designation_id != null) {
        if (isNaN(this.editModalEmp.designation_id)) {
          this.inputErrors.designation_id = "Invalid designation selected";
        } else {
          this.inputErrors.designation_id = false;
        }
      } else {
        this.inputErrors.designation_id = "Designation is required";
      }
      this.checkError();
    },
    checkSalary() {
      if (this.editModalEmp.salary) {
        if (this.editModalEmp.salary < 0) {
          this.inputErrors.salary = "Invalid salary input";
        } else {
          this.inputErrors.salary = false;
        }
      } else {
        this.inputErrors.salary = "Salary is required";
      }
      this.checkError();
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
.err-text {
  color: red;
  font-style: italic;
}
</style>

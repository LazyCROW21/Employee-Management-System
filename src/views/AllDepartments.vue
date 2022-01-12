<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-center mt-2">All Departments</h1>
    <hr />
    <div class="p-2">
      <div
        class="deptrow row p-2"
        v-for="dept in departments"
        v-bind:key="dept['id']"
      >
        <div class="col-1">{{ dept["id"] }}</div>
        <div class="col-9">{{ dept["dept_name"] }}</div>
        <div class="col-2">
          <div class="btn-group btn-group-sm" role="group">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#viewDeptModal"
              @click="openViewModal(dept)"
            >
              <i class="fas fa-eye"></i>
            </button>
            <button
              type="button"
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#editDeptModal"
              @click="editDept(dept)"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#deleteDeptModal"
              @click="deleteDept(dept)"
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
    id="viewDeptModal"
    tabindex="-1"
    aria-labelledby="viewDeptModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="viewDeptModalLabel">
            Department Details
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
                <td>: {{ this.viewModalDept["id"] }}</td>
              </tr>
              <tr>
                <td>Department Name</td>
                <td>: {{ this.viewModalDept["dept_name"] }}</td>
              </tr>
              <tr>
                <td>Designations</td>
                <td>
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item"
                      v-for="desg in viewModalDept['designations']"
                      v-bind:key="desg.id"
                    >
                      {{ desg.designation }}
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Modal -->
  <div
    class="modal fade"
    id="editDeptModal"
    tabindex="-1"
    aria-labelledby="editDeptModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editDeptModalLabel">Edit Department</h5>
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
                <td>: {{ this.editModalDept["id"] }}</td>
              </tr>
              <tr>
                <td>Department Name</td>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="this.editModalDept['dept_name']"
                    @keyup="checkDeptName"
                  />
                  <p class="err-text" v-if="this.inputErrors.dept_name">
                    {{ this.inputErrors.dept_name }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-11">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Add Designation"
                  @keyup="checkDesg"
                  v-model="this.newDesg"
                />
                <p v-if="this.newDesgError" class="err-text">
                  {{ this.newDesgError }}
                </p>
              </div>
              <div class="col-1">
                <button
                  class="btn btn-sm btn-success"
                  :disabled="!isNewDesgValid"
                  @click="addNewDesg"
                >
                  <i class="far fa-plus-square"></i>
                </button>
              </div>
            </div>
            <hr class="text-primary" />
            <div
              class="row border p-1 align-items-center"
              v-for="desg in editModalDept['designations']"
              :key="desg.id"
            >
              <div class="col-10">{{ desg.designation }}</div>
              <div class="col-1">
                <button class="btn btn-sm btn-info">
                  <i class="fas fa-edit"></i>
                </button>
              </div>
              <div class="col-1">
                <button class="btn btn-sm btn-danger" @click="removeDesg(desg)">
                  <i class="fas fa-minus-circle"></i>
                </button>
              </div>
            </div>
          </div>
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
            :disabled="!isFormValid"
            @click="saveDepartment"
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
    id="deleteDeptModal"
    tabindex="-1"
    aria-labelledby="deleteDeptModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="deleteDeptModalLabel">
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
                <td>: {{ this.delModalDept["id"] }}</td>
              </tr>
              <tr>
                <td>Department Name</td>
                <td>: {{ this.delModalDept["dept_name"] }}</td>
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
            @click="confDeleteDept"
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
import DepartmentService from "@/services/DepartmentService.js";
import DeptDesgService from "@/services/DeptDesgService.js";

export default {
  name: "AllDepartments",
  components: {
    NavBar,
  },
  data() {
    return {
      isFormValid: false,
      isNewDesgValid: false,
      newDesg: "",
      newDesgError: null,
      inputErrors: {
        dept_name: false,
      },
      viewModalDept: {
        id: -1,
        dept_name: "",
        designations: [],
      },
      editModalDept: {
        id: -1,
        dept_name: "",
        designations: [],
      },
      delModalDept: {
        id: -1,
        dept_name: "",
      },
      departments: [],
      deptdesg: [],
    };
  },
  beforeMount() {
    DepartmentService.getAllDepartments().then(async (resp) => {
      if (resp.status == 200) {
        let datastr = await resp.text();
        this.departments = JSON.parse(datastr);
      } else {
        // show error here
      }
    });
    DeptDesgService.getAllDeptDesg().then(async (resp) => {
      if (resp.status == 200) {
        let datastr = await resp.text();
        this.deptdesg = JSON.parse(datastr);
      } else {
        // show error here
      }
    });
  },
  methods: {
    openViewModal(dept) {
      this.viewModalDept = dept;
      this.viewModalDept.designations = [];
      for (let i = 0; i < this.deptdesg.length; i++) {
        if (this.deptdesg[i].dept_id == dept.id) {
          this.viewModalDept.designations.push(this.deptdesg[i]);
        }
      }
    },
    deleteDept(dept) {
      this.delModalDept = dept;
      //   console.log(employee);
    },
    confDeleteDept() {
      DepartmentService.deleteDepartment(this.delModalDept.id).then(
        async (resp) => {
          if (resp.status == 200) {
            // let datastr = await resp.text();
            this.departments = this.departments.filter(
              (dpt) => dpt.id != this.delModalDept.id
            );
          } else {
            alert("Error / Department in use!");
          }
        }
      );
    },
    editDept(dept) {
      this.editModalDept = { ...dept };
      this.editModalDept.designations = [];
      for (let i = 0; i < this.deptdesg.length; i++) {
        if (this.deptdesg[i].dept_id == dept.id) {
          this.editModalDept.designations.push(this.deptdesg[i]);
        }
      }
      console.log(this.editModalDept);
    },
    checkError() {
      const errKeys = Object.keys(this.inputErrors);
      for (let i = 0; i < errKeys.length; i++) {
        if (this.inputErrors[errKeys[i]]) {
          // console.log(this.inputErrors[errKeys[i]]);
          this.isFormValid = false;
          return;
        }
      }
      this.isFormValid = true;
    },
    checkDeptName() {
      if (this.editModalDept.dept_name) {
        let inp = this.editModalDept.dept_name.trim();
        if (inp.length < 1 || inp.length > 64) {
          this.inputErrors.dept_name =
            "Department name should be 1 to 64 characters";
        } else {
          this.inputErrors.dept_name = false;
        }
      } else {
        this.inputErrors.dept_name = "Department name is required";
      }
      this.checkError();
    },
    saveDepartment() {
      //check if name already exists
      this.checkError();
      DepartmentService.updateDepartment(this.editModalDept.id, this.editModalDept).then(async (resp) => {
        if (resp.status == 200) {
          // let datastr = await resp.text();
          for(let i=0; i<this.departments.length; i++){
            if(this.departments[i].id == this.editModalDept.id) {
              this.departments[i] = {...this.editModalDept};
              alert('Department updated!');
              break;
            }
          }
        } else {
          alert('Error in updating!');
        }
      });
    },
    checkDesg() {
      if (this.newDesg) {
        let inp = this.newDesg.trim();
        if (inp.length < 1 || inp.length > 64) {
          this.newDesgError = "Designation title should 1 to 64 characters";
          this.isNewDesgValid = false;
        } else {
          this.newDesgError = false;
          this.isNewDesgValid = true;
        }
      } else {
        this.newDesgError = "Designation title is required";
        this.isNewDesgValid = false;
      }
    },
    addNewDesg() {},
    updateDesg() {},
    removeDesg(desg) {
      if (!confirm(`Are you sure you want to remove '${desg.designation}'`)) {
        return;
      }
      DeptDesgService.deleteDeptDesg(desg.id).then(async (resp) => {
        if (resp.status == 200) {
          let datastr = await resp.text();
          this.deptdesg = JSON.parse(datastr);
          this.editModalDept.designations =
            this.editModalDept.designations.filter((dg) => dg.id != desg.id);
          for (let i = 0; i < this.departments.length; i++) {
            if (this.departments[i].id == this.editModalDept.id) {
              this.departments[i].designations = [
                ...this.editModalDept.designations,
              ];
              break;
            }
          }
        } else {
          // show error here
          alert("Error deleting!");
        }
      });
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
.deptrow {
  color: white;
  border-radius: 1rem;
}
.deptrow:hover {
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

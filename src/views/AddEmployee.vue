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
            id="firstNameInput"
            class="form-control"
            v-model="this.addEmp['first_name']"
            @keyup="checkFirstName"
          />
          <p class="err-text" v-if="this.inputErrors.first_name">
            {{ this.inputErrors.first_name }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Last Name</div>
        <div class="col-6">
          <input
            type="text"
            id="lastNameInput"
            class="form-control"
            v-model="this.addEmp['last_name']"
            @keyup="checkLastName"
          />
          <p class="err-text" v-if="this.inputErrors.last_name">
            {{ this.inputErrors.last_name }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Phone</div>
        <div class="col-6">
          <input
            type="text"
            id="phoneInput"
            class="form-control"
            v-model="this.addEmp['phone']"
            @keyup="checkPhone"
          />
          <p class="err-text" v-if="this.inputErrors.phone">
            {{ this.inputErrors.phone }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Email</div>
        <div class="col-6">
          <input
            type="text"
            id="emailInput"
            class="form-control"
            v-model="this.addEmp['email']"
            @keyup="checkEmail"
          />
          <p class="err-text" v-if="this.inputErrors.email">
            {{ this.inputErrors.email }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Department</div>
        <div class="col-6">
          <select
            id="deptInput"
            class="form-select"
            v-model="this.addEmp['dept_id']"
            @change="checkDept"
          >
            <option v-for="dept in departments" :key="dept.id" :value="dept.id">
              {{ dept.dept_name }}
            </option>
          </select>
          <p class="err-text" v-if="this.inputErrors.dept_id">
            {{ this.inputErrors.dept_id }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Designation</div>
        <div class="col-6">
          <select
            id="desgInput"
            class="form-select"
            v-model="this.addEmp['designation_id']"
            @change="checkDesg"
          >
            <option
              v-for="desg in deptdesg[this.addEmp['dept_id']]"
              :key="desg.id"
              :value="desg.id"
            >
              {{ desg.designation }}
            </option>
          </select>
          <p class="err-text" v-if="this.inputErrors.designation_id">
            {{ this.inputErrors.designation_id }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Salary</div>
        <div class="col-6">
          <input
            type="number"
            id="salaryInput"
            step="0.01"
            min="12000"
            class="form-control"
            v-model="this.addEmp['salary']"
            @keyup="checkSalary"
          />
          <p class="err-text" v-if="this.inputErrors.salary">
            {{ this.inputErrors.salary }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="offset-6 col-6">
          <button
            id="addEMPBtn"
            class="btn btn-primary w-100"
            @click="submitEmployee"
            :disabled="!isFormValid"
          >
            Add Employee
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
  name: "AddEmployee",
  components: {
    NavBar,
  },
  data() {
    return {
      isFormValid: false,
      departments: [],
      deptdesg: {},
      addEmp: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        dept_id: -1,
        designation_id: -1,
        salary: 0,
      },
      inputErrors: {
        first_name: null,
        last_name: null,
        phone: null,
        email: null,
        dept_id: null,
        designation_id: null,
        salary: null,
      },
    };
  },
  beforeMount: function () {
    DepartmentService.getAllDepartments().then(async (resp) => {
      if (resp.status == 200) {
        let datastr = await resp.text();
        this.departments = JSON.parse(datastr);
      } else {
        alert("Error fetching departments!");
      }
    });
    DeptDesgService.getAllDeptDesg().then(async (resp) => {
      if (resp.status == 200) {
        let datastr = await resp.text();
        let deptdesgArr = JSON.parse(datastr);
        for (let i = 0; i < deptdesgArr.length; i++) {
          if (this.deptdesg[deptdesgArr[i].dept_id]) {
            this.deptdesg[deptdesgArr[i].dept_id].push(deptdesgArr[i]);
          } else {
            this.deptdesg[deptdesgArr[i].dept_id] = [deptdesgArr[i]];
          }
        }
      } else {
        alert("Error fetching designations!");
      }
    });
  },
  created() {
    if (
      !localStorage.getItem("accessToken") ||
      !localStorage.getItem("refreshToken")
    ) {
      this.$router.push({ path: "/login" });
    }
  },
  methods: {
    checkError() {
      const errKeys = Object.keys(this.inputErrors);
      for (let i = 0; i < errKeys.length; i++) {
        if (
          this.inputErrors[errKeys[i]] == null ||
          this.inputErrors[errKeys[i]]
        ) {
          // console.log(this.inputErrors[errKeys[i]]);
          this.isFormValid = false;
          return true;
        }
      }
      this.isFormValid = true;
      return false;
    },
    checkFirstName() {
      if (this.addEmp.first_name) {
        this.addEmp.first_name = this.addEmp.first_name.trim();
        if (
          this.addEmp.first_name.length < 1 ||
          this.addEmp.first_name.length > 64
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
      if (this.addEmp.last_name) {
        this.addEmp.last_name = this.addEmp.last_name.trim();
        if (
          this.addEmp.last_name.length < 1 ||
          this.addEmp.last_name.length > 64
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
      if (this.addEmp.phone) {
        this.addEmp.phone = this.addEmp.phone.trim();
        if (this.addEmp.phone.length != 10) {
          this.inputErrors.phone = "Phone should be 10 digits";
        } else if (!phoneRegex.test(this.addEmp.phone)) {
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
      if (this.addEmp.email) {
        this.addEmp.email = this.addEmp.email.trim();
        if (this.addEmp.email.length < 1 || this.addEmp.email.length > 240) {
          this.inputErrors.email = "Email should be under 240 characters";
        } else if (!emailRegex.test(this.addEmp.email)) {
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
      if (this.addEmp.dept_id && this.addEmp.dept_id != -1) {
        if (isNaN(this.addEmp.dept_id)) {
          this.inputErrors.dept_id = "Invalid department selected";
        } else {
          this.inputErrors.dept_id = false;
        }
      } else {
        this.inputErrors.dept_id = "Department is required";
      }
      this.checkError();
    },
    checkDesg() {
      if (this.addEmp.designation_id && this.addEmp.designation_id != -1) {
        if (isNaN(this.addEmp.designation_id)) {
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
      if (this.addEmp.salary) {
        if (this.addEmp.salary < 0) {
          this.inputErrors.salary = "Invalid salary input";
        } else {
          this.inputErrors.salary = false;
        }
      } else {
        this.inputErrors.salary = "Ssalary is required";
      }
      this.checkError();
    },
    submitEmployee() {
      if (this.checkError()) {
        return;
      }
      this.addEmp.dept_id = parseInt(this.addEmp.dept_id);
      this.addEmp.designation_id = parseInt(this.addEmp.designation_id);
      EmployeeService.addEmployee(this.addEmp)
        .then(async (resp) => {
          if (resp.status == 200) {
            // let datastr = await resp.text();
            this.addEmp = {
              first_name: "",
              last_name: "",
              phone: "",
              email: "",
              dept_id: -1,
              designation_id: -1,
              salary: 0,
            };
            this.isFormValid = false;
            alert("Employee Added!");
          } else {
            alert("Error Adding Employee!");
          }
        })
        .catch((err) => {
          console.error(err);
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
.err-text {
  color: red;
  font-style: italic;
}
</style>

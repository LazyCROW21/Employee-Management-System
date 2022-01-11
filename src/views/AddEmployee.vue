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
            class="form-select"
            v-model="this.addEmp['dept_id']"
            @change="checkDept"
          >
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="col-6">Designation</div>
        <div class="col-6">
          <select
            class="form-select"
            v-model="this.addEmp['designation_id']"
            @change="checkDesg"
          >
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

export default {
  name: "AddEmployee",
  components: {
    NavBar,
  },
  data() {
    return {
      isFormValid: false,
      addEmp: {
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        dept_id: "",
        designation_id: "",
        salary: 0,
      },
      inputErrors: {
        first_name: false,
        last_name: false,
        phone: false,
        email: false,
        dept_id: false,
        designation_id: false,
        salary: false,
      },
    };
  },
  methods: {
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
    checkFirstName() {
      if (this.addEmp.first_name) {
        this.addEmp.first_name = this.addEmp.first_name.trim();
        if (
          this.addEmp.first_name.length < 0 ||
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
      if (this.addEmp.dept_id) {
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
      if (this.addEmp.designation_id) {
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
#addEMPBox {
  max-width: 720px;
}
.err-text {
  color: red;
  font-style: italic;
}
</style>

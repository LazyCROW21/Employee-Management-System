<template>
  <NavBar />
  <div class="container-fluid">
    <h1 class="text-center mt-2">Add New Department</h1>
    <hr />
    <div class="p-2 mx-auto" id="addEMPBox">
      <div class="row p-2 align-items-center">
        <div class="col-6">Department Name</div>
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            v-model="this.addDept['dept_name']"
            @keyup="checkDeptName"
          />
          <p class="err-text" v-if="this.inputErrors.dept_name">
            {{ this.inputErrors.dept_name }}
          </p>
        </div>
      </div>
      <div class="row p-2 align-items-center">
        <div class="offset-6 col-6">
          <button
            class="btn btn-primary w-100"
            @click="submitDepartment"
            :disabled="!isFormValid"
          >
            Add Department
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "AddDepartment",
  components: {
    NavBar,
  },
  data() {
    return {
      addDept: {
        dept_name: "",
      },
      isFormValid: false,
      inputErrors: {
        dept_name: false,
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
    checkDeptName() {
      if (this.addDept.dept_name) {
        let inp = this.addDept.dept_name.trim();
        if (inp.length < 1 || inp.length > 64) {
          this.inputErrors.dept_name =
            "Department name should 1 to 64 characters";
        } else {
          this.inputErrors.dept_name = false;
        }
      } else {
        this.inputErrors.dept_name = "Department name is required";
      }
      this.checkError();
    },
    submitDepartment() {
      //check if name already exists
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

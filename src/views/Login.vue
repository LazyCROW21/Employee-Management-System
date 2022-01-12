<template>
  <div class="container">
    <div
      class="d-flex flex-column justify-content-between align-items-center py-4"
      id="loginFlexBox"
    >
      <h1 class="text-center py-4">Login</h1>
      <div class="formdiv">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            v-model="this.email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            v-model="this.pwd"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <p class="text-danger" v-if="this.invalid">Invalid username/password</p>
        <button class="btn btn-outline-dark mt-4" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  name: "LoginPage",
  data() {
    return { invalid: false, email: "", pwd: "" };
  },
  created(){
    if(localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')) {
      this.$router.push({path: '/'});
    }
  },
  methods: {
    login() {
      var data = {
        email: this.email,
        pwd: this.pwd
      }
      AuthService.login(data).then(async (resp) => {
          if (resp.status == 200) {
            let data = await resp.text();
            let dataObj = JSON.parse(data);
            localStorage.setItem('accessToken', dataObj.accessToken);
            localStorage.setItem('refreshToken', dataObj.refreshToken);
            this.$router.push({path: '/'});
          } else {
            this.invalid = true;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
  background-color: white;
  border-radius: 2rem;
  margin-top: 4rem;
}
.formdiv {
  max-width: 400px;
}
button {
  width: 100%;
}
#loginFlexBox {
  min-height: 85vh;
}
</style>

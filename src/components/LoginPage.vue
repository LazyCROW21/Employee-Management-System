<template>
  <div class="container">
  <div class="d-flex flex-column justify-content-between" id="loginFlexBox">
    <h1 class="text-center py-4">Login</h1>
    <form class="mx-auto">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="btn btn-outline-dark mt-4">Login</button>
    </form>
  </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
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
form {
    max-width: 360px;
    padding: 2rem;
}
button {
    width: 100%;
}
#loginFlexBox {
    min-height: 85vh;
}
</style>

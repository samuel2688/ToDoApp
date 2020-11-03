<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Top Navigation bar -->
      <nav class="navbar col-12 navbar-light bg-light ">
        <a class="navbar-brand navbar-fixed-top" href="#">
          Sam's Application
        </a>
        <div class="">
          <strong>
            <router-link to="/" class="pl-2 text-dark">Home</router-link>
          </strong>
        </div>
      </nav>
    </div>
    <div
      id="welcome-content"
      class="pb-5 pt- row d-flex justify-content-center align-items-center flex-column"
    >
      <div
        class="col-4 p-4 d-flex justify-content-center align-items-center flex-column"
      >
        <!-- Welcome Message in middle of screen -->
      </div>

      <div class="login-form p-5 w-25">
        <form @submit.prevent>
          <h2 class="text-center">App login</h2>
          <div class="form-group pt-2">
            <input
              type="text"
              class="form-control"
              placeholder="Email Address"
              required="required"
              v-model="form.email"
            />
          </div>
          <div class="form-group ">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              required="required"
              v-model="form.password"
            />
          </div>
          <div class="form-group">
            <button
              @click="loginUser"
              type="submit"
              class="btn btn-primary btn-block"
            >
              Log in
            </button>
          </div>
        </form>
        <p class="text-center text-light">
          <a class="text-light" href="/register">Create an Account</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      route: "/api/login",
      form: {},
      token: localStorage.getItem("token"),
      state: this.$store.state.app,
    };
  },

  created() {
    if (this.token) {
      this.$router.push({ name: "todo" });
    }
  },
  methods: {
    loginUser() {
      this.$axios
        .post(this.route, this.form)
        .then(({ data }) => {
          localStorage.setItem("token", data.token);
          this.$store.dispatch("app/setToken", data.token);
          this.$router.push({ name: "todo" });
        })

        .catch((e) => {
          console.log(this);
          console.log(e);
        });
    },
  },
};
</script>

<style>
.container-fluid {
  background-image: url(https://cdn.wallpapersafari.com/64/26/fDOZxE.png);
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#form {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) !important;
  background-color: white;
  border-radius: 7px;
}

table {
  background-color: white;
  border-radius: 7px;
}

#welcome-content {
  color: white;
}
</style>

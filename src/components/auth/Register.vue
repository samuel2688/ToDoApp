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
            <router-link to="login" class="pl-2 text-dark">Login</router-link>
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
        <div class="row centered-form p-5 w-100 justify-content-center ">
          <div class="">
            <div class="panel panel-default ">
              <div class="panel-heading">
                <h3 class="panel-title text-center pb-3">
                  Sign up for access
                </h3>
              </div>
              <div class="panel-body">
                <form role="form">
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-group">
                        <input
                          v-model="form.first_name"
                          type="text"
                          name="first_name"
                          id="first_name"
                          class="form-control input-sm"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-group">
                        <input
                          v-model="form.last_name"
                          type="text"
                          name="last_name"
                          id="last_name"
                          class="form-control input-sm"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-group">
                        <input
                          v-model="form.email"
                          type="email"
                          name="email"
                          id="email"
                          class="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-group">
                        <input
                          type="number"
                          name="age"
                          id="age"
                          placeholder="Age"
                          class="form-control input-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-group">
                        <input
                          v-model="form.password"
                          type="password"
                          name="password"
                          id="password"
                          class="form-control input-sm"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-group">
                        <input
                          type="password"
                          name="password_confirmation"
                          id="password_confirmation"
                          class="form-control input-sm"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                  </div>

                  <input
                    @submit.prevent
                    @click="createUser"
                    type="submit"
                    value="Register"
                    class="btn btn-primary btn-block"
                  />
                  <!-- <p>
                    Password does not match!
                  </p> -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {},
      route: "/api/register",
    };
  },
  methods: {
    createUser() {
      axios
        .post(this.route, this.form)
        .then(() => {
          console.log("success");
        })
        .catch((e) => {
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

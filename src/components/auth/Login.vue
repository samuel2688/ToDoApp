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
        <form action="/examples/actions/confirmation.php" method="post">
          <h2 class="text-center">App login</h2>
          <div class="form-group pt-2">
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              required="required"
            />
          </div>
          <div class="form-group ">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">
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
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      id: ``,
      todos: [],
      form: { name: "", description: "", id: `` },
      name: "",
      description: "",
      route: "/api/todos/",
      edit: false,
      currentTask: {},
      creating: false,
      showCreate: true,
      info: null,
      main: "",
    };
  },

  mounted() {
    this.getWeather();
    this.getTodos();
  },
  methods: {
    getWeather() {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=jacksonville,fl,USA&units=imperial&appid=242d99ffa001312d6a244d0d2fb4e5f4`
        )
        .then((res) => (this.info = res.data));
    },

    getTodos() {
      axios
        .get(this.route)
        .then(({ data }) => {
          this.todos = [...data];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCurrentTask(todos) {
      this.currentTask = { ...todos };
    },
    createtodos() {
      axios
        .post(this.route, this.form)

        .then(() => {
          this.getTodos();
          this.form = {};
          this.creating = false;
          this.showCreate = true;
        })

        .catch((e) => {
          console.log(e);
        });
    },

    deletetodos(id) {
      axios
        .delete(this.route + id)

        .then((result) => {
          console.log(result);
          this.getTodos();
          this.form = {};
        })

        .catch((e) => {
          console.log(e);
        });
    },
    updatetodos(id) {
      axios
        .put(this.route + id, {
          name: this.currentTask.name,
          description: this.currentTask.description,
        })
        .then((result) => {
          console.log(result);
          this.getTodos();
          this.edit = false;
          this.showCreate = true;
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

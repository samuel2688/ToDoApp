<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Top Navigation bar -->
      <nav class="navbar col-12 navbar-light bg-light ">
        <a class="navbar-brand navbar-fixed-top" href="#">
          Sam's Application
        </a>
        <div class="text-dark">
          <strong>
            <router-link to="/" class="pl-2 text-dark">Home</router-link>
            <router-link to="login" class="pl-2 text-dark">Login</router-link>
            <router-link to="register" class="pl-2 text-dark"
              >Register</router-link
            >
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
        <h1 class="text-success text-center">Welcome to Sam's ToDo App!</h1>
        <p class="text-center">
          This apps allows you to create todos, delete, and make modifications.
          Come back later for more features. If you would like to see more,
          please send us a message!
        </p>
        <div v-if="showCreate">
          <button
            @click="(creating = true), (showCreate = false)"
            class="btn btn-primary mt-5"
          >
            Add New Task
          </button>
        </div>
      </div>
    </div>
    <template v-if="creating">
      <div class=" w-50 col-8 d-flex mx-auto ">
        <table class="table-dark table rounded">
          <tr class="">
            <td class="align-middle ">
              <label class="pl-3 text-white" for="">Title: </label>
            </td>
            <td class="pr-4">
              <input class="form-control" v-model="form.name" type="text" />
            </td>
            <td class="align-middle ">
              <label class="text-white pl-4" for="">Description: </label>
            </td>
            <td>
              <input
                class="form-control"
                type="text"
                v-model="form.description"
              />
            </td>
            <td>
              <button @click="createtodos" class="btn btn-success">
                Save
              </button>
            </td>
            <td>
              <button
                @click="(creating = false), (showCreate = true)"
                class="btn btn-secondary"
              >
                Cancel
              </button>
            </td>
          </tr>
        </table>
      </div></template
    >
    <template v-if="edit">
      <div class=" w-50 col-8 d-flex mx-auto ">
        <table class="table-warning table rounded">
          <tr class="" :key="todos.id">
            <td class="align-middle ">
              <label class="pl-3 " for="">Title: </label>
            </td>
            <td class="pr-4">
              <input
                class="form-control"
                v-model="currentTask.name"
                type="text"
              />
            </td>
            <td class="align-middle ">
              <label class=" pl-5" for="">Description: </label>
            </td>

            <td>
              <input
                class="form-control"
                type="text"
                v-model="currentTask.description"
              />
            </td>
            <td>
              <button
                @click="updatetodos(currentTask.id)"
                class="btn btn-success"
              >
                Update
              </button>
            </td>
            <td>
              <button
                @click="
                  edit = false;
                  showCreate = true;
                "
                class="btn btn-secondary"
              >
                Cancel
              </button>
            </td>
          </tr>
        </table>

        <div class="footer"></div></div
    ></template>

    <section class="pt-1 w-75 row mx-auto   ">
      <div class="col-8 d-flex mx-auto justify-content-center ">
        <!-- Table for displaying all todos on the right side of screen -->
        <table class="table table-striped ">
          <tr class="d-flex pl-3">
            <td class="col-5"><strong>Title</strong></td>
            <td class="col-5"><strong>Description</strong></td>
            <td class="col-1"></td>
            <td class="col-1"></td>
          </tr>
          <tr class="d-flex pl-3" :key="id" v-for="(todos, id) of todos">
            <td class="col-5" v-bind:key="todos.id">
              {{ `${todos.name}` }}
            </td>
            <td class="col-4">
              {{ `${todos.description}` }}
            </td>
            <td class="col-1">
              <!-- Delete task button on the right of todos -->
              <button
                type="button"
                class="btn btn-danger"
                @click="deletetodos(todos.id)"
              >
                Delete
              </button>
            </td>
            <td></td>
            <td class="col-1">
              <!-- Button used to switch form to edit mode -->
              <button
                class="btn btn-warning"
                @click="
                  edit = true;
                  showCreate = false;
                  getCurrentTask(todos);
                "
              >
                Edit
              </button>
            </td>
          </tr>
        </table>
      </div>
      <!-- <div class=" w-50 col-8 d-flex mx-auto ">
        <table class=" table rounded">
          <tr>
            <td>{{ newJoke.question }}</td>
            <td></td>
          </tr>
        </table>
      </div> -->
    </section>
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
a {
  color: black;
}
</style>

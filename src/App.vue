<template>
  <div id="app">
    <h1>Sam's Tasklist Application</h1>
    <button @click="getTasks">Show tasks</button>

    <form id="form1" @submit.prevent>
      <label>Title:</label>
      <input type="text" v-model="name" />
      <label>Description</label>
      <input type="text" v-model="description" />
      <button @click="createTasks">Create New Task</button>
    </form>
    <div id="list1">
      <table :key="index" v-for="(tasks, index) in tasks">
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td v-bind:key="tasks.id">{{ `${tasks.name}` }}</td>
          <td>{{ `${tasks.description}` }}</td>
          <td><button v-on:click="deleteTasks(tasks.id)">Delete</button></td>
          <td><button v-on:click="formEditor = true">Edit</button></td>
        </tr>
      </table>

      <!-- <form id v-if="formEditor" @submit.prevent>
          <label>Title:</label>
          <input type="text" v-model="form.name" />
          <label>Description</label>
          <input type="text" v-model="description" />
          <button @click="updateTasks">update Task</button>
        </form> -->
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
      tasks: [],
      form1: {},
      name: "",
      description: "",
      route: "/api/tasks/",
      formEditor: false,
    };
  },
  methods: {
    getTasks() {
      axios
        .get(this.route)
        .then(({ data }) => {
          this.tasks = [...data];
        })
        .catch((e) => {
          console.log(e);
        });
    },

    createTasks() {
      axios
        .post(this.route, this.form1)

        .then(() => {
          this.getTasks();
          this.form = {};
        })

        .catch((e) => {
          console.log(e);
        });
    },

    deleteTasks(id) {
      axios
        .delete(this.route + id)

        .then((result) => {
          console.log(result);
          this.getTasks();
          this.form = {};
        })

        .catch((e) => {
          console.log(e);
        });
    },
    updateTasks(id) {
      axios
        .update(this.route + id)
        .then((result) => {
          console.log(result);
          this.getTasks();
        })

        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style>
#list1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  padding: 20px;
}

form input {
  margin-top: 2 px;
}

table,
td,
tr {
  border: 1px solid black;
  width: 720px;
  margin-left: auto;
  margin-right: auto;
}

td {
  width: 50%;
}

table {
  width: 720px;
}

html {
  background: -webkit-linear-gradient(
    to right,
    #667db6,
    #0082c8,
    #0082c8,
    #667db6
  );

  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  width: 40%;
  margin: auto;
}
</style>

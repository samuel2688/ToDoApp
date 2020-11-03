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
        <h1 class="text-success text-center">Page Not Found!</h1><h3><button>Go Back to Home Page</button></h3>
        
      </div>
    </div>
    </template>
<script>
export default {
name: "pageNotFound"
}
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

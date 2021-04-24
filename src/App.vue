<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/music">Music</router-link> |
      <router-link to="/sports">Sports</router-link> |
      <router-link to="/academic">Academic</router-link> |
      <router-link to="/travel">Travel</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0px;
  background: #0a2a43;
  min-height: 1500px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #427fb9;
}

#nav {
  padding: 20px;
  width: 100%;
  background-color: rgb(10, 10, 41);
  position: fixed;
  top: 0;
  z-index: 100;
}

#nav a {
  font-weight: bold;
  color: #427fb9;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>

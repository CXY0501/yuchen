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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #427fb9;
}
</style>

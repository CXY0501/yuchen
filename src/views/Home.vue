<template>
  <div class="home">
    <div class="focusimg">
      <img id="focusimg" src="../assets/img/home/hockey.jpeg" alt="">
      <span id="intro">Hi, this is YC Chen, <br>Welcome to my personal website!</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style>
  #focusimg{
    width: 100vw;
    left: 0px;
    margin: 0px;
  }
  #intro{
    position: absolute;
    padding-top: 5%;
    left: 10%;
    top: 25%;
    background-color: rgba(5, 42, 85, 0.75);
    height: 25%;
    width: 45%;
    color: white;
    font-size: 30px;
    box-shadow: 3px;
    align-content: center;
  }
</style>

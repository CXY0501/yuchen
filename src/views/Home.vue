<template>
  <div class="home">
    <div class="homebox">
      <img id="focusimg" src="../assets/img/home/hockey.jpeg" alt="">
      <span id="intro">Hi, this is YC Chen, <br>Welcome to my personal website!</span>
    </div>
    <div id="history">
      <div id="growth">My Growth</div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
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
  .homebox{
    overflow: hidden;
    height: 90vh;
  }
  #focusimg{
    float: left;
    /* top:-60px; */
    width: 100vw;
    left: 0px;
    margin-top: -100px;
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
  #history span{
    margin: 15px;
    display: inline-block;
    height: 200px;
    width: 300px;
    background-color: #eeee;
  }
  #growth{
    margin-top: 25px;
    font-size: 30px;
  }
</style>

<template>
  <div class="home">
    <div class="homebox">
      <img id="focusimg" src="../assets/img/home/hockey.jpeg" alt="" />
      <span id="intro"
        >Hi, this is YC Chen, <br />Welcome to my personal website!</span
      >
    </div>
    <div id="growth">My Growth</div>
    <div id="history">
      <span class="arrow"
        ><img src="../assets/img/home/leftarrow.png" alt=""
      /></span>
      <span class="growthpic">Age 0</span>
      <span class="growthpic">Age 1</span>
      <span class="growthpic">Age 2</span>
      <span class="growthpic">Age 3</span>
      <span class="arrow"
        ><img src="../assets/img/home/rightarrow.png" alt=""
      /></span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.homebox {
  overflow: hidden;
  height: 90vh;
}
#focusimg {
  float: left;
  /* top:-60px; */
  width: 100vw;
  left: 0px;
  margin-top: -100px;
}
#intro {
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
.growthpic {
  margin: 15px;
  display: inline-block;
  height: 200px;
  width: 300px;
  background-color: #eeee;
}
.arrow img {
  height: 50px;
  width: 50px;
}
.arrow {
  display: table-cell;
  vertical-align: middle;
}
#history {
  margin-left: 10px;
  display: table;
}
#growth {
  margin-top: 25px;
  font-size: 30px;
}
</style>

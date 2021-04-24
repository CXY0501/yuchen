<template>
  <div class="home">
    <section class="homebox">
      <img class="star" src="../assets/img/home/bg.jpg" />
      <img class="star" src="../assets/img/home/moon.png" />
      <img class="star" src="../assets/img/home/mountain.png" />
      <img class="star" src="../assets/img/home/hockey.png" />
      <h2>YUCHEN CHEN</h2>
    </section>
    <div id="growth">- My Growth -</div>
    <!-- <div id="history">
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
    </div> -->
    <div>
      <homeswiper></homeswiper>
    </div>
  </div>
</template>

<script>
import homeswiper from "../components/Swiper";

export default {
  name: "Home",
  components: { homeswiper },
};
</script>

<style>
.homebox {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 90vh; */
}
section:before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #0a2a43, transparent);
  z-index: 1000;
}
.star {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
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
  height: 69px;
}
</style>

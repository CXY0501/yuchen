<template>
  <div class="home">
    <section class="homebox">
      <img class="bg" ref="bg" src="../assets/img/home/bg.jpg" />
      <img class="moon" ref="moon" src="../assets/img/home/moon.png" />
      <img
        class="mountain"
        ref="mountain"
        src="../assets/img/home/mountain.png"
      />
      <img class="hockey" ref="hockey" src="../assets/img/home/hockey.png" />
      <h2 id="text" ref="text">Yuchen</h2>
    </section>
    <div id="growth">- Growth -</div>
    <div>
      <homeswiper></homeswiper>
    </div>
  </div>
</template>

<script>
import homeswiper from "../components/Swiper";

export default {
  name: "Home",
  data() {
    return {
      scroll: "",
    };
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll);
      this.$refs.bg.style.top = this.scroll * 0.5 + "px";
      this.$refs.moon.style.left = -this.scroll * 0.5 + "px";
      this.$refs.mountain.style.top = -this.scroll * 0.15 + "px";
      this.$refs.mountain.style.top = this.scroll * 0.15 + "px";
      this.$refs.text.style.top = this.scroll * 1 + "px";
      // console.log(this.$refs.bg);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
  },
  components: { homeswiper },
};
</script>

<style>
.homebox {
  position: relative;
  top: 60px;
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
  z-index: 999;
}
section:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a2a43;
  mix-blend-mode: color;
  z-index: 999;
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  pointer-events: none;
}
#text {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: relative;
  width: 80%;
  color: #fff;
  font-size: 13em;
  text-align: left;
  z-index: 1;
}
.hockey {
  z-index: 2;
}
#growth {
  margin-top: 105px;
  font-size: 30px;
  height: 69px;
  color: #fff;
}
</style>

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
    <p class="myIntro">
      Hi, this is Yuchen Chen, Welcome to my personal website!
    </p>
    <div id="growth">
      <img id="growlogo" src="../assets/img/home/growth.png" />
      <p>- Growth -</p>
    </div>
    <div>
      <homeswiper></homeswiper>
    </div>
    <div id="hobbies">
      <img id="hobbielogo" src="../assets/img/home/hobbies.png" />
      <p>- Hobbies -</p>
      <div
        v-for="item in hobbyImg"
        :key="item.id"
        @mouseover="hobbyHover(item.id)"
        @mouseleave="hobbyLeave(item.id)"
        :class="{ active: item.id === selected }"
      >
        <span class="activeName">{{ item.name }}</span>
        <span><img class="hobbyImg" :src="item.url0" /></span>
      </div>
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
      selected: null,
      hobbyImg: [
        {
          id: "1",
          name: "Ice Hockey",
          url: require("../assets/img/home/hobbies/icehockey.png"),
          url0: require("../assets/img/home/hobbies/icehockey.png"),
          url1: require("../assets/img/home/hobbies/icehockey1.png"),
        },
        {
          id: "2",
          name: "Football",
          url: require("../assets/img/home/hobbies/football.png"),
          url0: require("../assets/img/home/hobbies/football.png"),
          url1: require("../assets/img/home/hobbies/football1.png"),
        },
        {
          id: "3",
          name: "Piano",
          url: require("../assets/img/home/hobbies/piano.png"),
          url0: require("../assets/img/home/hobbies/piano.png"),
          url1: require("../assets/img/home/hobbies/piano1.png"),
        },
        {
          id: "4",
          name: "Mathmatics",
          url: require("../assets/img/home/hobbies/math.png"),
          url0: require("../assets/img/home/hobbies/math.png"),
          url1: require("../assets/img/home/hobbies/math1.png"),
        },
        {
          id: "5",
          name: "Game of Go",
          url: require("../assets/img/home/hobbies/go.png"),
          url0: require("../assets/img/home/hobbies/go.png"),
          url1: require("../assets/img/home/hobbies/go1.png"),
        },
      ],
    };
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scroll);
      this.$refs.bg.style.top = this.scroll * 0.5 + "px";
      this.$refs.moon.style.left = -this.scroll * 0.5 + "px";
      this.$refs.mountain.style.top = -this.scroll * 0.15 + "px";
      this.$refs.mountain.style.top = this.scroll * 0.15 + "px";
      this.$refs.text.style.top = this.scroll * 1 + "px";
      // console.log(this.$refs.bg);
    },
    hobbyHover(id) {
      // console.log(id + "hovered");
      this.hobbyImg[id - 1].url0 = this.hobbyImg[id - 1].url1;
      this.selected = id;
    },
    hobbyLeave(id) {
      this.hobbyImg[id - 1].url0 = this.hobbyImg[id - 1].url;
      this.selected = null;
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
  width: 100vw;
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
  /* font-family: "Microsoft YaHei"; */
  position: relative;
  width: 80%;
  color: #fff;
  font-size: 13em;
  text-align: left;
  z-index: 1;
  text-shadow: 5px 5px 5px #000;
}
.hockey {
  z-index: 2;
}
#growth,
#growth p,
#hobbies,
#hobbies p {
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 30px;
  /* height: 69px; */
  color: #fff;
}
.myIntro {
  margin-top: 100px;
  color: #fff;
  font-size: 1.5em;
  padding-left: 50px;
  padding-right: 50px;
}
#growlogo,
#hobbielogo {
  width: 200px;
}
.hobbyImg {
  width: 80px;
}
#hobbies {
  color: #0a2a43;
  font-size: 50px;
}
.active {
  background-color: #fff;
  /* line-height: 225px; */
}
.active img {
  width: 150px;
  filter: drop-shadow(16px 16px 10px black);
  cursor: pointer;
}
.activeName {
  display: none;
}
.active .activeName {
  display: block;
  cursor: pointer;
}
</style>

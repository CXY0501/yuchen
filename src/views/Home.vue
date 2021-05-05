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
    <div class="myIntro">
      <p class="welcome">
        Hi, this is Yuchen Chen, Welcome to my personal website!
      </p>
      <h3>Bob’s Exciting adventure</h3>
      <h4><i>By Yuchen Chen</i></h4>
      <p>
        If you walk pass 125 Leaf Street, you will see a poor dog barking
        unhappily in a big cage. Well, the dog’s name is Bob. How did he end up
        here? Here’s his story. Actually, before Bob had a very good owner. One
        day, Bob’s owner took him to the park. The park was fresh and green.
        Bob’s best friend, Ben accidentally bit on Bob’s string which is tied to
        his owner. The string broke! Bob ran out of the park and down the
        street. He didn't realised that he was lost. Bob ran and ran. Finally,
        he was on Leaf street. His owner was still talking to Ben’s owner. Bob
        was lost. After a few months, Bob became a stray dog. A man who didn't
        like dogs saw him. The man wanted to go away but he was kind. Even he
        didn't like dogs, he still adopted Bob.
      </p>
      <p>
        So, now we know how Bob got into Leaf Street, let’s talk about his life
        now. Why is still Bob unhappy? Maybe He still misses his own owner and
        he doesn't like his adopted owner. His adopted owner only feeds him once
        a day. Also, Bob can’t go to the green, fresh park everyday like old
        times and he can’t eat his favourite fruit-blueberries. Bob loves
        blueberries. His own owner gave him blueberries everyday. One day, Bob
        can’t take it anymore. That night, when his owner came over to the dog
        cage and checked if Bob was sleeping, Bob was closing his eyes. He was
        pretending that he was sleeping. When his adopted owner slowly opened
        the cage, Bob zoomed out of the cage as fast as a lightning! His adopted
        owner chased him, but it was too late. Bob was out of sight.
      </p>
      <p>
        Bob was finally out of Leaf Street. What’s his goal? Find his own owner.
        Bob looked around. He saw a signal that told him Kent Road, go right. He
        remembered that his own owner lives in Kent Road! He ran and ran. One
        signal told him that he is in Kent Road! Bob looked right and left.
        Then, he started to find the number 669. Finally, after a few minutes,
        he found number 669. Hi barked at the door for a few hours. Bob was
        starving. He thought that if he sleeps on the ground, tomorrow, his
        owner can find him. Next morning, Bob found himself in a dog cage. He
        was back in his owner’s house! Hooray! Bob returned at his own owner’s
        house.
      </p>
      <p>They had a great time in the rest of their life.</p>
    </div>
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
        @click="hobbyClick(item.id)"
        :class="{ active: item.id === selected }"
      >
        <div class="activeName">{{ item.name }}</div>
        <div><img class="hobbyImg" :src="item.url0" /></div>
        <div class="activeIntro" :style="{ display: item.clicked }">
          <div class="IntroLeft"><img :src="item.picurl" alt="" /></div>
          <div class="IntroRight">
            <p>{{ item.hobbyIntro }}</p>
            <router-link :to="item.link">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footerBox">
        <div class="links">
          <h3>Useful Links</h3>
          <ul>
            <li>
              <a href="https://www.hktyphoons.com/" target="blank">
                HK Typhoons
              </a>
            </li>
            <li>
              <a href="https://www.ycis-hk.com/en/" target="blank">YCIS</a>
            </li>
            <li><a href="https://www.apsoccer.hk/" target="blank">APSS</a></li>
            <li></li>
          </ul>
        </div>
        <div class="follow">
          <h3>Follow me</h3>
          <span>
            <ul>
              <li>
                <img src="../assets/img/home/wechatlogo.png" class="logo" />
              </li>
              <li><img src="../assets/img/home/Wechat.jpeg" alt="" /></li>
            </ul>
          </span>
          <span>
            <ul>
              <li>
                <img src="../assets/img/home/gzhlogo.png" class="logo" />
              </li>
              <li><img src="../assets/img/home/gzh.jpeg" alt="" /></li>
            </ul>
          </span>
          <span>
            <ul>
              <li><img src="../assets/img/home/email.png" class="logo" /></li>
              <li>ycchen@gmail.com</li>
            </ul>
          </span>
        </div>
        <div class="leaveMessage">
          <h3>Leave me your message</h3>
          <form name="leaveMessage" method="POST">
            <textarea name="Message" id="111" cols="50" rows="3"></textarea>
            <input type="button" value="Submit" />
          </form>
        </div>
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
          picurl: require("../assets/img/home/hobbies/icehockeypic.jpeg"),
          link: "/sports",
          hobbyIntro:
            "I started to learn Ice Hockey from age of 5, now I'm a Selected U8 Hockey Player in Hong Kong Typhoons Ice Hockey Club",
          clicked: "none",
        },
        {
          id: "2",
          name: "Football",
          url: require("../assets/img/home/hobbies/football.png"),
          url0: require("../assets/img/home/hobbies/football.png"),
          url1: require("../assets/img/home/hobbies/football1.png"),
          picurl: require("../assets/img/home/hobbies/footballpic.jpeg"),
          link: "/sports",
          hobbyIntro:
            "Football is my second favorite sport, now I'm a Selected U8 Football Player in Hong Kong Asia Pacific Soccer School",
          clicked: "none",
        },
        {
          id: "3",
          name: "Piano",
          url: require("../assets/img/home/hobbies/piano.png"),
          url0: require("../assets/img/home/hobbies/piano.png"),
          url1: require("../assets/img/home/hobbies/piano1.png"),
          picurl: require("../assets/img/home/hobbies/pianopic.jpeg"),
          link: "/music",
          hobbyIntro:
            "I have been learning and playing piano for 3 years, now I'm practicing grade 5 of ABRSM",
          clicked: "none",
        },
        {
          id: "4",
          name: "Mathmatics",
          url: require("../assets/img/home/hobbies/math.png"),
          url0: require("../assets/img/home/hobbies/math.png"),
          url1: require("../assets/img/home/hobbies/math1.png"),
          picurl: require("../assets/img/home/hobbies/mathpic.jpeg"),
          link: "/academic",
          hobbyIntro:
            "I like to resolve Math problems, and I'm especially enjoying winning awards in Math Competitions",
          clicked: "none",
        },
        {
          id: "5",
          name: "Game of Go",
          url: require("../assets/img/home/hobbies/go.png"),
          url0: require("../assets/img/home/hobbies/go.png"),
          url1: require("../assets/img/home/hobbies/go1.png"),
          picurl: require("../assets/img/home/hobbies/footballpic.jpeg"),
          link: "/sports",
          hobbyIntro:
            "I am trying to upgrade my level in Game of Go, as I like thinking and winning the games",
          clicked: "none",
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
      this.hobbyImg[id - 1].clicked = "none";
    },
    hobbyClick(id) {
      this.hobbyImg[id - 1].clicked = "block";
      console.log(this.hobbyImg[id - 1].clicked);
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
.home .myIntro {
  width: 70%;
  text-align: left;
  margin: 100px auto;
  color: #fff;
  font-size: 1em;
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
  margin-top: 50px;
  color: #fff;
  font-size: 85px;
}
.active {
  position: relative;
}
.active .hobbyImg {
  position: absolute;
  top: 5px;
  left: 22%;
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
.active .activeIntro {
  margin: 0 auto;
  width: 80%;
  height: 500px;
  background-color: #e3e3e3;
  box-shadow: 15px 15px 15px black;
}
.footer {
  height: 250px;
  background-color: rgba(0, 0, 0, 0.85);
}
.myIntro h3,
.myIntro h4,
.myIntro .welcome {
  font-size: 1.5em;
  text-align: center;
}
.myIntro h4 {
  font-size: 1em;
}
.footerBox {
  width: 80%;
  margin: 0 auto;
}
.footerBox div {
  float: left;
  width: 33%;
  text-align: center;
  padding-top: 30px;
}
.footer ul {
  margin: 0;
  padding: 0;
}
.footer li {
  list-style-type: none;
}
a {
  color: #427fb9;
  text-decoration: none;
}
a:active {
  color: #e3e3e3;
}
a:hover {
  color: #fff;
}
.follow span {
  float: left;
  display: inline-block;
  width: 20%;
  height: 90px;
  padding-left: 10px;
}
.follow img {
  width: 50px;
}
.follow .logo {
  width: 25px;
}
.IntroLeft {
  float: left;
  width: 70%;
  height: 100%;
  background-color: skyblue;
  overflow: hidden;
}
.IntroRight {
  float: left;
  width: 30%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
}
.IntroLeft img {
  width: 100%;
}
.IntroRight p {
  margin: 20px;
  padding-top: 45px;
  text-align: left;
  font-size: 25px;
}
.IntroRight a {
  font-size: 20px;
}
</style>

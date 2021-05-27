<template>
  <div class="sports">
    <div class="hockeySection">
      <div class="banner">
        <embed
          class="bannerVideo"
          :src="urlChosen"
          :key="menuKey"
          autostart="true"
        />
      </div>
      <div class="hockeyGames">
        <h3>City League Season 2020/21</h3>
        <div class="menuBox">
          <ul>
            <li
              v-for="item in games"
              :key="item.url"
              @click="videoClick(item)"
              :class="{ active: item.name === selected }"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="score">
      <table class="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th>Player</th>
            <th>Season</th>
            <th>Team</th>
            <th>Shoot</th>
            <th>Position</th>
            <th>Game Played</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Points</th>
            <th>Penalty Minutes</th>
            <th>Points per Game</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Yuchen Chen</td>
            <td>2021</td>
            <td>Whimsy/Lenovo</td>
            <td>Right</td>
            <td>Defender</td>
            <td>12</td>
            <td>3</td>
            <td>1</td>
            <td>4</td>
            <td>0</td>
            <td>0.33</td>
          </tr>
          <tr>
            <td colspan="11">Goal at 10:54 on May 16th, 2021</td>
          </tr>
          <tr>
            <td colspan="11">Goal at 25:51 on Mar 21st, 2021</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="football"></div>
    <div
      class="fb-video"
      data-href="https://www.facebook.com/unclebenphotos/videos/804773700158814"
      data-width="auto"
      data-show-text="false"
    ></div>
  </div>
</template>

<script>
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
export default {
  name: "Sports",
  data() {
    return {
      games: [
        {
          name: "City League SD8AA Lenovo vs Keewah 20210516",
          url: "https://www.youtube.com/embed/5IY4sChY6bI",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210509",
          url: "https://www.youtube.com/embed/mwqD4Cncdrc",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210502",
          url: "https://www.youtube.com/embed/1w9H2ULgcnQ",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210425",
          url: "https://www.youtube.com/embed/tuRHB8uCW7s",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210418",
          url: "https://www.youtube.com/embed/WBzteFvQ-ac",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210411",
          url: "https://www.youtube.com/embed/-emP1ysgxB8",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210328",
          url: "https://www.youtube.com/embed/IMEukTiCSLQ",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210321",
          url: "https://www.youtube.com/embed/ZNg-hRO7SYE",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210314",
          url: "https://www.youtube.com/embed/ZF8UHJRiFvE",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210307",
          url: "https://www.youtube.com/embed/DfACJTN48w4",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210228",
          url: "https://www.youtube.com/embed/udZq91dg6VI",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20210221",
          url: "https://www.youtube.com/embed/6J6d8XcYsMQ",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20201129",
          url: "https://www.youtube.com/embed/XBuASCQQXew",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20201122",
          url: "https://www.youtube.com/embed/Bz8CJ0_h0vA",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20201108",
          url: "https://www.youtube.com/embed/5M4lEqpjPVQ",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20201101",
          url: "https://www.youtube.com/embed/shHUCl7Rkws",
        },
        {
          name: "City League SD8AA Lenovo vs Keewah 20201026",
          url: "https://www.youtube.com/embed/cZOTLnLAF7Q",
        },
        {
          name: "facebook video",
          url: "https://www.facebook.com/unclebenphotos/videos/804773700158814",
        },
      ],
      urlChosen: "https://www.youtube.com/embed/5IY4sChY6bI",
      selected: "City League SD8AA Lenovo vs Keewah 20210516",
      menuKey: 1,
    };
  },
  methods: {
    videoClick(item) {
      this.urlChosen = item.url;
      this.selected = item.name;
      this.menuKey++;
    },
  },
};
</script>

<style scoped>
.banner {
  width: 65%;
  margin-left: 50px;
  background-color: lightblue;
}
.bannerVideo {
  width: 100%;
  height: 100%;
}
.hockeySection {
  height: 520px;
  margin-top: 62px;
}
.banner,
.hockeyGames {
  float: left;

  height: 500px;
}
.hockeyGames {
  color: aliceblue;
  width: 28%;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.65);
}
.menuBox {
  height: 400px;
  margin-bottom: 20px;
  overflow: scroll;
  /* overflow-y: auto; */
  scrollbar-face-color: aliceblue;
}
.hockeyGames li {
  list-style-type: none;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
}
.hockeyGames ul {
  padding-left: 0px;
}
.active {
  color: lightblue;
  background-color: gray;
}
.score {
  margin-top: 20px;
}
/*chrome滚动条颜色设置*/
*::-webkit-scrollbar {
  width: 5px;
  height: 10px;
  background-color: transparent;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
*::-webkit-scrollbar-track {
  background-color: transparent;
}
/*定义滚动条轨道 内阴影+圆角*/
*::-webkit-scrollbar-thumb {
  background-color: skyblue;
  border-radius: 5px;
}

/*定义滑块 内阴影+圆角*/
.scrollbarHide::-webkit-scrollbar {
  display: none;
}
.scrollbarShow::-webkit-scrollbar {
  display: block;
}
.score {
  width: 80%;
  margin: 0 auto;
  color: aliceblue;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #cbcbcb;
}

.pure-table caption {
  color: #000;
  font: italic 85%/1 arial, sans-serif;
  padding: 1em 0;
  text-align: center;
}

.pure-table td,
.pure-table th {
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
}

.pure-table thead {
  background-color: #e0e0e0;
  color: #000;
  text-align: center;
  vertical-align: bottom;
}

.pure-table td {
  background-color: transparent;
}

.pure-table-bordered td {
  border-bottom: 1px solid #cbcbcb;
}

.pure-table-bordered tbody > tr:last-child > td {
  border-bottom-width: 0;
}
.football {
  /* margin: 0 auto; */
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 30%;
  width: 100px;
  height: 100px;
  background: url(../assets/img/sport/football.png) 0 0 / 100% 100%;
  animation: move 5s linear infinite alternate;
}
@keyframes move {
  to {
    transform: translate(500%, 0) rotate(1turn);
  }
}
.fb-video {
  width: 500px;
}
</style>

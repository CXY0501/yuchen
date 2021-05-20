<template>
  <div class="sports">
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
    <div></div>
  </div>
</template>

<script>
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
      ],
      urlChosen: "https://www.youtube.com/embed/5IY4sChY6bI",
      selected: "",
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
.banner,
.hockeyGames {
  float: left;
  margin-top: 62px;
  height: 500px;
}
.hockeyGames {
  color: aliceblue;
  width: 28%;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.65);
}
.hockeyGames li {
  list-style-type: none;
  padding-top: 10px;
  cursor: pointer;
}
.hockeyGames ul {
  padding-left: 0px;
}
</style>

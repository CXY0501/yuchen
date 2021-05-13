<template>
  <div class="sports">
    <div class="banner">
      <embed
        class="bannerVideo"
        src="https://www.youtube.com/embed/mwqD4Cncdrc"
        autostart="true"
      />
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Sports",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.banner {
  width: 85%;
  height: 500px;
  margin: 62px auto;
  background-color: lightblue;
}
.bannerVideo {
  width: 100%;
  height: 100%;
}
</style>

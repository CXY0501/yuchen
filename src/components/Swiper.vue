<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide :key="item.id" v-for="item in swiperlist">
        <img class="swiper-img" :src="item.imgURL" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeswiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        effect: "coverflow",
        coverflowEffect: {
          // coverflow 效果细节调整
          rotate: 20,
          stretch: 30,
          depth: 550,
          modifier: 2,
          slideShadows: true,
        },
        // virtual: true,
      },
      swiperlist: [
        {
          id: "001",
          imgURL: require("../assets/img/swiperImgs/swiper01.jpeg"),
        },
        {
          id: "002",
          imgURL: require("../assets/img/swiperImgs/swiper02.jpeg"),
        },
        {
          id: "003",
          imgURL: require("../assets/img/swiperImgs/swiper03.jpeg"),
        },
        {
          id: "004",
          imgURL: require("../assets/img/swiperImgs/swiper04.jpeg"),
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  overflow: hidden;
  width: 50%;
  height: 0;
  padding-bottom: 50%;
}
.swiper-img {
  width: 100%;
}
</style>

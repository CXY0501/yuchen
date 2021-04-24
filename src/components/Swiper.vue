<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide :key="item.id" v-for="item in swiperlist">
        <div>{{ item.id }} years old</div>
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
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          // coverflow 效果细节调整
          rotate: 20,
          stretch: 10,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        },
        // virtual: true,
      },
      swiperlist: [
        {
          id: "0",
          imgURL: require("../assets/img/swiperImgs/swiper00.jpeg"),
        },
        {
          id: "1",
          imgURL: require("../assets/img/swiperImgs/swiper01.jpeg"),
        },
        {
          id: "2",
          imgURL: require("../assets/img/swiperImgs/swiper02.jpeg"),
        },
        {
          id: "3",
          imgURL: require("../assets/img/swiperImgs/swiper03.jpeg"),
        },
        {
          id: "4",
          imgURL: require("../assets/img/swiperImgs/swiper04.jpeg"),
        },
        {
          id: "5",
          imgURL: require("../assets/img/swiperImgs/swiper05.jpeg"),
        },
        {
          id: "6",
          imgURL: require("../assets/img/swiperImgs/swiper06.jpeg"),
        },
        {
          id: "7",
          imgURL: require("../assets/img/swiperImgs/swiper07.jpeg"),
        },
        {
          id: "8",
          imgURL: require("../assets/img/swiperImgs/swiper08.jpeg"),
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
  width: 95%;
  /* height: 0; */
  /* padding-bottom: 50%; */
}
.swiper-img {
  width: 100%;
}
</style>

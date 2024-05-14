<template>
  <img v-if="image"
       :key="image.id"
       @load="switchImage"
       class="h-1/2 w-1/3 rounded-full transition duration-200 ease-in-out hover:scale-105 hover:shadow-xl"
       :src="image.src"
       alt="image.alt"
  >
</template>

<style scoped>
img {
  animation: fadeinout 7s ease infinite;
}
@-webkit-keyframes fadeinout {
  0% {
    opacity: 0;
    transform: translate(-20px, 0);
  }
  10% {
    opacity: 1;
    transform: translate(0px, 0);
  }
  90% {
    opacity: 1;
    transform: translate(0px, 0);
  }
  100% {
    opacity: 0;
    transform: translate(30px, 0);
  }
}

@keyframes fadeinout {
  0% {
    opacity: 0;
    transform: translate(-20vw,0);
    scale: 0.5;
  }
  10% {
    opacity: 1;
    scale: 1;
    transform: translate(0px, 0);
  }
  90% {
    opacity: 1;
    transform: translate(0px, 0);
    scale: 1;
  }
  100% {
    opacity: 0;
    transform: translate(20vw, 0);
    scale: 0.5;
  }
}
</style>

<script>
import images from "@/data/images";

export default {
  name:"DisplayImage",
  data() {
    return {
      index: 0,
      image: null,
      images: [{
        id: 0,
        src: images.me_1,
        alt: "me"
      },
        {
          id: 1,
          src: images.me_2,
          alt: "me"
        },
        {
          id: 2,
          src: images.me_3_bw,
          alt: "me"
        },
        {
          id: 3,
          src: images.me_4,
          alt: "me"
        }
      ]
    }
  },
  mounted() {
    this.image = this.images[this.index];
    this.switchImage();
  },
  methods: {
    switchImage() {
      setTimeout(() => {
        this.image = this.images[this.index];
        this.index = (this.index + 1) % this.images.length;
      }, 3000);
    }
  }
}
</script>
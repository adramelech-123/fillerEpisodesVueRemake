<!-- eslint-disable vue/no-parsing-error -->
<script setup>
    
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    

    // Static assets such as images should be located in the public folder to make them usable
    const slides = [
        { id: '1', title: 'My Hero Academia', content: "/images/popular/c1.jpg"},
        { id: '2', title: 'Demon Slayer', content: "/images/popular/c2.png"},
        { id: '3', title: 'Nanatsu no Taizai', content: "/images/popular/c3.jpg"},
        { id: '4', title: 'HunterXHunter', content: "/images/popular/c4.jpg"},
        { id: '5', title: 'Jujutsu kaisen', content: "/images/popular/c5.jpg"},
        { id: '6', title: 'Death Note', content: "/images/popular/c6.jpg"},
        { id: '7', title: 'Mob D Psycho', content: "/images/popular/c9.jpg"},
        { id: '8', title: 'Naruto: Shippudden', content: "/images/popular/c8.jpg"},
    ]

    const breakpoints = {
        // 700px and up
        480: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // 1024 and up
        1024: {
            itemsToShow: 5,
            snapAlign: 'start',
        },
    }
</script>

<template>

    <Carousel class="py-12" :wrap-around="true" :breakpoints="breakpoints" :autoplay="4000">
        <Slide v-for="slide in slides" :key="slide.id">
        <div class="carousel__item flex flex-col items-center" :style="{backgroundImage: `url(${slide.content})`}" >
            <h1 id="slide__title">{{ slide.title }}</h1>
        </div>
        </Slide>

        <template #addons>
        <Navigation />
        <Pagination/>
        </template>
    </Carousel>

</template>

<style scoped>
.carousel__item {
  min-height: 400px;
  width: 250px;
  background-color: hsl(243, 87%, 12%);
  color: white;
  font-size: 20px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  box-shadow: -2px 5px 5px rgb(0, 0, 0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.carousel__slide {
  padding: 10px;
}


.carousel__item:hover {
    cursor: pointer;
}


.carousel__image {
    height: 400px;
}

#slide__title {
    background-color: rgba(0, 0, 0, 0);
    color: transparent;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 250px;
    padding: 10px;
    border-radius: 5px;
    transition: all ease 0.5s;
}

#slide__title:hover {
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
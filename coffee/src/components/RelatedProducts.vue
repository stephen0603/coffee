<template>
      <div class="my-5"
       v-if="products.length > 0">
    <swiper :options="swiperOption">
      <swiper-slide class="item mb-5"
                    v-for="item in related"
                    :key="item.id">
        <div class="card h-100">
          <div style="
                    min-height: 200px;
                    background-size: cover;
                    background-position: center;
                    cursor: pointer
                  "
               :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }"
               @click.prevent="getDetail(item.id)">
          </div>
          <div class="card-body">
            <h6 class="card-title">
              {{ item.title }}
            </h6>
            <div class="text-right pr-2">
              {{ item.price | money }} 元
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

export default {
  data() {
    return {
      products: [],
      swiperOption: {
        speed: 900,
        allowTouchMove: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  props: {
    product: {
      type: Object,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/product/${this.id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.data;
        })
    },
    getDetail(id) {
      this.$router.push(`/product/${id}`);
     
    },
  },
  computed: {
    related() {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.product.category,
      );
    },
  },
};
</script>

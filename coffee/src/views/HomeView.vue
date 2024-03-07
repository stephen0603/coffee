<template>
  <div class="wrap">
    <Navbar></Navbar>
 <div class="d-flex align-items-center justify-content-center wrapside">
    <div>
        <div class="text-white text-center p-4" style="background-color: rgba(52,58,64,.8)">
          <h1 class="display-1 banner-title">ᎮᎥᏗᏁᎧ</h1>
          <p class="fs-4 fw-bold">
            Piano 慢慢來<br>
            跟著義大利人,享受義式老派質感生活</p>
        </div>
        <div class="text-center py-5 spot">  
          <a href="#" class=""><i class="bi bi-chevron-double-down text-white fs-1" @click.prevent="go"></i></a>
        </div>
    </div>
 </div>

      <section class="container-fluid py-3 bg-white">
        <div class="row justify-content-center">
         <div class="col-lg-4">
            <div class="text-center flex-colunm mt-5" style="animation: displayright 0.8s ease-out 1s both;">
            <span class="fw-bold border-bottom border-dark border-2 fs-4" id="show">精品咖啡</span>
            <p class="lh-lg py-4">精品咖啡通常是在特定的地形、<br>
                                            氣候以及土壤環境下種植，<br>
                                            由農民精心地照料，<br>
                                            結合了好的種植、好的處理與好的烘焙，<br>
                                            萃取出一杯杯測分數高於80分的咖啡，<br>
                                            即是一杯精品咖啡。</p>
          </div>
         </div>
          <div class="col-lg-3 align-self-center">
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" class="img-fluid rounded">
          </div>
          <div class="col-lg-3 align-self-center">
            <img src="https://images.unsplash.com/photo-1472495010058-65576a9959e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" class="img-fluid rounded">
          </div>
        </div>
      </section>

     
        <section class="bg-white  text-center" > 
          <span class="fw-bold py-2 border-bottom border-dark border-2 fs-4">商品介紹</span>
      <swiper class="container mt-5" :modules="modules" :slidesPerView="1" 
    :space-between="50"
    navigation
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
        <!-- slides -->
        
        <swiper-slide v-for="item in products" :key="item.id">
          <div class="row justify-content-center">
            <div class="col mb-4">
              <div class="row g-0 shadow justify-content-center">
                <div class="col-5">
                  <div class="bg-white flex-md-row">
                    <div class="card-body d-flex flex-column align-items-start">
                      <span class="badge badge-pill bg-warning text-dark mb-2">熱門商品</span>
                      <h3>
                        <h4 class="nav-link text-dark p-0 mb-3 ms-2" href="#">{{ item.title }}</h4>
                      </h3>
                      <div class="d-flex align-items-end mb-4">
                        <del class="h6 ms-2 me-3"
                          v-if="item.price">{{item.origin_price | currency}} 元</del>
                        <div class="h5"
                          v-if="item.price">{{item.price | currency}} 元</div>
                      </div>
                      <div class="d-flex align-items-end">
                        <a class="btn btn-sm btn-outline-success cursor-pointer m-2"
                          @click=" getProduct(item.id)">商品細節</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-5">
                  <div class="banner h-100"
                    :style="{ backgroundImage:`url('${item.imageUrl}')` }"></div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
     
     <section>
      <div class="text-white text-center">
        <h1 class="display-4 py-2">ᎮᎥᏗᏁᎧ</h1>
        <p class="py-2">取自義大利文「慢慢來」意思，放慢您的步調，跟著 Piano 享受咖啡的世界。</p>
      </div>
     </section>

     <section class="container-fluid py-3 bg-white">
          <div class="row justify-content-center flex-row-reverse">
          <div class="col-lg-4">
              <div class="text-center flex-colunm mt-5" style="animation: displayleft 0.8s ease-out 1s both;">
              <span class="fw-bold py-2 border-bottom border-dark border-2 fs-4" id="show">舒適環境</span>
              <p class="lh-lg py-4">Piano 位於信義誠品1樓，<br>
                                    以簡約歐式風格裝潢，<br>
                                    打造舒適溫馨的氣氛，<br>
                                    讓您在繁忙的生活中，<br>
                                    得到療癒的力量。</p>
            </div>
          </div>
            <div class="col-lg-3 align-self-center">
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80" alt="" class="img-fluid rounded">
            </div>
            <div class="col-lg-3 align-self-center">
              <img src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" class="img-fluid rounded">
            </div>
          </div>
        </section>
      

     <section class="container-fluid py-3 bg-white">
        <div class="row justify-content-center">
         <div class="col-lg-4">
            <div class="text-center flex-colunm mt-5" style="animation: displayright 0.8s ease-out 1s both;">
            <span class="fw-bold py-2 border-bottom border-dark border-2 fs-4" id="show">顧客回饋</span>
            <p class="lh-lg py-4">感謝大家對於 Piano 一路的信任與支持，<br> 
              我們會更努力用心做到最完美，<br> 
              來回饋大家的支持及愛護。</p>
          </div>
         </div>
          <div class="col-lg-6">
            <div class="feature-swiper">
        <swiper class="swiper" :modules="modules"
    :slides-per-view="1"
    :space-between="30"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange">
          <swiper-slide v-for="feedback in feedbacks" :key="feedback.name" >
            <div class="swiper-item">
              <div class="star">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <h4 class="feature-title">{{ feedback.name }}</h4>
              <p class="feature-text">{{ feedback.message }}</p>
            </div>
          </swiper-slide>
        </swiper>
          </div>
        </div>
      </div>
      </section>
       
      <Footer></Footer>
      
<router-view/>
</div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  components: {
    Navbar,
    Footer,
    Swiper,
    SwiperSlide,
  },
  data(){
      return{
          products:[],
          product: {}, 
          feedbacks: [
        {
          name: 'Carol',
          message: 'Adagio 氣氛很好，服務優質，披薩外皮酥脆，下次會再光臨。',
        },
        {
          name: 'Bob',
          message: '空間雖然不大，但服務與餐點都在水準之上。',
        },
        {
          name: 'Casper',
          message: '服務不錯，甜品也令人驚艷，像極了愛情。',
        },
      ],    
    }
  },
  methods:{
    go(){
      document.getElementById("show").scrollIntoView();
    }, 
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    },
    created() {
    this.getProducts();
  },
  setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },
}

</script>

<style lang="scss" scoped>
.wrap {
  overflow: hidden;
  background-image: url(https://images.unsplash.com/photo-1421622548261-c45bfe178854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: auto;
}
.pic{
  overflow:hidden;}
.pic img{transform:scale(1,1);transition: all 1s ease-out;}
.pic img:hover{transform:scale(1.2,1.2);}
  @keyframes displayleft {
  from {
    transform: translateX(150%);
  }
  to {
    transform: translateX(0%);
  }
}
.swiper-container {
  width: 100%;
}
.banner-title {
  margin-bottom: 4rem;
  animation: floating 3s infinite;
  font-size: 3rem;
  font-weight: bold;
}
@keyframes floating{
  0% {
    transform: translateY(1.5rem);
  }
  50% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(1.5rem);
  }
}
.spot{
  animation: floatingdown 3s infinite;
}
@keyframes floatingdown{
  0% {
    transform: translateY(2rem);
  }
  50% {
    transform: translateY(4rem);
  }
  100% {
    transform: translateY(2rem);
  }
}
@media (max-width:768px) {
  .spot{
    display: none;
  }
}
.banner{
  background-position: center center;
  background-size: cover;
}
.swiper-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 2rem 1rem;
  .star {
    margin-bottom: 1.5rem;
  }
}
.feature-title {
  display: inline-block;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid dark;
  font-size: 1.75rem;
}
.feature-text {
  margin: 0 auto;
  max-width: 20rem;
  line-height: 1.75;
  letter-spacing: 0.25rem;
}
.wrapside{
  height: 960px;
}
@media (max-width:768px) {
  .wrapside{
    height:400px ;
    margin-top:100px;
  }
}
</style>

<template>
    <Loading :active="isLoading"></Loading>
  <div class="quest">
     <Navbar></Navbar>
    <div class="text-center">
    <span class="fs-2 p-2 text-white" style="background-color: rgba(52,58,64,.8);">常見問題</span>
  </div>
  </div>
  <div class="container">
    <h4 class="my-5 fw-bold">常見問題</h4>
    <div class="accordion mb-5" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
        關於寄送時間
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <strong>下單後依老闆的心情出貨。</strong>若久候多時仍未收到商品，歡迎來電關心老闆：12345678910。
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        商品有瑕疵如何退貨
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>請先回報客服，</strong>再依照客服回傳給您的指示執行退貨程序,時間預計1-3個工作天
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        優惠券如何使用
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>在購物車下方。</strong>當您進入購物車時，可以先使用折價券，再進行結帳
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
        新鮮度判斷
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
        1.淺至中烘焙的咖啡豆，表面會呈現霧狀，幾乎看不見油<br>
        2.且聞起來有濃重的油耗味 ，那表示你買到不新鮮的咖啡豆<br>
        3.熱水澆在研磨後的咖啡粉上時，表面會產生泡沫的現象
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
        其他常見問題
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
      <div class="accordion-body">
        如有其他的問題，可以詢問客服，我們會盡快回復您
      </div>
    </div>
  </div>
</div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.quest{
    overflow: hidden;
    background-image: url(../assets/quest.jpg);
    background-position: center center;
    background-size: cover;
    padding-top: 200px;
    padding-bottom: 200px;
    width: 100%;
    height:auto;
  }
  </style>
  
  
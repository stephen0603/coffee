<template>
   <Loading :active="isLoading"></Loading>
  
  <div class="aboutWrap"> 
    <Navbar></Navbar>
    <div class="text-center">
    <span class="fs-2 p-2 text-white" style="background-color: rgba(52,58,64,.8);">關於我們</span>
  </div>
  </div>

  <section class="container bg-white">
        <div class="row">
         
         <div class="col-lg-6 mb-3">
            <div class="text-center py-4">
            <span class="fw-bold py-2 border-bottom border-dark border-2 fs-4"># 義大利口頭禪 ”Piano, Piano”</span>
            <p class="lh-lg py-4">”Piano, Piano”是義大利人的口頭禪之一，<br>
                                  中文意思是「不急、慢慢來」，<br>
                                  如果你身在早晨的義大利咖啡廳，<br>
                                  便會看見雖然後頭大排長龍的隊伍，<br>
                                  但服務員仍舊淡定對著彼此說「Piano, Piano」與顧客的焦急成了對比。<br></p>
                                  <p class="lh-lg py-2">
                                  因為只有試著把腳步放慢，才能看清每一個路上的風景，<br>
                                  很多時候期時只要將行程提早一小時，就能悠哉自如的享受生活。</p>
          </div>
         </div>
         <div class="col-lg-6 mb-3">
          <Carousel></Carousel>
        </div>   
        </div>
  </section>

    <section class="container bg-white">
        <div class="row flex-row-reverse">
            <div class="col-lg-6">
                <div class="my-5 text-center" style="animation: displayleft 0.8s ease-out 1s both;">
            <span class="fw-bold py-2 border-bottom border-dark border-2 fs-4 ">聯絡資訊</span>
            <p class="lh-lg py-4"> <i class="bi bi-telephone-fill text-danger px-1"></i>電話：12345678910<br>
                                    <i class="bi bi-envelope text-danger px-1"></i>聯絡信箱 ：adagio@mail.com<br>
                                    <i class="bi bi-geo-alt-fill text-danger px-1"></i>地址：台北市信義區信義路五段7號4樓<br>
                                    <i class="bi bi-clock-fill text-danger px-1"></i>營業時間：周一至周日<br>
                                    11:00-21:00</p>
        </div>
      </div>
      <div class="col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8334812396315!2d121.56368521537867!3d25.03972454421512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abbbd49806cb%3A0x1260de5e936b8e47!2zMTEw5Y-w5YyX5biC5L-h576p5Y2A5p2-6auY6LevMTHomZ80Zg!5e0!3m2!1szh-TW!2stw!4v1671351252959!5m2!1szh-TW!2stw" width=100% height=100% style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
    
      </section>
  
  <Footer></Footer>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Carousel from '@/components/Carousel.vue';


export default {
  components: {
    Navbar,
    Footer,
    Carousel,
  },
};
</script>

<style>
.aboutWrap{
  overflow: hidden;
  background-image: url(../assets/Aboutimp.jpg);
  background-position: center center;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 200px ;
  width: 100%;
  height:auto;
}
</style>



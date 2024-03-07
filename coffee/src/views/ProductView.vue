<template>
    <Loading :active="isLoading"></Loading>
    <div class="productWrap">
      <Navbar></Navbar>
      <div class="text-center">
    <span class="fs-2 p-2 text-white" style="background-color: rgba(52,58,64,.8);">產品訂購</span>
    </div>
    </div>
    <div class="container ec-container my-5">
      <div>
      <div class="banner text-center text-white my-4">
        <p class="fs-3 p-2">周年慶<br>
          輸入優惠碼<strong class="text-dark fs-2">piano88</strong>
          <br>即可享有88折優惠</p>
      </div>
    </div>
      <div class="row"
           v-if="products.length > 0">
        <div class="col-lg-2 col-md-3 mb-2">
          <ul class="list-group rounded-0">
            <a href="#"
               class="list-group-item list-group-item-action"
               @click.prevent="filterCategory = ''"
               :class="{ active: filterCategory === '' }">
              全部商品
            </a>
            <a class="list-group-item list-group-item-action"
               href="#"
               @click.prevent="filterCategory = item"
               :class="{ active: item === filterCategory }"
               v-for="item in categories"
               :key="item">
              {{ item }}
            </a>
          </ul>
          
        </div>
        <div class="col-lg-10 col-md-9">
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-3 mb-4"
                 v-for="item in filterCategories"
                 :key="item.id">
              <div class="card h-100 rounded-0">
                <button @click="getProduct(item.id)" class="border-0"><img :src= "item.imageUrl" class="card-img-top" style="width:286;height:200px" alt="...">
                </button>
                
                <div class="card-body">
                    <h4 class="card-title font-weight-bold text-brown">
                      {{ item.title }}
                    </h4>
                <p class="card-text">
                  <del class="fs-6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                  <div class="fs-5 text-danger" v-if="item.price">現在只要 {{ item.price }} 元</div>
                </p>
                </div>
                <div class="card-footer border-top-0 bg-white">
                  <div class="p-2 text-center">
                <button type="button" class="btn btn-outline-info"
                        :disabled="this.status.loadingItem === item.id"
                        @click="addCart(item.id)">
                  <i v-if="this.status.loadingItem === item.id"
                      class="spinner-grow text-info spinner-grow-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </i>
                  <i v-else
                       class="bi bi-cart-plus"
                       aria-hidden="true"></i>
                  加到購物車
                </button>
                </div>
                </div>
                </div>
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
    data() {
    return {
      products: [],
      product: {},
      categories: ['淺焙','中焙', '深焙', '咖啡器具'],
      filterCategory: '',
      status: {
        loadingItem: '', // 對應品項 id
      },
      cart: {},
    };
    },
    components: {
    Navbar,
    Footer,
  },
  methods: {
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
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart })
        .then((res) => {
          this.status.loadingItem = '';
          console.log(res);
        //   this.getCart();
        });
    },
    },
    computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => {
          const data = item.category
            .toLowerCase()
            .includes(this.filterCategory.toLowerCase());
          return data;
        });
      }
      return this.products;
    },
  },
    created() {
    this.getProducts();
  
  },
 };
</script>
<style>
.productWrap{
  overflow: hidden;
  background-image: url(../assets/productviewwrap.jpg);
  background-position: center center;
  background-size: cover;
  padding-top: 200px;
  padding-bottom: 200px;
  width: 100%;
  height:auto;
}
.banner{
  overflow: hidden;
  background-image: url(../assets/banner.jpg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height:auto;
}
@media screen and (min-width: 769px) {
    .list-group {
      position: sticky;
      top: 85px;
    }
  }


</style>
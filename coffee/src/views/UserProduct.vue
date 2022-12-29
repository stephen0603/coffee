<template>
    <Loading :active="isLoading"></Loading>
    <div class="container">
    <div class="row mt-5">
            <div class="col-lg-6 mt-5">
              <img :src="product.imageUrl" style="height: 430px;width:640px;" alt="" class="img-fluid mb-3">
            </div>
            <div class="col-lg-6 mt-5">
              <h2 class="font-weight-bold text-info">
                {{ product.title }}
              </h2>
              <p class="mt-2 text-secondary">{{ product.category }}</p>
              <p class="mt-5">{{ product.content }}</p>
              <div class="d-flex flex-column mb-3">
                <del class="fs-6 mt-3" v-if="product.price">原價 {{ product.origin_price }} 元</del>
                  <div class="fs-5 text-danger font-weight-bold mt-3" v-if="product.price">現在只要 {{ product.price }} 元</div>
              </div>
              <div class="d-flex mt-5">
                <span class="mt-2">請選取數量</span>
                <div class="w-25 mx-3">
                  <select name="unit"
                          class="form-control me-3 rounded-0"
                          v-model="product.qty">
                    <option :value="qty"
                            v-for="qty in 5"
                            :key="qty">
                      {{ qty }} {{ product.unit }}
                    </option>
                  </select>
                </div>
                <button type="button" class="btn btn-info me-3"
                  @click="addToCart(product.id,product.qty)">
                   加到購物車
                 </button>
                 <button type="button" class="btn btn-warning"
                  @click="backToProduct">
                   返回商品頁
                 </button>
              </div>
            </div>
            <hr>
            <div class="col-md-8">
            <p class="mt-5 text-info">
                【 商品說明 】
              </p>
              <p v-html="product.description"></p>
                    </div>
                  </div>  
                  </div>
  </template>

<script>
export default {
  data() {
    return {
      product: {
      },
      id: '',
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart(id, qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, '加入購物車');
      });
    },
    backToProduct(){
      this.$router.push('/productView')
    }
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>

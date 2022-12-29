<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-5 justify-content-center">
      <!-- 步驟欄 -->
      <div class="col-lg-8 step-navigation">
  <div class="email text-success">
    <i class="bi bi-envelope-fill fs-3" aria-hidden="true"></i>  
    <h5>確認商品</h5>
  </div>
  <div class="name text-secondary">
    <i class="bi bi-person-fill fs-3" aria-hidden="true"></i>
    <h5>填寫資料</h5>
  </div>
  <div class="password text-secondary">
    <i class="bi bi-unlock-fill fs-3" aria-hidden="true"></i>
    <h5>付款</h5>
  </div>
</div>
      <!-- 購物車列表 -->
      <div class="mt-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <button type="button" class="btn btn-outline-danger btn-sm"
                          :disabled="status.loadingItem === item.id"
                          @click="removeCartItem(item.id)">
                    <i class="bi bi-x"></i>
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <input type="number" class="form-control"
                          min="1"
                          :disabled="item.id === status.loadingItem"
                          @change="updateCart(item)"
                          v-model.number="item.qty">
                    <div class="input-group-text">/ {{ item.product.unit }}</div>
                  </div>
                </td>
                <td class="text-end">
                  <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                  {{ $filters.currency(item.final_total) }}
                </td>
              </tr>
            </template>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.total) }}</td>
            </tr>
            </tfoot>
          </table>
          
          <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
            <button type="button" class="form-control btn btn-outline-danger ms-3 rounded"  :class="{'disabled': cart.total === 0 }" @click.prevent="goForm">確認商品</button> 
          </div>
        <div>
        </div>
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: '', // 對應品項 id
      },
      cart: {},
      coupon_code: '',
    };
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
          this.getCart();
        });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.status.loadingItem = '';
        this.getCart();
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項');
        this.status.loadingItem = '';
        this.getCart();
        this.isLoading = false;
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券');
        this.getCart();
        this.isLoading = false;
      });
    },
    goForm(){
      this.$router.push('/user/form')
    }
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style>
.step-navigation {
  margin-top: 100px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.step-navigation>div {
  border: 1px solid;
  border-radius: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}

.step-navigation>div>i {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
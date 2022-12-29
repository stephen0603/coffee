<template>
    <Lording :active="isLoading"></Lording>
    <div class="container">
    <div class="my-5 row justify-content-center">
        <div class="col-lg-8 step-navigation">
    <div class="email text-primary">
      <i class="bi bi-envelope-fill fs-3" aria-hidden="true"></i>  
      <h5>確認商品</h5>
       </div>
      <div class="name text-primary">
        <i class="bi bi-person-fill fs-3" aria-hidden="true"></i>
        <h5>填寫資料</h5>
     </div>
      <div class="password text-success" v-if="!order.is_paid">
      <i class="bi bi-unlock-fill fs-3" aria-hidden="true" ></i>
      <h5>付款</h5>
        </div>   
      <div class="password text-primary" v-else>
      <i class="bi bi-unlock-fill fs-3" aria-hidden="true" ></i>
      <h5>付款</h5>
      </div>
    </div>
      <div class="col-md-6 mt-5"
             v-if="order.is_paid">
          <h2 class="text-info font-weight-bold">訂單完成</h2>
          <div class="mt-4">
            <h5>感謝訂購</h5>
            <p class="ml-2">訂單完成預計1~2天出貨</p>
            <div style="
                    height: 300px;
                    background-size: cover ;
                    background-position: center;
                    backgroundImage: url('https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')">
            </div>
          </div>
        </div>
        <div class="col-md-6 mt-5"
             v-else>
          <h2 class="mb-5 text-info font-weight-bold">付款</h2>
          <p>差一步完成訂單，點選確認付款完成訂單</p>
          <p>對於咖啡豆品質要求，收到訂單開始製作，
            大約 1 ~ 2天出貨
          </p>
        </div>
    
    <div class="col-md-6 mt-4">
          <form class="card rounded-0 py-4 mb-2" @submit.prevent="payOrder">
            <div class="card-header border-bottom-0 bg-white px-4 py-0"  >
              <h2 class="text-info font-weight-bold mb-5">
                訂單資料
              </h2>
            </div>
            <div class="card-body px-4 py-0">
              <ul class="list-group list-group-flush">
                <li v-for="item in order.products"
                :key="item.id"
                    class="list-group-item px-0">
                  <div class="d-flex mt-2">
                    <div class="w-100 d-flex flex-column">
                      <div class="d-flex justify-content-between font-weight-bold">
                        <h5>{{ item.product.title }}</h5>
                        <p class="mb-0">x{{ item.qty }}</p>
                      </div>
                      <div class="text-right">
                        <p class="mb-0">
                          {{ item.product.price | money }}/{{ item.product.unit }}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">Email</th>
                        <td class="text-end border-0 px-0">
                          {{ order.user.email }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人姓名</th>
                        <td class="text-end border-0 px-0 pt-0">
                          {{ order.user.name }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人電話</th>
                        <td class="text-end border-0 px-0 pt-0">
                          {{ order.user.tel }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">收貨人地址</th>
                        <td class="text-end border-0 px-0 pt-0">
                          {{ order.user.address }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
                <li class="list-group-item px-0 pb-0">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 font-weight-normal">
                          付款金額
                        </th>
                        <td class="text-end border-0 px-0">
                          {{ order.total | money }}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"
                            class="border-0 px-0 pt-0 font-weight-normal">付款狀態
                        </th>
                        <td class="text-end border-0 px-0 pt-0">
                            <span v-if="!order.is_paid">尚未付款</span>
                            <span v-else class="text-success">付款完成</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="text-end" v-if="order.is_paid === false">
                <button class="btn btn-danger">確認付款去</button>
                </div>
                <div class="text-end" v-else>
                <button class="btn btn-warning" @click.prevent="backhome">返回首頁</button>
                </div>
                </li>
              </ul>
            </div>
          </form>
          <a href="#"
             @click.prevent="backHome"
             class="btn btn-outline-dark mr-2 rounded-0 mb-4"
             v-if="order.paid === false">
            回到首頁
          </a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
          console.log(this.order);
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
    backhome(){
      this.$router.push('/');
    }
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
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
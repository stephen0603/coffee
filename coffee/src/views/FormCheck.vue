<template>
    <Loading :active="isLoading"></Loading>
    <div class="container">
      
    <div class="my-5 row justify-content-center">
      <div class="col-lg-8 step-navigation">
  <div class="email text-primary">
    <i class="bi bi-envelope-fill fs-3" aria-hidden="true"></i>  
    <h5>確認商品</h5>
  </div>
  <div class="name text-success">
    <i class="bi bi-person-fill fs-3" aria-hidden="true"></i>
    <h5>填寫資料</h5>
  </div>
  <div class="password  text-secondary">
    <i class="bi bi-unlock-fill fs-3" aria-hidden="true"></i>
    <h5>付款</h5>
  </div>
</div>
    <!-- 表格 -->
    <h4 class="text-center my-4">請填寫訂單資料</h4>
      <Form class="col-md-6" v-slot="{ errors }"
            @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email" rules="email|required"
                   v-model="form.user.email"></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel"></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
        orderId:'',
      },
    };
  },
  methods:{
  createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res);
          this.orderId = res.data.orderId;
          this.$router.push(`/user/checkout/${this.orderId}`)
        });
    }
},
}
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
<template>
    <div class="login">
      <Navbar></Navbar>
          <form class="row flex-colunm justify-content-center cup" @submit.prevent="signIn">
            <div class="col-md-3 bg-white rounded">
                <h1 class="h3 my-3 font-weight-normal">管理員登入</h1>
                <div class="mb-2">
                    <label for="email" class="sr-only">Email address</label>
                    <input
                    type="email"
                    id="email"
                    placeholder="Email address"
                    class="form-control"
                    required
                    v-model="user.username"/>
                </div>
                <div class="mb-4">
                    <label for="password" class="sr-only">Password</label>
                    <input type="password"
                    id="password"
                    placeholder="Password"
                    class="form-control"
                    required
                    v-model="user.password">
                </div>
                <div class="mb-4 text-center">
               <button class="btn btn-lg btn-warning btn-block btn-style" type="submit">登入</button>
              </div>
              </div>
        </form>
    </div>
   
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components:{
    Navbar,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/dashboard');
        }
      }           
    )},
  },
};
</script>
<style>
.login {
  overflow: hidden;
  background-image: url(../assets/login.jpg);
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  max-width:1920px;
  height:1024px;
}
.cup{
  padding-top:250px;
}
@media (max-width:768px) {
  .cup{
    padding-top:120px;
  }
}
.btn-style{
  width: 250px
}
@media (max-width:1100px) {
  .btn-style{
  width:120px
}
}
</style>
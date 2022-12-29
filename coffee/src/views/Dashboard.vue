<template> 
<div class="d-flex">
<ToastMessages></ToastMessages>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;height: 935px;">
    <div class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">ᎮᎥᏗᏁᎧ-後台管理</span>
    </div>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/dashboard/products" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          產品
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/orders" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#order"/></svg>
         訂單
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard/coupons" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          優惠券
        </router-link>
      </li>
    </ul>
    <hr>
    <div>
      <a href="#" class="text-decoration-none text-white"  @click.prevent="logout">登出</a>
    </div>
  </div>
  
  <div class="container-fluid">
    <router-view/>
  </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessage.vue';


export default {
  components: {
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
      methods: {
        logout() {
            const api = `${process.env.VUE_APP_API}logout`
        this.$http.post(api, this.user)
       .then((res) => {
        if(res.data.success) {
           this.$router.push('/login');
            }
        }           
    )}
        },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common['Authorization'] = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => { 
      if(!res.data.success) {
        this.$router.push('/login');
      }
    }
  )},
};
</script>

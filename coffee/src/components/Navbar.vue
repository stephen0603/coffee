<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <router-link to="/" class="navbar-brand" ><span class='display-6'>ᎮᎥᏗᏁᎧ</span></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/about" class="nav-link px-3">關於我們</router-link>
          <router-link to="/productview" class="nav-link px-3">產品訂購</router-link>
          <router-link to="/question" class="nav-link px-3">常見問題</router-link>
          <router-link to="/login" class="nav-link px-3"><i class="bi bi-person-fill"></i></router-link>
          <router-link to="/user/cart" class="nav-link px-3">
            <i class="bi bi-handbag"></i>
            <span class="badge badge-pill text-danger"
          style="transform: translateX(-9px) translateY(-9px)">
      {{ cartTotal }}
    </span>
          </router-link>  
      </div>
  </div>
</div>
</nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      cartTotal: 0,
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    getCart() {
      const url =`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cartTotal = res.data.data.carts.length;
      });
    },
  },
};
</script>
<template>
 <Navbar></Navbar>
 <div class="container-fluid">
  <ToastMessage></ToastMessage>

       
   <router-view/>
    
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessage from '@/components/ToastMessage.vue';
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    ToastMessage,
    Navbar,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {

  },
};
</script>


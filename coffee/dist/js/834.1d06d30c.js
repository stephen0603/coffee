"use strict";(self["webpackChunknew_project"]=self["webpackChunknew_project"]||[]).push([[834],{6834:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var s=a(3396),r=a(7139),i=a(9242);const o={class:"container"},d={class:"my-5 row justify-content-center"},m=(0,s.uE)('<div class="col-lg-8 step-navigation"><div class="email text-primary"><i class="bi bi-envelope-fill" aria-hidden="true"></i><h5>確認商品</h5></div><div class="name text-success"><i class="bi bi-person-fill" aria-hidden="true"></i><h5>填寫資料</h5></div><div class="password text-secondary"><i class="bi bi-unlock-fill" aria-hidden="true"></i><h5>付款</h5></div></div><h4 class="text-center my-4">請填寫訂單資料</h4>',2),t={class:"mb-3"},n=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),c={class:"mb-3"},u=(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),f={class:"mb-3"},p=(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),b={class:"mb-3"},h=(0,s._)("label",{for:"address",class:"form-label"},"收件人地址",-1),v={class:"mb-3"},_=(0,s._)("label",{for:"message",class:"form-label"},"留言",-1),g=(0,s._)("div",{class:"text-end"},[(0,s._)("button",{class:"btn btn-danger"},"送出訂單")],-1);function V(e,l,a,V,k,w){const y=(0,s.up)("Loading"),W=(0,s.up)("Field"),x=(0,s.up)("ErrorMessage"),C=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(y,{active:e.isLoading},null,8,["active"]),(0,s._)("div",o,[(0,s._)("div",d,[m,(0,s.Wm)(C,{class:"col-md-6",onSubmit:w.createOrder},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",t,[n,(0,s.Wm)(W,{id:"email",name:"email",type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:k.form.user.email,"onUpdate:modelValue":l[0]||(l[0]=e=>k.form.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(x,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",c,[u,(0,s.Wm)(W,{id:"name",name:"姓名",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:k.form.user.name,"onUpdate:modelValue":l[1]||(l[1]=e=>k.form.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(x,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",f,[p,(0,s.Wm)(W,{id:"tel",name:"電話",type:"tel",class:(0,r.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:k.form.user.tel,"onUpdate:modelValue":l[2]||(l[2]=e=>k.form.user.tel=e)},null,8,["class","modelValue"]),(0,s.Wm)(x,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",b,[h,(0,s.Wm)(W,{id:"address",name:"地址",type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:k.form.user.address,"onUpdate:modelValue":l[3]||(l[3]=e=>k.form.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(x,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",v,[_,(0,s.wy)((0,s._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":l[4]||(l[4]=e=>k.form.message=e)},null,512),[[i.nr,k.form.message]])]),g])),_:1},8,["onSubmit"])])])],64)}a(7658);var k={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:"",orderId:""}}},methods:{createOrder(){const e="https://vue3-course-api.hexschool.io/api/stephen-api/order",l=this.form;this.$http.post(e,{data:l}).then((e=>{console.log(e),this.orderId=e.data.orderId,this.$router.push(`/user/checkout/${this.orderId}`)}))}}},w=a(89);const y=(0,w.Z)(k,[["render",V]]);var W=y}}]);
//# sourceMappingURL=834.1d06d30c.js.map
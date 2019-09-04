//官方文件
import Vue from "vue";
import VueRouter from "vue-router";

//自訂分頁的元件
import Home from "@/components/HelloWorld"; //Home為自訂的名稱

Vue.use(VueRouter); //在使用Vue元件時必須啟用他

//這個配置文件必須匯出給 entry 使用
export default new VueRouter({
  //routes 裡面是陣列，可以放很多路徑及他所對應的元件
  //name 此元件呈現的名稱
  //path 為它所虛擬的路徑
  //component 它所對應的元件
  routes: [
    {
      name: "首頁",
      path: "/index",
      component: Home
    }
  ]
});

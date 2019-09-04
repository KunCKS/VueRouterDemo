//官方文件
import Vue from "vue";
import VueRouter from "vue-router";

//自訂分頁的元件
import Home from "@/components/HelloWorld"; //Home為自訂的名稱
import Page1 from "@/components/pages/page1.vue";
import card1 from "@/components/pages/card1.vue";
import card2 from "@/components/pages/card2.vue";
import card3 from "@/components/pages/card3.vue";
import card4 from "@/components/pages/card4.vue";
//使用router套件核心
Vue.use(VueRouter); //在使用Vue元件時必須啟用他，這邊是利用上面引入的js來啟動相關套件

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
    },
    {
      name: "Test1",
      path: "/TestPage1",
      component: Page1,
      children: [
        {
          name: "卡片1",
          path: "",
          component: card1
        },
        {
          name: "卡片2",
          path: "card2",
          component: card2
        },
        {
          name: "卡片3",
          path: "card3",
          component: card3
        },
        {
          name: "卡片4",
          path: "card4",
          component: card4
        }
      ]
    }
  ]
});

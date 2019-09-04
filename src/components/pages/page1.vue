<template>
  <div class="hello">
    <router-link to="/TestPage1/">card-1</router-link>
    <router-link to="/TestPage1/card2">card-2</router-link>
    <router-link to="/TestPage1/card3">card-3</router-link>
    <router-link to="/TestPage1/card4">card-4</router-link>
    <div class="card" style="width: 18rem;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


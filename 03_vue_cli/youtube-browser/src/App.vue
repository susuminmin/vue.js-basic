<template>
  <div>
    <!-- step 3 사용하기 -->
    <SearchBar />
  </div>
</template>

<script>
// step 1
import SearchBar from "./components/SearchBar.vue";

// Vue
export default {
  name: "App", // Component 의 이름 지정
  // step 2
  components: {
    SearchBar
  }
};
</script>

<style>
</style>
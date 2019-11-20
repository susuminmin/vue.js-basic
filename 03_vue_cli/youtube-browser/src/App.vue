<template>
  <div>
    <!-- step 3 사용하기 -->
    <SearchBar @inputChange="onInputChange" />
    <!-- input 값 바뀔 때마다 발생하는 inputChange 이벤트 (내가 이름 지정) 발생하면 아래 정의한 onInputChange 실행시켜! -->
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
  },
  // 함수 정해서 SearchBar 로 넘겨줌
  methods: {
    // inputChange라고 하는 우리가 지정해 준 이벤트 발생할 때마다 실행
    onInputChange: function(inputValue) {
      console.log(inputValue);
    }
  }
};
</script>

<style>
</style>
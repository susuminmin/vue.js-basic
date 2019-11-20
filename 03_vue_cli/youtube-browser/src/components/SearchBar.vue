<template>
  <div>
    <!-- input 값 바뀔 때마다 onInput 메서드 실행 -->
    <input type="text" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(event) {
      // <- 'inputChange' 라는 사용자 지정 이벤트 발생을 알리는 역할만 한다.
      // SearchBar 역할 : input 값 바뀔 때 inputChange 이벤트 발생 --> 그 input 의 value 값 넘긴다.
      this.$emit("inputChange", event.target.value);
    }
  }
};
</script>


<style>
</style>
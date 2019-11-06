<template>
  <div>
    <ToDoList category="취업준비" />
    <ToDoList category="싸피" />
    <ToDoList category="기타" />
  </div>
</template>
<!-- 최상위에는 하나의 태그만 존재해야 함 -->

<script>
import ToDoList from "./components/ToDoList.vue";
export default {
  components: {
    ToDoList
  }
};
</script>

<style>
</style>
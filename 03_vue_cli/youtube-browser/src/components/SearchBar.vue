<template>
  <div>
    <input type="text" v-on:input="onInput" /> <!-- event 등록 -->
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(event) {
      console.log(event.target.value)
    }
  }
};
</script>


<style>
</style>
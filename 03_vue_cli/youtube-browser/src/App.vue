<template>
  <div>
    <!-- step 3 사용하기 -->
    <!-- input 값 바뀔 때마다 발생하는 inputChange 이벤트 (내가 이름 지정) 발생하면 아래 정의한 onInputChange 실행시켜! -->
    <SearchBar @inputChange="onInputChange" />
    <VideoDetail :video="selectedVideo" />
    <VideoList @selectVideo="onSelectedVideo" :videos="videos" />
  </div>
</template>

<script>
import axios from 'axios'
// step 1
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoDetail from "./components/VideoDetail.vue";

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

// Vue
export default {
  name: "App", // Component 의 이름 지정
  // step 2
  data() {
    return {
      videos: [],
      selectedVideo: null,
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  // 함수 정해서 SearchBar 로 넘겨줌
  methods: {
    // inputChange라고 하는 우리가 지정해 준 이벤트 발생할 때마다 실행
    onInputChange: function(inputValue) {
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: inputValue,
        }
      })
      .then(response => {
        this.videos = response.data.items
      })
      .catch(error => {
        console.error(error)
      })
    },
    onSelectVideo: function(video) {
      this.selectedVideo = video
    }
  }
};
</script>

<style>
</style>
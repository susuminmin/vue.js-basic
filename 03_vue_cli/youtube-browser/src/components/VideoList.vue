<template>
  <ul class="list-group">
    <VideoListItem
      v-for="video in videos"
      :key="video.id.videoId"
      :video="video"
      @selectVideo="onSelectVideo"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem.vue";
export default {
  name: "VideoList",
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  components: {
    VideoListItem
  },
  methods: {
    onSelectVideo: function(video) {
      // 'selectVideo' 이벤트를 발생시키고 video 를 전달
      this.$emit("selectVideo", video);
    }
  }
};
</script>

<style></style>

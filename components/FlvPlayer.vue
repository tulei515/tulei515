<template>
  <div ref="videoWrapper">
    <video ref="videoElement" :width="width" :height="height" controls></video>
  </div>
</template>

<script>
import flvjs from "flv.js";

export default {
  name: "FlvPlayer",
  props: {
    src: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: "640",
    },
    height: {
      type: String,
      default: "360",
    },
  },
  data() {
    return { flvPlayer: null };
  },
  mounted() {
    if (flvjs.isSupported()) {
      const videoElement = this.$refs.videoElement;
      this.flvPlayer = flvjs.createPlayer({
        type: "flv",
        url: this.src,
      });
      this.flvPlayer.attachMediaElement(videoElement);
      this.flvPlayer.load();
      this.flvPlayer.play();
    } else {
      console.error("FLV is not supported");
    }
  },
  beforeDestroy() {
    // 停止和销毁 FLV 播放器
    if (this.flvPlayer) {
      this.flvPlayer.destroy();
    }
  },
};
</script>

<style scoped>
/* 可选的样式 */
</style>

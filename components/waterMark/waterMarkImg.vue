<template>
  <div>
    <div
      class="waterMarkImg"
      v-watermark="{
        text: this.$store.state.user.name,
        show: src ? true : false,
      }"
      @contextmenu.prevent
      @click="
        () => {
          if (src) {
            showPreview = true;
          }
        }
      "
    >
      <slot v-if="$slots.default" />
      <template v-else>
        <img v-if="src" :src="src" class="img" />
      </template>
    </div>
    <el-dialog :visible.sync="showPreview" :close-on-click-modal="true">
      <div
        v-if="showPreview"
        class="waterMarkImg-1"
        v-watermark="{ text: this.$store.state.user.name, single: false }"
        @contextmenu.prevent
      >
        <img v-if="src" :src="src" class="img" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import watermarkDirective from "./watermarkDirective"; // 导入自定义指令
export default {
  directives: {
    watermark: watermarkDirective,
  },
  props: {
    src: {
      type: String,
      default: "", // 设置默认值
    },
    watermark: {
      type: String,
      default: "watermark", // 设置默认值
    },
  },
  data() {
    return {
      showPreview: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.waterMarkImg {
  position: relative;
  overflow: hidden;
  .img {
    width: 100%;
    display: block;
  }
}

.waterMarkImg-1 {
  position: relative;
  overflow: hidden;
  .img {
    width: 100%;
    display: block;
    margin: auto;
  }
}
</style>

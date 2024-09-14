<template>
  <el-select v-model="value" placeholder="教室" class="select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      options: [
        { label: "1号教室摄像头", value: "1号教室摄像头" },
        { label: "2号教室摄像头", value: "2号教室摄像头" },
        { label: "3号教室摄像头", value: "3号教室摄像头" },
        { label: "4号教室摄像头", value: "4号教室摄像头" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.select {
  width: 100%;
}
</style>

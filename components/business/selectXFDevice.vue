<template>
  <el-select v-model="value" placeholder="消防设备" class="select">
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
        { label: "打架斗殴", value: "打架斗殴" },
        { label: "危险刀具", value: "危险刀具" },
        { label: "危险行为", value: "危险行为" },
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

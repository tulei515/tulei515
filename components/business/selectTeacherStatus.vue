<template>
  <el-select v-model="value" placeholder="教师状态" class="select">
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
        { label: "有效教师", value: "有效教师" },
        { label: "公办教师", value: "公办教师" },
        { label: "无资质教师", value: "无资质教师" },
        { label: "黑名单教师", value: "黑名单教师" },
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

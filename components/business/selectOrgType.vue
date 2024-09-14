<template>
  <el-select v-model="value" placeholder="机构类型" class="select">
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
        { label: "学科类", value: "学科类" },
        { label: "体育类", value: "体育类" },
        { label: "艺术类", value: "艺术类" },
        { label: "综合实践类", value: "综合实践类" },
        { label: "科技类", value: "科技类" },
        { label: "其他", value: "其他" },
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

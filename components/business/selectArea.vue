<template>
  <el-select v-model="value" placeholder="区" class="select">
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
        { label: "东湖区", value: "东湖区" },
        { label: "西湖区", value: "西湖区" },
        { label: "青云谱区", value: "青云谱区" },
        { label: "湾里区", value: "湾里区" },
        { label: "青山湖区", value: "青山湖区" },
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

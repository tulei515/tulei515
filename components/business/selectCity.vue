<template>
  <el-cascader
    v-bind="$attrs"
    :options="deptOptions"
    :style="{ width: '100%' }"
    placeholder="请选择地区"
    clearable
    :props="props"
    @change="handleChange"
    v-model="value"
  ></el-cascader>
</template>

<script>
import { deptParentTree } from "@/api/system/user";
export default {
  model: {
    prop: "value",
    event: "input",
  },
  data() {
    return {
      deptOptions: undefined,
      props: {
        value: "id",
        checkStrictly: true,
      },
      value: [],
    };
  },
  async created() {
    await this.getDeptTree(this.$store.state.user.dept.deptId);
  },
  methods: {
    async getDeptTree(deptId) {
      const { data } = await deptParentTree({ deptId });
      this.deptOptions = data;
      this.value.push(this.$store.state.user.dept.deptId);
      this.$emit("input", this.value);
    },
    handleChange(value) {
      this.$emit("input", value);
    },
  },
};
</script>

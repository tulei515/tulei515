<template>
  <el-select v-model="value" placeholder="机构名称" class="select">
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
        { label: "南昌优心忆教育机构", value: "南昌优心忆教育机构" },
        {
          label: "南昌学想文化传播有限公司",
          value: "南昌学想文化传播有限公司",
        },
        {
          label: "江西圣东智能科技有限公司",
          value: "江西圣东智能科技有限公司",
        },
        {
          label: "抚州市临川区飞舞艺术培训中心有限公司",
          value: "抚州市临川区飞舞艺术培训中心有限公司",
        },
        {
          label: "上饶慈脉科技有限责任公司",
          value: "上饶慈脉科技有限责任公司",
        },
        {
          label: "黑白之间艺术培训有限公司",
          value: "黑白之间艺术培训有限公司",
        },
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

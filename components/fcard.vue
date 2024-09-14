<template>
  <div class="card">
    <div class="card-title">
      <div class="card-line"></div>
      <div class="card-text">{{ title }}</div>
    </div>
    <div class="card-content">
      <!-- 插槽内容 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "", // 设置默认值
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-rows: auto calc(100% - 24px - 5px);
  grid-gap: 5px;
  .card-title {
    display: flex;
    align-items: center;
    .card-line {
      width: 3px;
      height: 16px;
      background: #165dff;
      border-radius: 2px;
      margin-right: 7px;
    }
    .card-text {
      font-size: 18px;
      color: #333333;
      line-height: 24px;
    }
  }
  .card-content {
    /* 根据需要添加样式 */
  }
}
</style>

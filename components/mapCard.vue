<template>
  <div class="card">
    <div class="card-title">
      <!-- <div class="card-line"></div> -->
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
  background: 'transparent';
  opacity: 1;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto calc(100% - 24px - 15px);
  .card-title {
    height: 40px;
    background-image: url('../assets/images/bg_title.png');
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 242px;
    display: flex;
    align-items: end;
    justify-content: center;
    .card-line {
      width: 3px;
      height: 16px;
      background: #165dff;
      border-radius: 2px;
      margin-right: 7px;
    }
    .card-text {
      font-size: 18px;
      font-weight: bold;
      color: #333333;
      line-height: 30px;
    }
  }
  .card-content {
    /* 根据需要添加样式 */
  }
}
</style>

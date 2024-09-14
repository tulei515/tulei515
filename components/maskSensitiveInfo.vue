<template>
  <span>
    {{ tempText }}
    <i
      v-if="show == false"
      class="iconfont icon-chakanmima i"
      @click="show = true"
      v-hasPermi="['system:user:sensitiveInfo']"
    ></i>
    <i
      v-else
      class="el-icon-view i"
      @click="show = false"
      v-hasPermi="['system:user:sensitiveInfo']"
    ></i>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "", // 设置默认值
    },
  },
  data() {
    return {
      show: false,
    };
  },
  computed: {
    tempText() {
      let value = this.text;
      if (!value) return "";

      if (this.show) return value;
      // 判断是身份证号码、手机号码还是座机号码
      if (value.length === 18 || value.length === 15) {
        // 身份证号码脱敏处理
        const maskedDigits = value.slice(0, 6) + "********" + value.slice(-4);
        return maskedDigits;
      } else if (value.length === 11 && /^\d+$/.test(value)) {
        // 手机号码脱敏处理
        const maskedDigits = value.slice(0, 3) + "****" + value.slice(-4);
        return maskedDigits;
      } else if (/^0\d{2,3}-\d{7,8}$/.test(value)) {
        // 座机号码脱敏处理
        const maskedDigits = value.slice(0, 4) + "****" + value.slice(-4);
        return maskedDigits;
      }

      // 非法的身份证号码、手机号码或座机号码，直接返回原始值
      return value;
    },
  },
};
</script>

<style lang="scss" scoped>
.i {
  font-size: 14px;
  cursor: pointer;
}
</style>

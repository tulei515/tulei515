<template>
  <ul class="el-upload-list el-upload-list--">
    <li
      :tabindex="index"
      class="el-upload-list__item is-ready"
      v-for="(item, index) in fileList"
    >
      <a class="el-upload-list__item-name" :href="item" target="_blank">
        <i class="el-icon-document"></i
        >{{ item.substring(item.lastIndexOf("/") + 1) }}
      </a>
      <label class="el-upload-list__item-status-label">
        <i class="el-icon-upload-success"></i>
      </label>
      <template v-if="editable">
        <i class="el-icon-close" @click="deleteFile(index)"></i>
        <i class="el-icon-close-tip">按 delete 键可删除</i></template
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    fileList: {
      type: Array,
      default: [], // 设置默认值
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    deleteFile(index) {
      // 触发删除操作
      this.fileList.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped></style>

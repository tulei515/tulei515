<template>
	<uni-file-picker limit="9" title="最多选择9张图片" @select="handleAvatarSuccess" v-model="localValue" />
</template>

<script>
	import {
		getOSSUploadFilePath
	} from "./eos";

	export default {
		name: "UploadFile",
		props: {
			value: {
				type: Array,
				default: [],
			},
		},
		data() {
			return {
				loading: false,
				localValue: []
			};
		},
		computed: {
			returnValue() {
				return this.localValue.map((value) => {
					return value.url
				})
			}
		},
		mounted() {
			const arr = []
			this.value.forEach((url, index) => {
				arr.push({
					url
				})
			})
			this.localValue = arr
		},
		methods: {
			async handleAvatarSuccess(params) {
				const files = params.tempFiles;
				for (let i = 0; i < files.length; i++) {
					const file = files[i]
					const name = file.name;
					this.loading = true;
					getOSSUploadFilePath(file.file, name, "organization", (url) => {
						this.loading = false;
						this.localValue.push({
							url
						})
						this.$emit("input", this.returnValue);
					});
				}
			},
		},
	};
</script>
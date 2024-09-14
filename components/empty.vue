<template>
	<view class="empty">
		<image src="/static/images/empty.png" />
		<view>{{msg}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			msg: {
				type: String,
				default: "暂无数据",
			},
		},
	};
</script>

<style lang="scss" scoped>
	.empty {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		image {
			width: 292rpx;
			height: 236rpx;
		}

		view {
			font-size: 24rpx;
			color: #999999;
			margin-top: -40rpx;
		}
	}
</style>
<template>
	<div class="card">
		<div class="card-title">
			<div class="card-line"></div>
			<div class="card-text">{{ title }}</div>
		</div>
		<div class="card-content">
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
		background: #FFFFFF;
		box-shadow: 0rpx 2rpx 5rpx 0rpx rgba(218, 218, 218, 0.25);
		border-radius: 16rpx;
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: auto calc(100% - 24px - 15px);

		.card-title {
			margin-top: 24rpx;
			margin-left: 28rpx;
			margin-right: 28rpx;
			display: flex;
			align-items: center;

			.card-line {
				width: 6rpx;
				height: 34rpx;
				background: #008BFF;
				border-radius: 10rpx;
				margin-right: 8rpx;
			}

			.card-text {
				line-height: 42rpx;
				font-size: 36rpx;
				font-weight: bold;
				color: #333333;
			}
		}

		.card-content {
			/* 根据需要添加样式 */
			height: 100%;
		}
	}
</style>
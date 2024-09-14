<template>
	<view class="content">11111111
		<audio id="audioPlayer" controls style="display:none;"></audio>
		<div class="item" @click="toggleWords">
			<div class="pinyin" v-text="getPinyin()"></div>
			<div class="word" v-text="word"></div>
		</div>
		<button class="btn posi" @click="showRandomWord">随机</button>
		<button class="btn posi1" @click="markAsKnown">认识</button>
		<button class="btn posi2" @click="markAsUnknown">不认识</button>
		<button class="btn posi3" @click="sound">发音</button>
	</view>
</template>

<script>
	const pinyin = {}
	export default {
		data: {
			words: "天地人你我他".split(""),
			word: undefined,
			currentIndex: 0,
			knownStatus: {}
		},
		mounted() {
			this.toggleWords()
			// window.addEventListener('devicemotion', this.handleShake);
		},
		beforeDestroy() {
			// 在组件销毁前移除事件监听
			// window.removeEventListener('devicemotion', this.handleShake);
		},
		methods: {
			showRandomWord() {
				this.currentIndex = Math.floor(Math.random() * this.words.length);
				this.word = this.words[this.currentIndex];
			},
			toggleWords() {
				this.currentIndex = (this.currentIndex + 1) % this.words.length;
				this.word = this.words[this.currentIndex];
			},
			handleShake(event) {
				const acceleration = event.accelerationIncludingGravity;
				const shakeThreshold = 0.10; // 调整这个阈值以适应不同的敏感度
				if (Math.abs(acceleration.x) > shakeThreshold ||
					Math.abs(acceleration.y) > shakeThreshold ||
					Math.abs(acceleration.z) > shakeThreshold) {
					this.randomToggle();
				}
			},

			getPinyin() {
				return ""
				return pinyin.pinyin(this.word, {
					heteronym: false,
					style: 'tone'
				}).join('');
			},


			markAsKnown() {
				const currentWord = this.word;
				if (!this.knownStatus[currentWord]) {
					this.knownStatus[currentWord] = {
						knownCount: 1,
						unknownCount: 0
					};
				} else {
					this.knownStatus[currentWord].knownCount++;
				}
				this.checkWordKnowledge(currentWord);

				this.toggleWords()
			},
			markAsUnknown() {
				const currentWord = this.word;
				if (!this.knownStatus[currentWord]) {
					this.knownStatus[currentWord] = {
						knownCount: 0,
						unknownCount: 1
					};
				} else {
					this.knownStatus[currentWord].unknownCount++;
				}
				this.checkWordKnowledge(currentWord);
				this.toggleWords()

			},
			isWordHighlyKnown(word) {
				if (!this.knownStatus[word]) return false;
				const totalCount = this.knownStatus[word].knownCount + this.knownStatus[word].unknownCount;
				return totalCount > 0 && this.knownStatus[word].knownCount / totalCount >= 0.6;
			},
			checkWordKnowledge(word) {
				if (this.isWordHighlyKnown(word)) {
					this.words = this.words.filter(w => w !== word);
				}
			},
			sound() {
				const audioPlayer = document.getElementById('audioPlayer');
				const audioSrc =
					`https://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=${encodeURIComponent(this.word)}`;
				audioPlayer.src = audioSrc;
				audioPlayer.play();
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
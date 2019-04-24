<template>
  <section class="clock">
    <header class="clock-title">
    	Pomodoro app
    </header>
	<article class='clock-settings'>
		<div class="clock-settings_break">
			<div class="clock-settings_break-title">Break time</div>
			<div class="clock-settings_break-value">
				5
			</div>
		</div>
		<div class="clock-settings_session">
			<div class="clock-settings_session-title">Session length</div>
			<div class="clock-settings_session-value">
				25
			</div>	
		</div>
	</article>
	<article class="clock-time">
		<div class="clock-time_title">
			Session
		</div>
		<div class="clock-time_tick">
			{{getMinutes}}:{{getSeconds}}
		</div>
	</article>
	<article class="clock-toolbar">
		<div class="clock-toolbar_item" @click='startClock'>Start</div>
		<div class="clock-toolbar_item" @click='stopClock'>Pause</div>
		<div class="clock-toolbar_item" @click='restartClock'>Restart</div>
	</article>
	<footer class="clock-footer">
		Developed by <a href="https://yugako.github.io">Yurko</a>
	</footer>
  </section>
</template>

<script>
export default {
  	name: 'home',
  	data() {
  		return {
  			base_time: 1500,
  			minutes: null,
  			seconds: null,
  			timer: null,
  		}
  	},
  	methods: {
  		startClock() {
  			this.timer = setInterval(() => {
  				this.base_time--;
  			}, 1000)
  		},
  		stopClock() {
  			clearInterval(this.timer);
  		},
  		restartClock() {
  			this.base_time = 1500;
  			this.stopClock();
  		}
  	},
  	computed: {
  		getMinutes() {
  			return ~~(this.base_time / 60);
  		},
  		getSeconds() {
  			let result = (this.base_time % 60).toFixed(0);
  			return result < 10 ? '0' + result : result;
  		}
  	}
}
</script>
<style lang="scss">
	.clock {
		&-title {
			font-size: 50px;
			margin-bottom: 15px;
		}
		&-settings {
			display: flex;
			justify-content: space-around;
			font-size: 32px;
			margin-bottom: 15px;
			&_break, &_session {
				font-size: 26px;
			}
		}
		&-toolbar {
			display: flex;
			justify-content: center;
			margin-bottom: 15px;
			&_item {
				cursor: pointer;
			}
			&_item + &_item::before {
				content: '|';
				margin: auto 10px;
			}
		}
		&-time {
			margin-bottom: 15px;
			&_title {
				font-size: 40px;
			}
			&_tick {
				font-family: 'Share Tech Mono', monospace;
				font-size: 80px;
			}
		}
	}
</style>

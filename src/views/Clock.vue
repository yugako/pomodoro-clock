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
			<div class="clock-settings_session-manage">
				<div class="clock-settings_session-sub" @click='subMinutes'>-</div>	
				<div class="clock-settings_session-value">
					{{sessionLength}}
				</div>
				<div class="clock-settings_session-add" @click='addMinutes'>+</div>		
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
  	created() {
  		this.time = this.sessionLength * 60;
  	},
  	data() {
  		return {
  			time: null,
  			timer: null,
  			sessionLength: 25,
  			started: false,
  		}
  	},
  	methods: {
  		startClock() {
  			this.started = true;
  			this.timer = setInterval(() => {
  				this.time--;
  			}, 1000)
  		},
  		stopClock() {
  			this.started = false;
  			clearInterval(this.timer);
  		},
  		restartClock() {
  			this.started = false;

  			this.time = this.sessionLength * 60;
  			this.stopClock();
  		},
  		subMinutes() {
  			if (!this.started) {
  				this.sessionLength-=1;
  				this.time = this.sessionLength * 60;
  			}
  			
  		},
  		addMinutes() {
  			if (!this.started) {
  				this.sessionLength+=1;
  				this.time = this.sessionLength * 60;
  			}
  			
  		}
  	},
  	computed: {
  		getMinutes() {
  			return ~~(this.time / 60);
  		},
  		getSeconds() {
  			let result = (this.time % 60).toFixed(0);
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
			&_session {
				&-manage {
					display: flex;
					justify-content: space-around;
					align-items: center;
				}
				&-add, &-sub {
					margin: 5px;
					cursor: pointer;
				}
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

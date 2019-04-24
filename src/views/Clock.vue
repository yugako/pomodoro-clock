<template>
  <section class="clock">
    <header class="clock-title">
    	Pomodoro app
    </header>
	<article class='clock-settings'>
		<div class="clock-settings_break">
			<div class="clock-settings_break-title">Break time</div>
			<div class="clock-settings_break-manage">
				<div class="clock-settings_break-sub" @click='subBreak'>-</div>	
				<div class="clock-settings_break-value">
					{{breakLength}}
				</div>
				<div class="clock-settings_break-add" @click='addBreak'>+</div>
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
		Designed and coded by <a class="clock-footer_link" href="https://yugako.github.io">Yurko</a>
	</footer>
  </section>
</template>

<script>
export default {
  	name: 'home',
  	created() {
  		this.session_time = this.sessionLength * 60;
  		this.break_time = this.breakLength * 60;
  	},
  	data() {
  		return {
  			session_time: null,
  			break_time: null,
  			session_timer: null,
  			break_timer: null,
  			sessionLength: 1,
  			breakLength: 5,
  			startedSession: false,
  			startedBreak: false,
  		}
  	},
  	methods: {
  		startClock() {
  			this.startedSession = true;
  			this.session_timer = setInterval(() => {
  				this.session_time--;
  			}, 1000)
  		},
  		stopClock() {
  			this.startedSession = false;
  			clearInterval(this.session_timer);
  		},
  		restartClock() {
  			this.startedSession = false;

  			this.session_time = this.sessionLength * 60;
  			this.stopClock();
  		},
  		subMinutes() {
  			if (!this.startedSession && !this.checkValue(this.sessionLength)) {
  				this.sessionLength-=1;
  				this.session_time = this.sessionLength * 60;
  			}
  			
  		},
  		addMinutes() {
  			if (!this.startedSession) {
  				this.sessionLength+=1;
  				this.session_time = this.sessionLength * 60;
  			}
  			
  		},
  		subBreak () {
  			if (!this.checkValue(this.breakLength)) {
	  			this.breakLength-=1;
	  			this.break_time = this.breakLength * 60;
	  		}
  		},
  		addBreak() {
			this.breakLength+=1;
			this.break_time = this.breakLength * 60;
  		},
  		checkValue(value) {
  			return value == 1;
  		}
  	},
  	computed: {
  		getMinutes() {
  			let result = ~~(this.session_time / 60);
  			return result < 10 ? '0' + result : result;
  		},
  		getSeconds() {
  			let result = (this.session_time % 60).toFixed(0);
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
			&_break {
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
		&-footer {
			&_link {
				color: darken(#fff, 15%);
			}
		}
	}
</style>

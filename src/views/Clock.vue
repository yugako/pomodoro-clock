<template>
  <section class="clock">
    <Title />
	<Settings 
		:subBreak='subBreak' :breakLength='breakLength' :addBreak='addBreak' 
		:subMinutes='subMinutes' :sessionLength='sessionLength' :addMinutes='addMinutes'
	/>
	<Time :minutes='getMinutes' :seconds='getSeconds' />
	<Toolbar  :start='startClock' :stop='stopClock' :restart='restartClock'/>
	<Footer />
  </section>
</template>

<script>
	import Title from '@/components/Title'
	import Settings from '@/components/Settings'

	import Time from '@/components/Time'
	import Toolbar from '@/components/Toolbar'

	import Footer from '@/components/Footer'
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
	  			if (this.session_time == 0) {
	  				this.stopClock();
	  				this.startBreak();
	  			}

	  			this.startedSession = true;
	  			this.session_timer = setInterval(() => {
	  				this.session_time--;
	  			}, 1000);

	  		},
	  		startBreak() {
	  			this.startedBreak = true;
	  			this.break_timer = setInterval(() => {
	  				this.break_time--;
	  			}, 1000)
	  		}
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
	  	},
	  	components: {
	  		Title,
	  		Settings,
	  		Time,
	  		Toolbar,
	  		Footer
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
				font-size: 26px;
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

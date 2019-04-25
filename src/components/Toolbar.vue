<template>
	<article class="clock-toolbar">
		<div class="clock-toolbar_item" @click='startClock'>Start</div>
		<div class="clock-toolbar_item" @click='stopClock'>Pause</div>
		<div class="clock-toolbar_item" @click='restartClock'>Restart</div>
	</article>
</template>
<script>
	export default {
		name: 'toolbar',
		data() {
	  		return {
	  			session_timer: null,
	  			break_timer: null,
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
	  				this.$store.commit('reduceTime');
	  			}, 1000);

	  		},
	  		stopClock() {
	  			this.startedSession = false;
	  			clearInterval(this.session_timer);
	  		},
	  		restartClock() {
	  			this.startedSession = false;

	  			this.$store.commit('setInitialTime');
	  			this.stopClock();
	  		},
	  	},
	}
</script>
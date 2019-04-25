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
	  			if (this.SessionTime == 0) {
	  				this.stopClock();
	  				this.startBreak();
	  			}
	  			
	  			if (!this.SessionStatus) {
	  				this.$store.commit('sessionUp');
	  				this.session_timer = setInterval(() => {
	  					this.$store.commit('reduceTime');
	  				}, 1000);
	  			}
	  		},
	  		startBreak() {
	  			if (!this.BreakStatus) {
	  				this.$store.commit('breakUp');
	  				this.break_timer = setInterval(() => {
	  					this.$store.commit('reduceBreak');
	  				}, 1000);
	  			}
	  		},
	  		stopClock() {
	  			this.$store.commit('sessionDown');
	  			clearInterval(this.session_timer);
	  		},
	  		restartClock() {
	  			this.$store.commit('sessionDown');

	  			this.$store.commit('setInitialTime');
	  			this.stopClock();
	  		},
	  	},
	  	computed: {
	  		SessionTime() {
	  			return this.$store.getters.SessionTime;
	  		},
	  		SessionStatus() {
	  			return this.$store.getters.SessionStatus;
	  		},
	  		BreakStatus() {
	  			return this.$store.getters.BreakStatus;
	  		}
	  	}
	}
</script>
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
	  		}
	  	},
	  	methods: {
	  		startClock() {
	  			if (!this.SessionStatus) {
	  				this.$store.commit('sessionUp');
	  				this.session_timer = setInterval(() => {
	  					this.$store.commit('reduceTime');
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
	  		SessionStatus() {
	  			return this.$store.getters.SessionStatus;
	  		},
	  	}
	}
</script>
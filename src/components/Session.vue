<template>
	<div class="clock-settings_session">
		<div class="clock-settings_session-title">Session length</div>
		<div class="clock-settings_session-manage">
			<div class="clock-settings_session-sub" @click='subMinutes'>-</div>	
			<div class="clock-settings_session-value">
				{{SessionLength}}
			</div>
			<div class="clock-settings_session-add" @click='addMinutes'>+</div>		
		</div>
		
	</div>
</template>
<script>
	export default {
		name: 'session',
		methods: {
			subMinutes() {
				if (!this.SessionStatus) {
					this.$store.commit('subMinutes')
				}
				
			},
			addMinutes() {
				if (!this.SessionStatus) {
					this.$store.commit('addMinutes')
				}	
			}
		},
		computed: {
			SessionLength() {
				return this.$store.getters.SessionLength;
			},
			SessionStatus() {
				return this.$store.getters.SessionStatus;
			}
		}
	}
</script>
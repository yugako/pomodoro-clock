<template>
	<div class="clock-settings_break">
		<div class="clock-settings_break-title">Break length</div>
		<div class="clock-settings_break-manage">
			<div class="clock-settings_break-sub" @click='subBreak'>-</div>	
			<div class="clock-settings_break-value">
				{{BreakLength}}
			</div>
			<div class="clock-settings_break-add" @click='addBreak'>+</div>
		</div>	
	</div>
</template>
<script>
	export default {
		name: 'break',
		methods: {
			subBreak() {
				this.$store.commit('subBreak')
			},
			addBreak() {
				this.$store.commit('addBreak')
			}
		},
		computed: {
			BreakLength() {
	  			return this.$store.getters.BreakLength;
	  		},
		}
	}
</script>
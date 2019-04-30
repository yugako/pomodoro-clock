<template>
	<article class="clock-time">
		<div class="clock-time_title">
			{{Title}}
		</div>
		<div v-if='SessionTime' class="clock-time_tick">
			{{getMinutes}}:{{getSeconds}}
		</div>
	</article>
</template>
<script>
	export default {
		name: 'appTimer',
		computed: {
			getMinutes() {
				let result = ~~(this.SessionTime / 60);
				return result < 10 ? '0' + result : result;
			},
			getSeconds() {
				let result = (this.SessionTime % 60).toFixed(0);
				return result < 10 ? '0' + result : result;
			},
			SessionTime() {
				return this.$store.getters.SessionTime;
			},
			Title() {
				return this.$store.getters.Title;
			}
		}
	}
</script>
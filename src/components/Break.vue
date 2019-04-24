<template>
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
</template>
<script>
	export default {
		name: 'break',
		props: ['subBreak', 'breakLength', 'addBreak']
	}
</script>
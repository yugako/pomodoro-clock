<template>
	<article class="clock-toolbar">
		<div class="clock-toolbar_item" @click='start'>Start</div>
		<div class="clock-toolbar_item" @click='stop'>Pause</div>
		<div class="clock-toolbar_item" @click='restart'>Restart</div>
	</article>
</template>
<script>
	export default {
		name: 'toolbar',
		props: ['start', 'stop', 'restart']
	}
</script>
<template>
	<article class="clock-time">
		<div class="clock-time_title">
			Session
		</div>
		<div class="clock-time_tick">
			{{minutes}}:{{seconds}}
		</div>
	</article>
</template>
<script>
	export default {
		name: 'time',
		props: ['minutes', 'seconds']
	}
</script>
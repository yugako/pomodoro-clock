<template>
	<article class='clock-settings'>
		<Break :subBreak='subBreak' :breakLength='breakLength' :addBreak='addBreak' />
		<Session :subMinutes='subMinutes' :sessionLength='sessionLength' :addMinutes='addMinutes' />
	</article>
</template>
<script>
	import Break from './Break';
	import Session from './Session';

	export default {
		name: 'settings',
		props: ['subBreak', 'breakLength', 'addBreak', 'subMinutes', 'sessionLength', 'addMinutes']
		components: {
			Break, Session
		}
	}
</script>
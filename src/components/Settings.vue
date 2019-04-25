<template>
	<article class='clock-settings'>
		<Break />
		<Session />
	</article>
</template>
<script>
	import Break from './Break';
	import Session from './Session';

	export default {
		name: 'settings',
		components: {
			Break, Session
		}
	}
</script>
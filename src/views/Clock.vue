<template>
  <section class="clock">
    <header class="clock-title">
    	Pomodoro app
    </header>
	<article class='clock-settings'>
		<div class="clock-settings_break">
			<div class="clock-settings_break-title">Break time</div>
			<div class="clock-settings_break-value">5</div>
		</div>
		<div class="clock-settings_session">
			<div class="clock-settings_session-title">Session length</div>
			<div class="clock-settings_session-value">25</div>	
		</div>
	</article>
	<article class="clock-time">
		<div class="clock-time_title">
			Session
		</div>
		<div class="clock-time_tick">
			25:00
		</div>
	</article>
	<article class="clock-toolbar">
		<div class="clock-toolbar_item">Start</div>
		<div class="clock-toolbar_item">Pause</div>
		<div class="clock-toolbar_item">Restart</div>
	</article>
	<footer class="clock-footer">
		Developed by <a href="https://yugako.github.io">Yurko</a>
	</footer>
  </section>
</template>

<script>
export default {
  name: 'home',
}
</script>
<style lang="scss">
	.clock {
		&-settings {
			display: flex;
			justify-content: space-around;
		}
		&-toolbar {
			display: flex;
			justify-content: center;
			&_item + &_item::before {
				content: '|';
				margin: auto 10px;
			}
		}
	}
</style>

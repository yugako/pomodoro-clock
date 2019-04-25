<template>
  <section class="clock">
    <app-title />
	<Settings  />
	<app-timer />
	<Toolbar />
	<Footer />
  </section>
</template>

<script>
	import AppTitle from '@/components/AppTitle'
	import Settings from '@/components/Settings'

	import AppTimer from '@/components/AppTimer'
	import Toolbar from '@/components/Toolbar'

	import Footer from '@/components/Footer'
	export default {
	  	name: 'clock',
	  	components: {
	  		AppTitle,
	  		Settings,
	  		AppTimer,
	  		Toolbar,
	  		Footer
	  	}
	}
</script>
<style lang="scss">
	.clock {
		&-title {
			font-size: 50px;
			margin-bottom: 15px;
		}
		&-settings {
			display: flex;
			justify-content: space-around;
			font-size: 32px;
			margin-bottom: 15px;
			&_break, &_session {
				font-size: 26px;
			}
			&_session {
				&-manage {
					display: flex;
					justify-content: space-around;
					align-items: center;
				}
				&-add, &-sub {
					margin: 5px;
					cursor: pointer;
				}
			}
			&_break {
				&-manage {
					display: flex;
					justify-content: space-around;
					align-items: center;
				}
				&-add, &-sub {
					margin: 5px;
					cursor: pointer;
				}
			}
		}
		&-toolbar {
			display: flex;
			justify-content: center;
			margin-bottom: 15px;
			&_item {
				cursor: pointer;
				font-size: 26px;
			}
			&_item + &_item::before {
				content: '|';
				margin: auto 10px;
			}
		}
		&-time {
			margin-bottom: 15px;
			&_title {
				font-size: 40px;
			}
			&_tick {
				font-family: 'Share Tech Mono', monospace;
				font-size: 80px;
			}
		}
		&-footer {
			&_link {
				color: darken(#fff, 15%);
			}
		}
	}
</style>

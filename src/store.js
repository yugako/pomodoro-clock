import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
  		title: 'Session',
  		session_time: null,
      	session_status: false,
  		sessionLength: 25,
  		breakLength: 5,
      	break_status: false,
  	},
  	mutations: {
  		setInitialTime(state) {
  			state.session_time = state.sessionLength * 60;
  		},
  		subMinutes (state) {
  			if ((state.sessionLength > 1)) {
	  			state.sessionLength-=1;
	  			state.session_time = state.sessionLength * 60;
	  		}
  		},
  		addMinutes(state) {
  			state.sessionLength+=1;
  			state.session_time = state.sessionLength * 60;
  		},
  		reduceTime(state) {
	        if (state.session_time > 0) {
	          	state.session_time--;
	          	state.session_status = true;
	        } else if (state.session_time == 0 && !state.break_status) {
	        	const sound = new Audio();

	        	sound.src = 'http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav';
	        	sound.play();

	        	state.title = 'Break';
	        	state.session_status = false;
	        	state.break_status = true;
	        	state.session_time = state.breakLength * 60;
	        } else {
	        	state.break_status = false;
	        	state.title = 'Session';
	        	state.session_time = state.sessionLength * 60;
	        }
  		},
      	sessionUp(state) {
        	state.session_status = true;
      	},
      	sessionDown(state) {
        	state.session_status = false;
      	},
  		subBreak (state) {
  			if ((state.breakLength > 1)) {
	  			state.breakLength-=1;
	  			state.break_time = state.breakLength * 60;
	  		}
  		},
  		addBreak(state) {
  			state.breakLength+=1;
  			state.break_time = state.breakLength * 60;
  		},
  	},
  	getters: {
  		SessionLength: state => state.sessionLength,
  		SessionTime: state => state.session_time,
      	SessionStatus: state => state.session_status,
      	BreakLength: state => state.breakLength,
      	Title: state => state.title,
  	}
})

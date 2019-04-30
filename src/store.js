import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  	state: {
  		title: JSON.parse(localStorage.getItem('title')) || 'Session',
  		session_time: JSON.parse(localStorage.getItem('session_time')) || 1500,
      	session_status: JSON.parse(localStorage.getItem('session_status')) || false,
  		sessionLength: JSON.parse(localStorage.getItem('sessionLength')) || 25,
  		breakLength: JSON.parse(localStorage.getItem('breakLength')) || 5,
      	break_status: JSON.parse(localStorage.getItem('break_status')) || false,
  	},
  	mutations: {
  		subMinutes (state) {
  			if ((state.sessionLength > 1)) {
	  			state.sessionLength-=1;
	  			state.session_time = state.sessionLength * 60;
	  			localStorage.setItem('session_time', JSON.stringify(state.session_time));
	  			localStorage.setItem('sessionLength', JSON.stringify(state.sessionLength));
	  		}
  		},
  		addMinutes(state) {
  			state.sessionLength+=1;
  			state.session_time = state.sessionLength * 60;
  			localStorage.setItem('session_time', JSON.stringify(state.session_time));
  			localStorage.setItem('sessionLength', JSON.stringify(state.sessionLength));
  		},
  		reduceTime(state) {
	        if (state.session_time > 0) {

	          	state.session_time--;
	          	state.session_status = true;

	          	localStorage.setItem('session_time', JSON.stringify(state.session_time));
	          	localStorage.setItem('session_status', JSON.stringify(state.session_status));
	          	
	        } else if (state.session_time == 0 && !state.break_status) {
	        	const sound = new Audio();
	        	sound.src = 'http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav';
	        	sound.play();

	        	state.title = 'Break';
	        	state.session_status = false;
	        	state.break_status = true;
	        	state.session_time = state.breakLength * 60;
	        	localStorage.setItem('title', JSON.stringify(state.title));
	        	localStorage.setItem('session_status', JSON.stringify(state.session_status));
	        	localStorage.setItem('break_status', JSON.stringify(state.break_status));
	        	localStorage.setItem('session_time', JSON.stringify(state.session_time));
	        } else {
	        	state.break_status = false;
	        	state.title = 'Session';
	        	state.session_time = state.sessionLength * 60;
	        	localStorage.setItem('session_time', JSON.stringify(state.session_time));
	        	localStorage.setItem('break_status', JSON.stringify(state.break_status));
	        	localStorage.setItem('title', JSON.stringify(state.title));

	        }
  		},
      	sessionUp(state) {
        	state.session_status = true;
        	localStorage.setItem('session_status', JSON.stringify(state.session_status));

      	},
      	sessionDown(state) {
        	state.session_status = false;
        	localStorage.setItem('session_status', JSON.stringify(state.session_status));

      	},
  		subBreak (state) {
  			if ((state.breakLength > 1)) {
	  			state.breakLength-=1;
	  			localStorage.setItem('breakLength', JSON.stringify(state.breakLength));
	  		}
  		},
  		addBreak(state) {
  			state.breakLength+=1;
  			localStorage.setItem('breakLength', JSON.stringify(state.breakLength));
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

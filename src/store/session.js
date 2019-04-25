export default {
  	state: {
  		session_time: null,
  		sessionLength: 1,
  	},
  	mutations: {
  		setInitialTime(state) {
  			state.session_time = state.sessionLength * 60;
  		},
  		subMinutes (state) {
  			if ((state.sessionLength)) {
	  			state.sessionLength-=1;
	  			state.session_time = state.sessionLength * 60;
	  		}
  		},
  		addMinutes(state) {
  			state.sessionLength+=1;
  			state.session_time = state.sessionLength * 60;
  		},
  		reduceTime(state) {
  			state.session_time--;
  		}
  	},
  	getters: {
  		SessionLength: state => {
  			return state.sessionLength;
  		},
  		SessionTime: state => {
  			return state.session_time;
  		}
  	}
}
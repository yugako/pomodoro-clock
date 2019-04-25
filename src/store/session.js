export default {
  	state: {
  		session_time: null,
      session_status: false,
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
        if (state.session_time > 0) {
          state.session_time--;
        } else {
          state.session_status = false;
        }
  		},
      sessionUp(state) {
        state.session_status = true;
      },
      sessionDown(state) {
        state.session_status = false;
      }
  	},
  	getters: {
  		SessionLength: state => {
  			return state.sessionLength;
  		},
  		SessionTime: state => {
  			return state.session_time;
  		},
      SessionStatus: state => {
        return state.session_status;
      }
  	}
}
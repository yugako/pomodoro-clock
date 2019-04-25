export default {
  	state: {
  		breakLength: 5,
  		break_time: null,
  	},
  	mutations: {
  		setInitialBreak(state) {
  			state.break_time = state.breakLength * 60;
  		},
  		subBreak (state) {
  			if ((state.breakLength)) {
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
  		BreakLength: state => {
  			return state.breakLength;
  		},
  		BreakTime: state => {
  			return state.break_time;
  		}
  	}
}
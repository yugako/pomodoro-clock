export default {
  	state: {
  		breakLength: 5,
  		break_time: null,
      break_status: false,
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
      reduceBreak(state) {
        state.break_time--;
      },
      breakUp(state) {
        state.break_status = true;
      },
      breakDown(state) {
        state.break_status = false;
      }
  	},
  	getters: {
  		BreakLength: state => {
  			return state.breakLength;
  		},
  		BreakTime: state => {
  			return state.break_time;
  		},
      BreakStatus: state => {
        return state.break_status;
      }
  	}
}
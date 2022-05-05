import types from '../action/type';

const intialState = {
    loading: false,
    user:{},
  };

  export default (state = intialState, action) => {
      
    switch (action.type) {
      case types.HOME_PROCESS_START: {
        return {
          ...state,
          loading: true,
        };
      }

      case types.HOME_PROCESS_END: {
        return {
          ...state,
          loading: false,
          user:action.payload.data
        };
      }
  
      default: {
        return state;
      }
    }
  };

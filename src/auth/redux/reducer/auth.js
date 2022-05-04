import types from '../action/type';

const intialState = {
    loading: false,
    user:{},
    error:'',
    otp:'',
    access_token:''
  };

  export default (state = intialState, action) => {
      
    switch (action.type) {
      case types.REGISTRATION_PROCESS_START: {
        return {
          ...state,
          loading: true,
        };
      }

      case types.REGISTRATION_PROCESS_FINISHED: {
        return {
          ...state,
          loading: false,
          otp:action.payload
        };
      }

      case types.LOGIN_PROCESS_START: {
        return {
          ...state,
          loading: true,
        };
      }

      case types.LOGIN_PROCESS_FINISHED: {
        return {
          ...state,
          loading: false,
          user:action.payload.user_details,
          access_token:action.payload.access_token
        };
      }
  
      default: {
        return state;
      }
    }
  };

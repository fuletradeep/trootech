import {high} from '../../../../config/string';
import {logger} from '../../../../constant/theme';
import types from '../action/type';

const initialState = {
  loading: false,
  alert_array: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BANNER_ALERT_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_BANNER_ALERT_FINISH: {
      console.log('~~~~~~~',state.alert_array);
      if (state.alert_array.length >= 3) {
        action.alertObject.priority == high
          ? (state.alert_array.shift(),
            state.alert_array.push(action.alertObject))
          : (state.alert_array.pop(),
            state.alert_array.unshift(action.alertObject));
        return {
          ...state,
          loading: false,
          alert_array: state.alert_array,
        };
      } else {
        action.alertObject.priority == high
          ? state.alert_array.push(action.alertObject)
          : state.alert_array.unshift(action.alertObject);
        return {
          ...state,
          loading: false,
          alert_array: state.alert_array,
        };
      }
    }
    case types.CLEAR_BANNER_ALERT: {
      return {
        loading: false,
        alert_array: [],
      };
    }
    case types.CLEAR_ONE_NOTIFICATION: {
      return {
        loading: false,
        alert_array: state.alert_array.slice(action.indexOfItem),
      };
    }

    default: {
      return state;
    }
  }
};

  
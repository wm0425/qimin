
import * as TYPES from '../../ActionType';
 
const initialState = {
  status: 'fail',
  isSuccess: false,
  phone : '',
  photo : '', 
  name: '',
  study: 0,
  safe: 0,
  buy: 0,
  empl_id: '',
  UCML_CONTACTOID: '',
  loaded: false,
}
/**
 * 根据type判断了是从哪个action过来的数据，并进行选择性return。
 */
export default function setLogin(state = initialState, action) {
    switch (action.type) {
        case TYPES.ACTION_SETLOGIN_INIT: //初始状态
            return Object.assign({}, state, {
                status: 'success',
                isSuccess: true,
                phone : action.phone,
                photo : action.photo,
                name: action.name,
                study: action.study,
                safe: action.safe,
                buy: action.buy,
                empl_id: action.empl_id,
                UCML_CONTACTOID: action.UCML_CONTACTOID,
                loaded: action.loaded,
            });
        default:
            return state;
  }
} 
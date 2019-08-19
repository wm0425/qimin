
import * as TYPES from '../../ActionType';
 
const initialState = {
  status: 'fail',
  isSuccess: false,
  newsid : '',
  isread : false,
}
/**
 * 根据type判断了是从哪个action过来的数据，并进行选择性return。
 * type : TYPES.ACTION_REMDATA,
        message : '写入',
        newsid : list.newsid,
        isread : list.isread,
 */
export default function Remdata(state = initialState, action) {
    switch (action.type) {
        case TYPES.ACTION_REMDATA: 
            return Object.assign({}, state, {
                status: 'success',
                isSuccess: true,
                newsid : action.newsid,
                isread : action.isread,
            });
        default:
            return state;
  }
}
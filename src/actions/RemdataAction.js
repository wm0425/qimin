import * as TYPES from '../ActionType';
/**
 * 获取天气预报的action
 */
export function actionRemdata(list){
    return (dispatch) => {
        dispatch(init(list));
    }
}
 
/**
 * 这里会通过dispatch把action送给reducer，TYPE是判断拿到的是哪个action。
 */
function init(list){
    return{
        type : TYPES.ACTION_REMDATA,
        message : '写入',
        newsid : list.newsid,
        isread : list.isread,
    }
}
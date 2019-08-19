
import * as TYPES from '../ActionType';
export function actionSetLogin(list){
    return (dispatch) => {
        dispatch(init(list));
    }
}
 
/**
 * 这里会通过dispatch把action送给reducer，TYPE是判断拿到的是哪个action。
 */
function init(list){
    return{
        type : TYPES.ACTION_SETLOGIN_INIT,
        message : '写入',
        phone : list.phone,
        photo : list.photo,
        name: list.name,
        study: list.study,
        safe: list.safe,
        buy: list.buy,
        empl_id: list.empl_id,
        UCML_CONTACTOID: list.UCML_CONTACTOID,
        loaded: list.loaded,
    }
}
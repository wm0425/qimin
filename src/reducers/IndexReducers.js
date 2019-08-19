/**
 * create by AbyssKitty on 2017/09/22
 * 事件分发 总模块
 */
 
import { combineReducers } from 'redux';
import GetWeatherReducer from './item/GetWeatherReducer';
import SetLoginReducer from './item/SetLoginReducer';
import RemdataReducer from './item/RemdataReducer';
 
//这里面必须要有初始数据 - 否则报错
const rootReducer = combineReducers({
    //GetWeatherReducer : GetWeatherReducer,
    GetWeatherReducer,
    SetLoginReducer,
    RemdataReducer
});
 
export default rootReducer;
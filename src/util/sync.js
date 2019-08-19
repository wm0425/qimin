//import { default_API_url } from '../config/index';
import config from './util'
const sync = {
    // sync方法的名字必须和所存数据的key完全相同
    // 方法接受的参数为一整个object，所有参数从object中解构取出
    // 这里可以使用promise。或是使用普通回调函数，但需要调用resolve或reject。
    jifen(params) {
        let { id, resolve, reject, syncParams: { extraFetchOptions, someFlag } } = params;

        fetch(config.geturl()+'api/BPO_Contact.asmx/AppLoadPoint', {
            method: 'POST',
            mode: "cors",
            body: 'emplid='+id,
            headers: new Headers({
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Connection": "close"
            }),
            ...extraFetchOptions,
        }).then(response => response.json())
        .then(json => {
            console.log(json);
            if (json) {
                storage.save({
                    key: 'issue',
                    data: {
                        number1: json.Number1,
                        number2: json.Number2,
                        number3: json.Number3,
                        name: json.PersonName,
                        phone: json.MobilePhone,
                        photo: json.photo,
                      },
                    expires: null
                });
                if (someFlag) {
                    // 根据syncParams中的额外参数做对应处理
                }

                // 成功则调用resolve
                resolve && resolve(json.results);
            }
            else {
                // 失败则调用reject
                reject && reject(new Error('data parse error'));
            }
        }).catch(err => {
            console.warn(err);
            reject && reject(err);
        });
    }
}

export default sync;
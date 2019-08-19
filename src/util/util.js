

// const url='http://218.22.167.228:13285/api/BPO_Contact.asmx/'
// const swiperurl = 'http://218.22.167.228:13285'

const insideurl = 'http://137.12.7.55/'
const outsideurl = 'http://218.22.167.228:13285/'
 

 function geturl()
{
  let res = '';
  storage.load({
    key: 'url',
    autoSync: false,
    syncInBackground: true,
    syncParams: {
      extraFetchOptions: {
      },
      someFlag: true
    }
  })
  .then(ret => {
    if(ret.url!=''){
      res = ret.rul;
    }
  })
  if(res == '')
  {
    res = insideurl;
  }
return res;

}


async function fetchapi(api,parameter)
{
   return new Promise(function(resolve,reject){
    fetch(global.presenturl+api,{
        method: 'POST',
        mode: "cors",
        body: parameter,
        headers: new Headers({
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "Connection": "close"
        })
      })
      .then(res => res.json())
      .then(responseData=>{
      resolve(responseData);
        }).catch(error => {
        reject(error);
    });
   });
}

export default {
    // url,
    // swiperurl,
    insideurl,
    outsideurl,
    fetchapi,
    geturl,
}

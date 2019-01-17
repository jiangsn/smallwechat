import MD5 from 'md5.js'


const appid = '20190117000257580';
const key = 'E8Msr95ctRWkcHMhf7UO';

function translate(query, { from = 'auto', to = 'auto' }) {
  var query = query;

  var salt = (new Date).getTime();
  var str1 = appid + query + salt + key;
  var sign = MD5.MD5(str1);

  return new Promise((resolve, reject) =>{
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        'q': query,
         from,
          to,
        'salt': salt,
        'appid': appid,
        'sign': sign,
      },
      header: {
        'content-type': 'application/json', // 默认值
        'charset': 'utf-8' 
      },
      success(res) {
          resolve(res.data)
      },
      fail(res) {
      
        reject(res.data)
      }
    })
  })
  
}

module.exports = {
  translate :translate
}
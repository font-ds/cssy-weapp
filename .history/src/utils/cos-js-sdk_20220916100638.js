import COS from 'cos-js-sdk-v5'

var cos = new COS({
    // ForcePathStyle: true, // 如果使用了很多存储桶，可以通过打开后缀式，减少配置白名单域名数量，请求时会用地域域名
    getAuthorization: function (options, callback) {
        // 初始化时不会调用，只有调用cos方法（比如cos.putObject）时才会进入
        // 异步获取临时密钥
        wx.request({
            url: 'https://seasonslibrary.cn/back/picture/verify',
            data: {
                bucket: options.Bucket,
                region: options.Region,
            },
            dataType: 'json',
            success: function (result) {
                var data = result.data;
                var credentials = data && data.Credentials;
                if (!data || !credentials) return console.error('credentials invalid');
                callback({
                    TmpSecretId: credentials.TmpSecretId,
                    TmpSecretKey: credentials.TmpSecretKey,
                    SecurityToken: credentials.Token,
                    // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
                    StartTime: data.StartTime, // 时间戳，单位秒，如：1580000000
                    ExpiredTime: data.ExpiredTime, // 时间戳，单位秒，如：1580000000
                });
            }
        });
    }
});

export const cos=new COS({
    // getAuthorization 必选参数
    getAuthorization: function (options, callback) {
        // 初始化时不会调用，只有调用cos方法（比如cos.putObject）时才会进入
        // 异步获取临时密钥
        // 服务端 JS 和 PHP 例子：https://github.com/tencentyun/cos-js-sdk-v5/blob/master/server/
        // 服务端其他语言参考 COS STS SDK ：https://github.com/tencentyun/qcloud-cos-sts-sdk
        // STS 详细文档指引看：https://cloud.tencent.com/document/product/436/14048

        var url = 'https://seasonslibrary.cn/back/picture/verify'; // url替换成您自己的后端服务
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function (e) {
            try {
                var data = JSON.parse(e.target.responseText).data;
                var credentials = data.Credentials;
                console.log(data,credentials)
            } catch (err) {
            }
            if (!data || !credentials) {
              return console.error('credentials invalid:\n' + JSON.stringify(data, null, 2))
            };
            callback({
              TmpSecretId: credentials.TmpSecretId,
              TmpSecretKey: credentials.TmpSecretKey,
              SecurityToken: credentials.Token,
              // 建议返回服务器时间作为签名的开始时间，避免用户浏览器本地时间偏差过大导致签名错误
              StartTime: data.StartTime, // 时间戳，单位秒，如：1580000000
              ExpiredTime: data.ExpiredTime, // 时间戳，单位秒，如：1580000000
          });
        };
        xhr.send();
    }
});

// 获取图片
export const getImage=(key)=>cos.getObjectUrl({
    Bucket: 'library-1313332868', /* 填入您自己的存储桶，必须字段 */
    Region: 'ap-chongqing', /* 存储桶所在地域，例如ap-beijing，必须字段 */
    Key: key, /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
}, function(err, data) {
    return data.Url.replace('http','https')
});
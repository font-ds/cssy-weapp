import COS from 'cos-wx-sdk-v5'
import Taro from '@tarojs/taro'

export const cos = new COS({
    // ForcePathStyle: true, // 如果使用了很多存储桶，可以通过打开后缀式，减少配置白名单域名数量，请求时会用地域域名
    getAuthorization: function (options, callback) {
        // 初始化时不会调用，只有调用cos方法（比如cos.putObject）时才会进入
        // 异步获取临时密钥
        Taro.request({
            url: 'https://seasonslibrary.cn/back/picture/verify',
            data: {
                bucket: options.Bucket,
                region: options.Region,
            },
            dataType: 'json',
            success: function (result) {
                var data = result.data.data;
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



// 获取图片
export const getImage=(key)=>{
    let imgUrl=''
    cos.getObjectUrl({
        Bucket: 'library-1313332868', /* 填入您自己的存储桶，必须字段 */
        Region: 'ap-chongqing', /* 存储桶所在地域，例如ap-beijing，必须字段 */
        Key: key, /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */
        Sign:true
    }, function(err, data) {
        imgUrl=data.Url('http','https')
    });
    return imgUrl
}

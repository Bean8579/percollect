/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
   //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
  'c803cbf4692c43b2b4ca576e8800fdbe@e4e6c8f8d6014401bde19cf016b60009@c127195ced944be896197e0978527be4@9eb451682b134c6a9164dfb744b951a0@1ee79b3996ba4e0ab4c4472c14249d9e@0d5cc900494648c188038b09c8c9d63d',
  //账号二的好友shareCode,不同好友的shareCode中间用@符号隔开
  'c803cbf4692c43b2b4ca576e8800fdbe@e4e6c8f8d6014401bde19cf016b60009@c127195ced944be896197e0978527be4@9eb451682b134c6a9164dfb744b951a0@c6f8ad672c844e69877c4ab728fc6b89@0d5cc900494648c188038b09c8c9d63d',
  'c803cbf4692c43b2b4ca576e8800fdbe@e4e6c8f8d6014401bde19cf016b60009@c127195ced944be896197e0978527be4@9eb451682b134c6a9164dfb744b951a0@c6f8ad672c844e69877c4ab728fc6b89@c6f8ad672c844e69877c4ab728fc6b89',
 ]
// 判断github action里面是否有水果互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`您secret里面未提供助力码，优先进行自己账号内互助，然后再给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}

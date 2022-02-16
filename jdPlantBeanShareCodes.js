/*
京东种豆得豆互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PlantBeanShareCodes = [
  //账号一的好友shareCode,不同好友的shareCode中间用@符号隔开
  '4npkonnsy7xi2kgsgw3mvh4eliyzv75tok6jmyq@mlrdw3aw26j3w3c3nh5w46sxdxydwpj6vx4ie2q@olmijoxgmjutyospwpmscxsjakastui72ptkfyi@aogye6x4cnc3pfm5e33oxoapl6f55tj4wuruzca@iu237u55hwjipnmhn53sffxthngpkr7jpuzr4ba@mlrdw3aw26j3wa5huzaa22urjo4wcvoyan33zni@e7lhibzb3zek2vuhjecdclredpczl6xibozzeoa',
  //账号二的好友shareCode,不同好友的shareCode中间用@符号隔开
  '4npkonnsy7xi2kgsgw3mvh4eliyzv75tok6jmyq@mlrdw3aw26j3w3c3nh5w46sxdxydwpj6vx4ie2q@olmijoxgmjutyospwpmscxsjakastui72ptkfyi@aogye6x4cnc3pfm5e33oxoapl6f55tj4wuruzca@iu237u55hwjipnmhn53sffxthngpkr7jpuzr4ba@mlrdw3aw26j3wa5huzaa22urjo4wcvoyan33zni@e7lhibzb3zek2vuhjecdclredpczl6xibozzeoa',
  '4npkonnsy7xi2kgsgw3mvh4eliyzv75tok6jmyq@mlrdw3aw26j3w3c3nh5w46sxdxydwpj6vx4ie2q@olmijoxgmjutyospwpmscxsjakastui72ptkfyi@aogye6x4cnc3pfm5e33oxoapl6f55tj4wuruzca@iu237u55hwjipnmhn53sffxthngpkr7jpuzr4ba@mlrdw3aw26j3wa5huzaa22urjo4wcvoyan33zni@e7lhibzb3zek2vuhjecdclredpczl6xibozzeoa',
]
// 判断github action里面是否有种豆得豆互助码
if (process.env.PLANT_BEAN_SHARECODES) {
  if (process.env.PLANT_BEAN_SHARECODES.indexOf('&') > -1) {
    console.log(`您的种豆互助码选择的是用&隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('&');
  } else if (process.env.PLANT_BEAN_SHARECODES.indexOf('\n') > -1) {
    console.log(`您的种豆互助码选择的是用换行隔开\n`)
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split('\n');
  } else {
    PlantBeanShareCodes = process.env.PLANT_BEAN_SHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`您secret里面未提供助力码，优先进行自己账号内互助，然后再给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PlantBeanShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PlantBeanShareCodes' + index] = PlantBeanShareCodes[i];
}

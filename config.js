/**
 * 项目配置表
 * 邮件推荐使用qq邮箱，其他邮箱可能协议方面要自行设置
 * xuess<wuniu2010@126.com>
 * 2018-04-17
 */

// email 登陆账号 如：xxxx@qq.com
const emailName = 'xxxx@qq.com';
// email 登陆密码
const emailPassword = 'aaaaabbbb';
// 接收者 邮箱
const toEmail = 'xxx@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{
		'username': '非必填，用户发送邮件展示',
		'phone': '非必填，用户发送邮件展示',
		'cookies': 'r_sort_type=score; shequ_pc_sug=b; smzdm_user_source=AC95624BDC661D754B2ACADE0F3B1411; userId=user:6285965612|6285965612; device_id=9892715611619593166415085734387c8a10a47cc5f99fe48f052918e; _ga_271744817=GS1.1.1620811489.8.1.1620811492.0; homepage_sug=a; _ga=GA1.2.1563426719.1609898252; _ga_09SRZM2FDD=GS1.1.1637116299.385.0.1637116304.0; __gads=ID=ab77b5908d64209e:T=1633922786:S=ALNI_MZFCOMhlR8_XsDl1_4KdDZ99xTLNQ; __ckguid=BoL5W7BrGKTuIFJtGopxF45; __jsluid_s=4141fecf9eab0cea0b95b7dbae4cd057; __jsluid_h=33cc2643ac781e7644b6db0af5ef1347; sess=BA-hyxNAS%2F4jHaADAlWgi0cCS5cgymK%2BCNMzPoGJmb%2FbME1OmHXaycAqX%2F3ElDdtDlVknNLaq130vJHB%2B%2B7TcX2S2eLs6SMrnO%2BQvum8pWdgKDPqlO6%2FucAoXk%3D; user=user%3A6285965612%7C6285965612; smzdm_id=6285965612; smzdm_collection_yuanchuang=89854456; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%226285965612%22%2C%22first_id%22%3A%22176d569d5d640b-0b7b231989f2e9-376b4502-2304000-176d569d5d75f8%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%2C%22%24latest_landing_page%22%3A%22https%3A%2F%2Fpost.smzdm.com%2Fp%2Faz64elp5%2F%22%7D%2C%22%24device_id%22%3A%22176d569d5d640b-0b7b231989f2e9-376b4502-2304000-176d569d5d75f8%22%7D; Hm_lvt_9b7ac3d38f30fe89ff0b8a0546904e58=1663646162,1666062095; smzdm_user_view=F1DB5629D28F51F34AE5C124410C2F7C; Hm_lpvt_9b7ac3d38f30fe89ff0b8a0546904e58=1666062114'
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错',
	'现在这个价格还可入手吗？',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};

export default {
  pages: [
    'pages/home/mine/appointRecord/index',

    'pages/home/index/index',

    'pages/home/mine/power/index',

    // 'pages/index',
    'pages/login/index',


    'pages/home/index/appointment/index',
    'pages/home/index/appointment/readAppoint/index',
    'pages/home/index/appointment/contentAppoint/index',
    'pages/home/index/appointment/teacherAppoint/index',
    'pages/home/index/components/appointDetail/index',
    
    'pages/home/index/borrow/index',
    'pages/home/index/borrow/search/index',
    'pages/home/index/borrow/bookDetail/index',


    'pages/home/online/index',

    'pages/home/mine/index',

    'pages/home/mine/lendRecord/index',
    'pages/home/mine/coupon/index',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor:'#1f1f1f'
  },
  tabBar: {
    color: "#626567",
    selectedColor: "orange",
    backgroundColor: "#FBFBFB",
    borderStyle: "white",
    
    list: [{
      pagePath: 'pages/home/index/index',
      text: "首页服务",
      iconPath: "assets/serve.png",
      selectedIconPath: 'assets/serve.png',
    },
    {
      pagePath: 'pages/home/online/index',
      text: "电子书馆",
      iconPath: "assets/serve.png",
      selectedIconPath: "assets/serve.png"
    },
    {
      pagePath: 'pages/home/mine/index',
      text: "会员中心",
      iconPath: "assets/serve.png",
      selectedIconPath: "assets/serve.png"
    },]
  },
  
}

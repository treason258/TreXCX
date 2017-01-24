//index.js
var TAG = 'weixin.js'
//获取应用实例
var app = getApp()
Page({
  //生命周期
  onLoad: function () {
    console.log(TAG + ' | onLoad');
    this.loading();
    this.getData(app.page);
  },
  onShow: function (e) {
    console.log(TAG + ' | onShow');
    console.log(TAG + ' | wx.getSystemInfo');
    wx.getSystemInfo({
      success: (res) => {
        console.log(TAG + ' | wx.getSystemInfo -> success | res -> ' + res);
        this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    })
  },
  //变量
  data: {
    title: [],
    imgUrls: [],
    author: [],
    date: [],
    url: [],
    requestUrl: 'top',
    cssActive: 0,
    dataId: 0,
    windowHeight: '',
    windowWidth: '',
    page: 0,
  },
  getData: function (page) {
    console.log(TAG + ' | wx.request');
    wx.request({
      url: 'https://v.juhe.cn/weixin/query?key=352105dbc59ac1931bd63d5b01efa25a',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        console.log(TAG + ' | wx.request -> success | res -> ' + res);
        var list = res.data.result.list;
        for (var i = page; i < page + 5; i++) {
          this.title.setData(list[i].title);
          this.imgUrls.setData(list[i].firstImg);
          this.author.setData(list[i].source);
          this.date.setData(list[i].source);
          this.url.setData(list[i].url);
        }
        this.setData({
          title: app.title,
          imgUrls: app.imgUrls,
          author: app.author,
          date: app.date,
          url: app.url,
          page: app.page,
        })
      },
      fail: function () {
        console.log(TAG + ' | wx.request -> fail');
      },
      complete: function () {
        console.log(TAG + ' | wx.request -> complete');
        wx.hideToast();
      }
    })
  },
  //正在加载
  loading: function () {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
  },
})
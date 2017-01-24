//index.js
var TAG = 'index.js'
//获取应用实例
var app = getApp()
Page({
  //生命周期
  onLoad: function (options) {
    console.log(TAG + ' | onLoad | options -> ' + options)
    //调用应用实例的方法获取全局数据
    console.log(TAG + ' | app.getUserInfo()')
    app.getUserInfo()
  },
  onReady: function () {
    console.log(TAG + ' | onReady')
  },
  onShow: function () {
    console.log(TAG + ' | onShow')
  },
  onHide: function () {
    console.log(TAG + ' | onHide')
  },
  onUnload: function () {
    console.log(TAG + ' | onUnload')
  },
  onPullDownRefresh: function () {
    console.log(TAG + ' | onPullDownRefresh')
  },
  onReachBottom: function () {
    console.log(TAG + ' | onReachBottom')
  },
  onShareAppMessage: function () {
    console.log(TAG + ' | onShareAppMessage')
  },
  //变量
  data: {
    hi: '欢迎来到TreXCX-小程序初体验！'
  },
  customData: {
    hello: 'Helo index.js!'
  },
  //跳转到新闻头条
  gotoToutiao: function () {
    wx.navigateTo({
      url: '../index/toutiao/index'
    })
  },
  //跳转到豆瓣电影
  gotoDouBanBook: function () {
    wx.navigateTo({
      url: '../index/douban-book/index'
    })
  },
  //跳转到微信精选
  gotoWeixinJingxuan: function () {
    wx.navigateTo({
      url: '../index/weixin-jingxuan/index'
    })
  },
})

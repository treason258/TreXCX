//index.js
var TAG = 'index.js'
//获取应用实例
var app = getApp()
Page({
  data: {
    hi: '欢迎来到TreXCX-小程序初体验！'
  },
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
  customData: {
    hello: 'Helo index.js!'
  }
})

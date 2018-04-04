//user.js
var common = require('../../utils/common.js');
var tag = 'user.js'

//获取应用实例
var app = getApp()
Page({
  //生命周期
  onLoad: function (options) {
    common.log(tag, 'onLoad | options -> ' + options)
    //调用应用实例的方法获取全局数据
    common.log(tag, 'app.getUserInfo()')
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    common.log(tag, 'onReady')
  },
  onShow: function () {
    common.log(tag, 'onShow')
  },
  onHide: function () {
    common.log(tag, 'onHide')
  },
  onUnload: function () {
    common.log(tag, 'onUnload')
  },
  onPullDownRefresh: function () {
    common.log(tag, 'onPullDownRefresh')
  },
  onReachBottom: function () {
    common.log(tag, 'onReachBottom')
  },
  onShareAppMessage: function () {
    common.log(tag, 'onShareAppMessage')
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  },
  //变量
  data: {
    hi: '好好学习，天天向上！！！！！！',
    userInfo: null
  },
  customData: {
    hello: 'Hello user.js!'
  },
  //跳转到日志页面
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})

//index.js
var common = require('../../utils/common.js');
var tag = 'index.js'

//获取应用实例
var app = getApp()
Page({
  //生命周期
  onLoad: function (options) {
    common.log(tag, 'onLoad | options -> ' + options)
    //调用应用实例的方法获取全局数据
    common.log(tag, 'app.getUserInfo()')
    app.getUserInfo()
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
  },
  //变量
  data: {
    hi: '源码会挂在Github上，旨在发扬开源精神，方便开发交流，提高开发效率。'
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

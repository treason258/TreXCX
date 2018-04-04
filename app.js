//app.js
var common = require('/utils/common.js');
var tag = 'app.js'

App({
  //生命周期
  onLaunch: function () {
    common.log(tag, 'onLaunch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    common.log(tag, 'logs -> ' + logs)
  },
  onShow: function () {
    common.log(tag, 'onShow')
  },
  onHide: function () {
    common.log(tag, 'onHide')
  },
  onError: function (msg) {
    common.log(tag, 'onError | msg -> ' + msg)
  },
  //获取用户信息
  getUserInfo: function (cb) {
    common.log(tag, 'getUserInfo | cb -> ' + cb)
    var that = this
    if (that.globalData.userInfo) {
      common.log(tag, 'getUserInfo | this.globalData.userInfo')
      typeof cb == "function" && cb(that.globalData.userInfo)
    } else {
      common.log(tag, 'getUserInfo | !this.globalData.userInfo')
      //调用登录接口
      common.log(tag, 'wx.login')
      wx.login({
        //登录成功
        success: function (res) {
          common.log(tag, 'wx.login -> success | res -> ' + res)
          //调用获取用户信息接口
          common.log(tag, 'wx.getUserInfo')
          wx.getUserInfo({
            //获取用户信息成功
            success: function (res) {
              common.log(tag, 'wx.getUserInfo -> success | res -> ' + res)
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            },
            //获取用户信息失败
            fail: function () {
              common.log(tag, 'wx.getUserInfo -> fail')
            },
            //获取用户信息完成
            complete: function () {
              common.log(tag, 'wx.getUserInfo -> complete')
            },
          })
        },
        //登录失败
        fail: function () {
          common.log(tag, 'wx.login -> fail')
        },
        //登录完成
        complete: function () {
          common.log(tag, 'wx.login -> complete')
        },
      })
    }
  },
  //全局变量
  globalData: {
    userInfo: null,
    hi: 'Hello app.js!'
  },
  //新闻头条
  title: [],
  imgUrls: [],
  author: [],
  date: [],
  url: [],
  requestUrl: "top",
  cssActive: 0,
  page: 0,
})
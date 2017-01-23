//app.js
var TAG = 'app.js'
App({
  //生命周期
  onLaunch: function () {
    console.log(TAG + ' | onLaunch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function () {
    console.log(TAG + ' | onShow')
  },
  onHide: function () {
    console.log(TAG + ' | onHide')
  },
  onError: function (msg) {
    console.log(TAG + ' | onError | msg -> ' + msg)
  },
  //获取用户信息
  getUserInfo: function (cb) {
    console.log(TAG + ' | getUserInfo | cb -> ' + cb)
    var that = this
    if (that.globalData.userInfo) {
      console.log(TAG + ' | getUserInfo | this.globalData.userInfo')
      typeof cb == "function" && cb(that.globalData.userInfo)
    } else {
      console.log(TAG + ' | getUserInfo | !this.globalData.userInfo')
      //调用登录接口
      console.log(TAG + ' | wx.login')
      wx.login({
        //登录成功
        success: function (res) {
          console.log(TAG + ' | wx.login -> success | res -> ' + res)
          //调用获取用户信息接口
          console.log(TAG + ' | wx.getUserInfo')
          wx.getUserInfo({
            //获取用户信息成功
            success: function (res) {
              console.log(TAG + ' | wx.getUserInfo -> success | res -> ' + res)
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            },
            //获取用户信息失败
            fail: function () {
              console.log(TAG + ' | wx.getUserInfo -> fail')
            },
            //获取用户信息完成
            complete: function () {
              console.log(TAG + ' | wx.getUserInfo -> complete')
            },
          })
        },
        //登录失败
        fail: function () {
          console.log(TAG + ' | wx.login -> fail')
        },
        //登录完成
        complete: function () {
          console.log(TAG + ' | wx.login -> complete')
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
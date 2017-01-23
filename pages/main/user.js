//user.js
var TAG = 'user.js'
//获取应用实例
var app = getApp()
Page({
    //生命周期
    onLoad: function (options) {
        console.log(TAG + ' | onLoad | options -> ' + options)
        //调用应用实例的方法获取全局数据
        console.log(TAG + ' | app.getUserInfo()')
        var that = this
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
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

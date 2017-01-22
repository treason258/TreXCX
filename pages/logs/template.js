//template.js
var TAG = 'template.js'
//获取应用实例
var app = getApp()
Page({
    data: {
        hi: 'Hello template.js!'
    },
    onLoad: function (options) {
        console.log(TAG + ' | onLoad | options -> ' + options)
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
    }
})

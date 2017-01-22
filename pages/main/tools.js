//tools.js
var TAG = 'tools.js'
//获取应用实例
var app = getApp()
Page({
    data: {
        hi: '工具大合集！',
        list: [
            {
                id: 'view',
                name: '视图容器',
                open: false,
                pages: ['view', 'scroll-view', 'swiper']
            }, {
                id: 'content',
                name: '基础内容',
                open: false,
                pages: ['text', 'icon', 'progress']
            }, {
                id: 'form',
                name: '表单组件',
                open: false,
                pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
            }, {
                id: 'nav',
                name: '导航',
                open: false,
                pages: ['navigator']
            }, {
                id: 'media',
                name: '媒体组件',
                open: false,
                pages: ['image', 'audio', 'video']
            }, {
                id: 'map',
                name: '地图',
                pages: ['map']
            }, {
                id: 'canvas',
                name: '画布',
                pages: ['canvas']
            }
        ]
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
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
    },
    customData: {
        hello: 'Helo tools.js!'
    }
})

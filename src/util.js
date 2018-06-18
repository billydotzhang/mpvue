//工具函数库

import config from './config'

//自己封装的get请求
export function get(url) {
    return new Promise((reslove, reject) => {
        wx.request({
            url: config.host + url,
            success: function (res) {
                if (res.data.code == 0) {
                    reslove(res.data.data)
                } else {
                    reject(res.data)
                }
            }
        })
    })
}

export function showSuccess(text) {
    wx.showToast({
        title: text,
        icon: 'success'
    })
}

export function showLoading(text) {
    wx.showToast({
        title: text,
        icon: 'loading'
    })
}

export function showFail(text) {
    wx.showToast({
        title: text,
        icon: 'none'
    })
}
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false


const app = new Vue(App)

app.$mount()

export default {
    config: {
        "pages": [
            '^pages/mine/main',
            // '^pages/home/main',
            // 'pages/activity/main',
            // 'pages/discounts/main',
            // 'pages/mine/main'
        ],
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#fb560a",
            "navigationBarTitleText": "色食你我他",
            "navigationBarTextStyle": "light"
        },

        "tabBar": {
            selectedColor: "#fb560a",
            list: [
                {
                    pagePath: "pages/home/main",
                    text: "首页",
                    iconPath: "static/img/home.png",
                    selectedIconPath: "static/img/homed.png"

                },
                {
                    pagePath: "pages/activity/main",
                    text: "活动",
                    iconPath: "static/img/activity.png",
                    selectedIconPath: "static/img/activityed.png"

                },
                {
                    pagePath: "pages/discounts/main",
                    text: "优惠",
                    iconPath: "static/img/discount.png",
                    selectedIconPath: "static/img/discounted.png"

                },
                {
                    pagePath: "pages/mine/main",
                    text: "我的",
                    iconPath: "static/img/mine.png",
                    selectedIconPath: "static/img/mined.png"

                }
            ]
        }
    }
}
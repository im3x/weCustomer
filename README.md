# 微信小程序客服消息UI组件

> 懒人必备，一键给程序添加多样化的联系客服功能！

## 组件列表
| 组件名称 | 说明 |
| :---: | :---: |
| floatAction | 右下角固定的联系客服按钮图标 |
| weReadTip | 模仿微信读书引导下载app UI |

## 安装
复制 SDK 代码到小程序目录

## 使用
在需要的页面（比如首页）`json`配置文件中，按需引入sdk的组件：

``` json
{
  "usingComponents": {
    "floatAction": "/components/weCustomer/floatAction/index",
    "weReadTip": "/components/weCustomer/weReadTip/index
  }
}
```

> 提示：路径请根据自身情况修改

最后，在页面（wxml）文件中，添加我们的组件即可：

``` wxml
<floatAction />
```

## `floatAction` 组件属性

|属性名 | 类型 | 默认值 | 说明 |
|:--:|:--:|:--:|:--:|
| bottom | Number | 100 | 底部距离 |
| right | Number | 20 | 右侧距离 |
| icon | String | customer.png | 按钮图片资源 |

## `weReadTip` 组件属性

|属性名 | 类型 | 默认值 | 说明 |
|:--:|:--:|:--:|:--:|
| show | Boolean | false | 是否显示提示UI |
| closeOnTap | Boolean | true | 是否点击后自动隐藏UI |
| title | String | 顶部标题\n需要两行 | 顶部标题 |
| listIcon | String | list.svg | 列表左侧图标资源 |
| features | Array | ['功能1','功能2'] | 功能介绍文字列表 |
| bottomText | String | 立即下载·在客服会话中回复1 | 底部按钮提示文字 |
| themeColor | String | #67C23A | 整体弹出层主题颜色 |

## 客服消息自动回复神器

基础版（免费）：https://s.w7.cc/module-25655.html

## 预览效果

![小程序客服消息](https://i.loli.net/2020/05/29/oNdbrcvgt7xETZG.jpg)
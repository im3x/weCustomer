# 微信小程序客服消息UI组件

> 引导用户进入客服消息，并进行引流下载等操作

## 安装
复制 SDK 代码到小程序目录

## 使用
在需要的页面（比如首页）`json`配置文件中，引入sdk的组件：

``` json
{
  "usingComponents": {
    "floatAction": "/components/weCustomer/floatAction/index"
  }
}
```

> 提示：路径请根据自身情况修改

最后，在页面（wxml）文件中，添加我们的组件即可：

``` wxml
<floatAction />
```
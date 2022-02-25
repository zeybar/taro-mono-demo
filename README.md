# taro-mono-demo
taro-mono-demo

## 前置安装
```
npm install -g @microsoft/rush

npm install -g pnpm
```

## 复现步骤
```
rush update

rush build --only @lib/taro-ui

cd my-app

pnpm dev:weapp

```
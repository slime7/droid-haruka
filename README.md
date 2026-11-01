# Droid Haruka

Droid Haruka 是一个面向 Windows 与 Linux 的 Android 投屏与多窗口桌面客户端。它通过设备端采集器和 WebCodecs 提供整屏镜像、独立应用虚拟屏、设备管理、无线调试、文件与剪贴板同步，并在 Windows 上支持虚拟摄像头。

## 功能

- 整屏镜像、鼠标与键盘控制
- 按应用拆分的独立虚拟屏窗口
- 无线调试、设备管理与应用列表
- 文件传输、剪贴板同步与通知转发
- Windows 11 虚拟摄像头

## 支持平台

| 平台 | 支持情况 |
| --- | --- |
| Windows 10 / 11 x64 | 完整桌面客户端；Windows 11 22H2 起支持虚拟摄像头 |
| Linux x64 | 桌面客户端、整屏镜像与虚拟屏；不包含虚拟摄像头 |
| Android 11 及以上 | 设备端采集器；部分功能需要 Shizuku |

macOS 不在支持范围内。

## 下载

- [最新版本](https://github.com/slime7/droid-haruka/releases/latest)
- [全部发行版](https://github.com/slime7/droid-haruka/releases)
- [问题反馈](https://github.com/slime7/droid-haruka/issues)

## 发行构建

发行工作流从源码仓库检出代码并执行 `pnpm build:release`，同时生成桌面安装包与无 debug 标记的 release APK。
release APK 使用独立证书签名，证书与口令由以下仓库 Secrets 传入：

- `ANDROID_RELEASE_KEYSTORE_BASE64`
- `ANDROID_RELEASE_KEYSTORE_PASSWORD`
- `ANDROID_RELEASE_KEY_ALIAS`
- `ANDROID_RELEASE_KEY_PASSWORD`

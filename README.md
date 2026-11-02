# Droid Haruka

Droid Haruka 是一个面向 Windows 与 Linux 的 Android 投屏与多窗口桌面客户端。它把整块手机屏幕和每个应用分别变成桌面窗口，连接、设备管理、输入、通知、文件与剪贴板同步都在同一处完成。

[官网](https://slime7.github.io/droid-haruka/) · [下载最新版](https://github.com/slime7/droid-haruka/releases/latest) · [全部发行版](https://github.com/slime7/droid-haruka/releases) · [问题反馈](https://github.com/slime7/droid-haruka/issues)

## 功能

- 整屏镜像：画面、鼠标、键盘与音频同步，支持无边框窗口、横竖屏切换与窗口缩放
- 应用虚拟屏：在设备上创建虚拟显示器，每个应用拥有独立窗口与分辨率
- 输入与通知：键盘、快捷键和中文输入法转发，Android 通知同步到桌面
- 设备管理：保存设备、查看电量和连接方式，按应用启动镜像或虚拟屏
- 文件与剪贴板：拖放文件、双向剪贴板
- Windows 虚拟摄像头：把设备相机提供给会议、直播和扫码应用，需要 Windows 11 22H2 及以上

## 程序项目

本仓库包含 Droid Haruka 的官网与发行工作流。客户端由桌面端和设备端两个程序组成：

| 组件 | 说明 |
| --- | --- |
| 桌面客户端 | Windows 10 / 11 x64 与 Linux x64 应用，负责设备管理、镜像窗口、虚拟屏、输入转发、文件与剪贴板同步；Windows 版支持系统虚拟摄像头与开机启动 |
| 设备端采集器 | Android 11 及以上应用，负责画面采集、虚拟屏、通知、剪贴板与文件传输；首次连接时由桌面端安装，部分功能需要 Shizuku |

桌面端基于 Electron 与 Vue 3，使用 WebCodecs 解码设备画面；设备端使用 Kotlin 与 Jetpack Compose。发行包包含 Windows NSIS 安装包、Linux AppImage 与 tar.gz，以及可单独安装的 Android APK。

## 支持平台

| 平台 | 支持情况 |
| --- | --- |
| Windows 10 / 11 x64 | 完整桌面客户端；Windows 11 22H2 起支持系统虚拟摄像头 |
| Linux x64 | 整屏镜像、虚拟屏、设备管理与自动更新；不包含系统虚拟摄像头与开机启动 |
| Android 11 及以上 | 设备端采集器；Android 12 起支持摄像头采集，Android 13 起支持按应用音频隔离，Android 16 起支持桌面相机 |

macOS 不在支持范围内。

## 下载

安装包与 APK 统一发布在 [Releases](https://github.com/slime7/droid-haruka/releases)。桌面端首次连接设备时会自动安装设备端应用，也可以单独下载 APK 安装。发行包附带 `SHA256SUMS.txt` 校验文件。

问题和建议请提交到 [Issues](https://github.com/slime7/droid-haruka/issues)。

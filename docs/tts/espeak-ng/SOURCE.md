# 本机兼容朗读引擎

- 包：`@echogarden/espeak-ng-emscripten@0.3.5`，GPL-3.0；许可证见同目录 `COPYING`。
- 固定制品：https://registry.npmjs.org/@echogarden/espeak-ng-emscripten/-/espeak-ng-emscripten-0.3.5.tgz
- 包仓库：https://github.com/echogarden-project/espeak-ng-emscripten/tree/ea36b43595facf07f1c5dc487b9f0de3340c1b5e
- 引擎源码、词典与构建脚本（包作者指定的源码仓库）：https://github.com/echogarden-project/espeak-ng/tree/fork
- 上游项目：https://github.com/espeak-ng/espeak-ng
- `espeak-ng.source.js` 是 npm 制品中的原始 ESM 文件，`espeak-ng.data` 与 `COPYING` 原样保留。
- `espeak-ng.js` 通过项目已有的 esbuild 转为经典 Worker 可加载的格式，仅替换模块 URL 的定位方式；不手工编辑生成代码。

重新生成：在项目根目录执行 `node scripts/vendor-local-speech.mjs`。脚本校验固定包的 SHA-512 后生成资源，也可以传入已下载的同版本 `.tgz` 路径，离线重新生成。

运行时不使用 CDN：引擎与词典从本站按需加载（合计约 24MB，浏览器缓存行为取决于部署服务器），不将回答上传到语音服务，不提供付费语音接口。声音由设备本机合成，音色较机械。普通网站流量仍会消耗用户网络流量。

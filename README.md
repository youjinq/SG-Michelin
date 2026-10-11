# 狮城寻味 · SG Michelin

手机与电脑访问的新加坡米其林餐厅查询。按菜系、地区、评级和连续获评记录筛选。

## 开启 GitHub Pages

仓库 Settings → Pages → Source: Deploy from a branch → main → /docs → Save。

网址：https://youjinq.github.io/SG-Michelin/

## 发布新名单

电脑扩展先更新官网名单，再点击“更新 / 管理数据”里的“导出手机版数据”。

在 GitHub 的 docs 文件夹内，用 Add file → Upload files 上传导出的 public-data.json（保持这个文件名），提交更改。GitHub Pages 发布成功后，手机刷新即可。发布文件包含餐厅名单，不包含收藏和本地自选照片。

## 数据与限制

内置官方 2024–2026 完整名单。餐厅与照片来自 MICHELIN Guide；地区由 URA 规划区边界匹配。此项目是独立查询工具。

手机版照片通过米其林照片服务器加载，需要联网；收藏保存在各自浏览器。官网地址或结构变化可能需要调整电脑扩展。

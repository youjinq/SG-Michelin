# 狮城寻味 · 新加坡米其林餐厅查询

用手机或电脑找餐厅，按菜系、地区、星级和连续获评记录筛选。无需登录 ChatGPT。

## 忘记怎么用时，去哪看？

保存这个 README 页面，或点程序顶部的 **“使用与更新说明”**，就能随时回来查看。

## 手机怎么打开？

网址：**https://youjinq.github.io/SG-Michelin/**

用手机浏览器打开，保存到书签，或选择“添加到主屏幕”，以后就容易找到了。

首次发布要等 GitHub Pages 完成部署，网址才会生效。

## 怎么找餐厅？

1. 选年份。目前内置 **2024、2025、2026**。
2. 选菜系，例如 Western 或 Chinese。
3. 选大区和地区，例如 Central → Orchard。下方备注会解释每个大区大概是哪一带。
4. 想优先看长期获评的餐厅，选“连续记录”或“稳定优先”。
5. 点“历年评级记录”查看每年评级；点“地图”看地址；点爱心收藏。

“至少连续 3 年”表示目前核实了至少三年，更早未知的记录不会算成未获评。这个排序是本工具的选择规则，并非米其林官方排名。

## 以后出新名单，怎么更新？

分成两步：**电脑获取名单，再发布给手机。**

### 第一步：在电脑上更新

1. 从 Edge / Chrome 工具栏打开已安装的“狮城寻味”扩展。
2. 点“更新 / 管理数据”，填官网已公布的指南年份，再点“更新当前名单”。
3. 等待更新完成。若官网要求验证，自己完成后回程序点“继续更新”。
4. 点 **“导出手机版数据”**，下载 **public-data.json**。

例如 2027 官方完整名单公布后，把年份填成 2027。手机网页不能运行电脑扩展；从 .cmd 打开的本地网页也不能自动获取官网数据。

### 第二步：上传到这个仓库

1. 在 GitHub 打开本仓库，进入 **docs** 文件夹。
2. 点 **Add file → Upload files**。
3. 上传 **public-data.json**，替换里面的同名文件。
4. 点 **Commit changes** 保存。
5. 等 GitHub Pages 部署成功后，手机刷新网页，就能看到最新名单。

每次只需替换这个文件。**文件名必须是 public-data.json**；如果下载后变成 public-data (1).json，请先改回原名。

## 收藏会同步吗？

不会。手机和电脑的收藏分别保存在各自浏览器里。

- **导出手机版数据**：只导出餐厅资料，用来更新网站。
- **导出 JSON 备份**：含个人收藏，用来自己备份；请不要上传到公开仓库。
- 自选照片也留在本浏览器，不会随着名单发布。

清除浏览器数据、换电脑或卸载扩展前，建议先备份。

## 网页打不开或还是旧名单？

- 查看仓库的 **Actions**，确认 Pages 部署已成功。
- 到 **Settings → Pages**，确认来源为 **Deploy from a branch → main → /docs**。
- 部署完成后关闭手机页面，再重新打开。
- 手机照片从米其林照片服务器加载，需要联网。

官网改变网址或页面结构时，电脑更新可能失败。原有名单会保留，程序可能需要调整后才能继续获取。

## 数据来源

- [2024 官方完整名单 PDF](https://dgaddcosprod.blob.core.windows.net/cxf-corporate/attachments/clxvlxob91tsx15rs8w5yg2eq-20240625-pr-michelinguide-singapore-2024.pdf)
- [2025 官方完整名单](https://guide.michelin.com/kr/en/article/michelin-guide-ceremony/full-list-michelin-guide-sg-2025)
- [2026 官方完整名单](https://guide.michelin.com/sg/en/article/michelin-guide-ceremony/full-list-michelin-guide-sg-2026)
- [URA 地区边界](https://data.gov.sg/datasets?resultId=d_2cc750190544007400b2cfd5d7f53209)

餐厅照片来自 MICHELIN Guide。历史年份显示的地址和照片是最近获取的资料，并非当年的版本。本站是独立查询工具。

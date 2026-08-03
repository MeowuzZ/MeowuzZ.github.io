# 软件人的实践作品集

一个适合软件工程应届生与软件教培从业者的 GitHub 个人主页 Demo。它把个人信息、项目运行截图和 AI 精炼后的 README 摘要集中展示，并使用三列瀑布流容纳不同长度的项目内容。

## 修改个人信息

打开 `app/portfolio-data.ts`，修改文件最上方的 `profile`：

- `name`：你的名字
- `initials`：头像圆形中的两个字母
- `school`：你的学校
- `email`：你的邮箱
- `githubUrl`：你的 GitHub 地址
- `intro`：个人简介

统计数字在同一个文件的 `stats` 中，可按真实情况修改。

## 新增或修改项目

项目都在 `app/portfolio-data.ts` 的 `projects` 数组中。复制一个完整的项目对象并修改：

- `title`：项目名称
- `kind`：项目类型角标
- `thumbnail`：运行截图路径
- `summary`：AI 总结后的 README 项目摘要
- `highlights`：可选亮点列表；删除该字段，卡片会自动变短
- `tech`：技术栈标签
- `repoUrl`：GitHub 仓库地址
- `liveUrl`：可选在线体验地址

把新的 PNG、JPG 或 WebP 截图放进 `public/projects/`，然后把 `thumbnail` 改成 `/projects/文件名.png`。图片推荐使用 16:10 横图，页面会自动裁切并保持统一的预览比例。

卡片使用 CSS 三列瀑布流，不需要手工调整高度；平板会自动改为两列，手机会自动改为一列。

## 本地运行

```bash
pnpm install
pnpm run dev
```

打开终端中显示的本地地址即可预览。完成修改后运行 `pnpm run build` 检查页面。

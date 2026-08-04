# 个人主页实践作品集

## 修改个人信息

打开 `app/portfolio-data.ts`，修改文件最上方的 `profile`：

- `name`：你的名字
- `initials`：头像圆形中的两个字母
- `school`：你的学校
- `email`：你的邮箱
- `githubUrl`：你的 GitHub 地址
- `githubUsername`：用于自动读取公开仓库的 GitHub 用户名
- `hiddenRepositories`：不希望展示的仓库名称
- `intro`：个人简介

统计数字在同一个文件的 `stats` 中，可按真实情况修改。

## 新增或修改项目

项目都在 `app/portfolio-data.ts` 的 `projects` 数组中。复制一个完整的项目对象并修改：

- `title`：项目名称
- `kind`：项目类型角标
- `thumbnail`：运行截图路径
- `summary`： README 项目摘要
- `highlights`：可选亮点列表；删除该字段，卡片会自动变短
- `tech`：技术栈标签
- `repoUrl`：GitHub 仓库地址
- `liveUrl`：可选在线体验地址

把新的 PNG、JPG 或 WebP 截图放进 `public/projects/`，然后把 `thumbnail` 改成 `/projects/文件名.png`。图片推荐使用 16:10 横图，页面会自动裁切并保持统一的预览比例。

卡片使用 CSS 三列瀑布流，不需要手工调整高度；平板会自动改为两列，手机会自动改为一列。

## GitHub 自动联动

主页访问时会调用 GitHub 的公开仓库接口，并为尚未手动配置的仓库自动生成卡片：

- 新建公开仓库后，无需重新构建主页，刷新页面即可出现
- 卡片自动使用仓库名称、Description、语言、Topics、Stars 和主页链接
- Fork、归档仓库以及 `hiddenRepositories` 中的仓库不会显示
- 如果某仓库已写入 `projects`，手动配置优先，不会出现重复卡片
- 私有仓库不会被公开接口读取，也不会显示

建议为每个新仓库填写 GitHub Description、Topics 和 Homepage，它们会直接提升自动卡片的完整度。需要自定义项目截图或 AI 总结时，再把该仓库加入 `projects` 数组。

## 自动部署到 GitHub Pages

`.github/workflows/pages.yml` 会在 `main` 分支更新后构建静态版本并部署到 GitHub Pages。目标仓库为 `MeowuzZ/MeowuzZ.github.io`，部署成功后的地址是 `https://meowuzz.github.io/`。

## 本地运行

```bash
pnpm install
pnpm run dev
```

打开终端中显示的本地地址即可预览。完成修改后运行 `pnpm run build` 检查页面。

// 这是主页最常改的文件：个人信息、统计数字和项目卡片都集中在这里。
export const profile = {
  siteName: "MEOWU_2026",
  name: "Meowu",
  initials: "MW",
  school: "南京邮电大学",
  focus: "Android 开发",
  email: "18551047683@163.com",
  githubUrl: "https://github.com/MeowuzZ",
  availability: "实习 / 校招",
  intro:
    "南京邮电大学软件工程学生，同时也是软件教培从业者。偏爱把脑海里的点子亲手做成能跑起来的作品，专注 Android 开发与移动端实践。这里记录我的项目与成长轨迹，欢迎交流。",
};

export const stats = [
  { value: "06+", label: "完整项目" },
  { value: "12k+", label: "代码提交行" },
  { value: "180h", label: "实践时长" },
  { value: "∞", label: "持续学习" },
];

export type Project = {
  title: string;
  year: string;
  kind: string;
  accent: "orange" | "blue" | "acid";
  thumbnail: string;
  summary: string;
  highlights?: string[];
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
};

// 新增项目：复制一个 {...} 对象，修改字段，并把截图放进 public/projects/。
export const projects: Project[] = [
  {
    title: "知行 · Personal AI OS",
    year: "2026",
    kind: "ANDROID APPLICATION",
    accent: "orange",
    thumbnail: "/projects/personal-ai-os.jpg",
    summary:
      "一款面向个人日常使用的离线优先 Android 应用，将任务与日程、日记、长期目标、个人信息、AI 助手和每日复盘整合到统一的本地数据系统中。",
    highlights: ["支持日程、跨日期待办及紧急重要四象限管理", "提供日记月历、长期目标进度和每日复盘功能","数据保存在本地，支持JSON导出与操作撤销","通过GitHub Actions自动构建、签名并发布APK"],
    tech: ["Kotlin", "Jetpack Compose", "Material 3", "Android SDK","Gradle","GitHub Actions"],
    repoUrl: "https://github.com/MeowuzZ/Personal-AI-OS",
  }   //,记得逗号隔开
];

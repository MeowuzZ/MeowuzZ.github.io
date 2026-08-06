// 这是主页最常改的文件：个人信息、统计数字和项目卡片都集中在这里。
export const profile = {
  siteName: "DEVFOLIO_2026",
  name: " Meowu ",
  initials: "Hello",
  school: "南京邮电大学",
  focus: "软件开发",
  email: "18551047683@163.com",
  githubUrl: "https://github.com/MeowuzZ",
  availability: "OPEN TO WORK",
  intro:
    "不要掉头发T-T不要掉头发T-T不要掉头发T-T不要掉头发T-T不要掉头发T-T不要掉头发T-T不要掉头发T-T不要掉头发T-T不要掉头发T-T",
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
    thumbnail: "/projects/ai-interview.png",
    summary:
      "一款面向个人日常使用的离线优先 Android 应用，将任务与日程、日记、长期目标、个人信息、AI 助手和每日复盘整合到统一的本地数据系统中。",
    highlights: ["支持日程、跨日期待办及紧急重要四象限管理", "提供日记月历、长期目标进度和每日复盘功能","数据保存在本地，支持JSON导出与操作撤销","通过GitHub Actions自动构建、签名并发布APK"],
    tech: ["Kotlin", "Jetpack Compose", "Material 3", "Android SDK","Gradle","GitHub Actions"],
    repoUrl: "https://github.com/your-github-name/ai-interviewer",
    liveUrl: "https://example.com",
  }   //,记得逗号隔开
];

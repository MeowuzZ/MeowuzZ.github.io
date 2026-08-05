import { profile, projects, stats } from "./portfolio-data";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="返回首页">
          <span className="wordmark-dot" />
          {profile.siteName}
        </a>
        <nav aria-label="主导航">
          <a href="#about">关于我</a>
          <a href="#projects">项目</a>
          <a href={`mailto:${profile.email}`}>联系我</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE · EDUCATION · PRACTICE</p>
          <h1>
            你好，我是
            <br />
            <span>{profile.name}</span>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              查看我的项目 <Arrow />
            </a>
            <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">
              GitHub 主页 <Arrow />
            </a>
          </div>
        </div>

        <aside className="profile-panel" id="about" aria-label="个人资料">
          <div className="panel-topline">
            <span>PROFILE.CARD</span>
            <span>2026</span>
          </div>
          <div className="avatar-mark" aria-hidden="true">
            <span>{profile.initials}</span>
          </div>
          <dl>
            <div>
              <dt>学校</dt>
              <dd>{profile.school}</dd>
            </div>
            <div>
              <dt>方向</dt>
              <dd>{profile.focus}</dd>
            </div>
            <div>
              <dt>邮箱</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
          </dl>
          <div className="availability">
            <span className="pulse" /> {profile.availability}
          </div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="个人数据">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK </p>
            <h2>把学习结果，<br />做成看得见的作品。</h2>
          </div>
          <p>
            动手实现自己的每一个奇思妙想～
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card card-${project.accent}`} key={project.title}>
              <div className="project-image-wrap">
                <img src={project.thumbnail} alt={`${project.title} 项目运行预览`} />
                <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="project-kind">{project.kind}</span>
              </div>
              <div className="project-body">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span>{project.year}</span>
                </div>
                <p className="project-summary">{project.summary}</p>

                {project.highlights && (
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}

                <div className="tech-list" aria-label="技术栈">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    查看仓库 <Arrow />
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      在线体验 <Arrow />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))} 
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow">LET&apos;S BUILD SOMETHING USEFUL</p>
          <h2>愿意聊聊教学、代码，<br />以及如何把知识讲明白。</h2>
        </div>
        <a className="contact-button" href={`mailto:${profile.email}`}>
          <span>写封邮件给我</span>
          <strong><Arrow /></strong>
        </a>
      </section>

      <footer>
        <p>© 2026 {profile.name} · 用作品记录成长</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}

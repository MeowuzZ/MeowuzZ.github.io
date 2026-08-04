"use client";

import { useEffect, useMemo, useState } from "react";

type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  archived: boolean;
  language: string | null;
  topics: string[];
  homepage: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
};

type Props = {
  username: string;
  hiddenRepositories: string[];
  manualRepoUrls: string[];
};

const accents = ["blue", "acid", "orange"] as const;

function normalizeRepository(value: string) {
  return value
    .replace(/^https?:\/\/github\.com\//i, "")
    .replace(/\.git$/i, "")
    .replace(/\/$/, "")
    .toLowerCase();
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
  }).format(new Date(value));
}

export default function GitHubProjects({
  username,
  hiddenRepositories,
  manualRepoUrls,
}: Props) {
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

  const exclusions = useMemo(() => {
    const hidden = hiddenRepositories.map((name) => name.toLowerCase());
    const manual = manualRepoUrls.map(normalizeRepository);
    return new Set([...hidden, ...manual]);
  }, [hiddenRepositories, manualRepoUrls]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${encodeURIComponent(username)}/repos?type=owner&sort=created&direction=desc&per_page=100`,
          {
            headers: {
              Accept: "application/vnd.github+json",
              "X-GitHub-Api-Version": "2022-11-28",
            },
            cache: "no-store",
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`GitHub request failed: ${response.status}`);
        }

        const data = (await response.json()) as GitHubRepo[];
        const visible = data.filter((repo) => {
          const fullName = repo.full_name.toLowerCase();
          const shortName = repo.name.toLowerCase();
          return (
            !repo.fork &&
            !repo.archived &&
            !exclusions.has(fullName) &&
            !exclusions.has(shortName)
          );
        });

        setRepositories(visible);
        setStatus("ready");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setStatus("error");
      }
    }

    loadRepositories();
    return () => controller.abort();
  }, [exclusions, username]);

  if (status === "loading") {
    return (
      <article className="github-message-card" aria-live="polite">
        <span className="sync-loader" />
        <p>正在读取 @{username} 的公开仓库…</p>
      </article>
    );
  }

  if (status === "error") {
    return (
      <article className="github-message-card github-message-error" role="status">
        <strong>GitHub 暂时未响应</strong>
        <p>精选项目仍可正常浏览，自动仓库会在下次访问时重新加载。</p>
      </article>
    );
  }

  if (repositories.length === 0) {
    return (
      <article className="github-message-card" aria-live="polite">
        <span className="sync-check">✓</span>
        <strong>GitHub 已连接</strong>
        <p>创建新的公开仓库后，它会自动出现在这里。</p>
      </article>
    );
  }

  return repositories.map((repo, index) => {
    const accent = accents[index % accents.length];
    const tech = [repo.language, ...repo.topics].filter(Boolean).slice(0, 4) as string[];
    const imageKey = encodeURIComponent(repo.pushed_at || repo.updated_at);

    return (
      <article className={`project-card auto-project-card card-${accent}`} key={repo.id}>
        <div className="project-image-wrap">
          <img
            src={`https://opengraph.githubassets.com/${imageKey}/${repo.full_name}`}
            alt={`${repo.name} GitHub 仓库预览`}
            onError={(event) => {
              event.currentTarget.src = "/projects/code-cards.png";
            }}
          />
          <span className="project-number">AUTO</span>
          <span className="project-kind">{repo.language?.toUpperCase() ?? "GITHUB REPO"}</span>
        </div>
        <div className="project-body">
          <div className="project-title-row">
            <h3>{repo.name}</h3>
            <span>{new Date(repo.created_at).getUTCFullYear()}</span>
          </div>
          <p className="project-summary">
            {repo.description ?? "这个仓库暂未填写简介。添加 GitHub Description 后，主页会自动同步显示。"}
          </p>
          <div className="repo-metrics" aria-label="仓库数据">
            <span>★ {repo.stargazers_count}</span>
            <span>⑂ {repo.forks_count}</span>
            <span>更新于 {formatDate(repo.pushed_at)}</span>
          </div>
          <div className="tech-list" aria-label="技术栈">
            {(tech.length ? tech : ["GitHub"]).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              查看仓库 <span aria-hidden="true">↗</span>
            </a>
            {repo.homepage && (
              <a href={repo.homepage} target="_blank" rel="noreferrer">
                在线体验 <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </article>
    );
  });
}

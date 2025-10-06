type Props = {
  title: string;
  summary: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export default function ProjectCard({ title, summary, tags, repo, demo }: Props) {
  return (
    <article className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 hover:shadow-sm transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{summary}</p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex gap-4 text-sm">
        {repo && (
          <a className="underline" href={repo} target="_blank" rel="noopener">
            Repo
          </a>
        )}
        {demo && (
          <a className="underline" href={demo} target="_blank" rel="noopener">
            Live
          </a>
        )}
      </div>
    </article>
  );
}

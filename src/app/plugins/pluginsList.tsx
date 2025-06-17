"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./page.module.css";
import { GithubIcon } from "../icons/githubIcon";
import type { Plugin } from "../../types/plugin";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";

const PAGE_SIZE = 9;

const PluginsList = ({ plugins }: { plugins: Plugin[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = React.useState("");

  // Sync search state with URL
  React.useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    setSearch(urlSearch);
  }, [searchParams]);

  const pageFromUrl = parseInt(searchParams.get("page") || "1", 10);
  const [page, setPage] = React.useState(pageFromUrl);

  React.useEffect(() => {
    setPage(pageFromUrl);
  }, [pageFromUrl]);

  const handlePageChange = (n: number) => {
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    params.set("page", n.toString());
    params.set("search", search);

    router.push(`?${params.toString()}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    const params = new URLSearchParams(Array.from(searchParams.entries()));

    params.set("search", value);
    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  const filtered = plugins.filter(
    (plugin) =>
      plugin.meta.name?.toLowerCase().includes(search.toLowerCase()) ||
      plugin.meta.description?.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div style={{ width: "100%" }}>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search plugins..."
          value={search}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      {paged.length === 0 ? (
        <>
          <div className={styles.noItem}>No plugins found.</div>
        </>
      ) : (
        <>
          <ul className={styles.pluginList}>
            {paged.map((plugin) => (
              <li key={plugin.meta.id} className={styles.pluginItem}>
                <div>
                  <Link
                    href={`/plugin/${plugin.meta.id}`}
                    className={styles.pluginLink}
                  >
                    <h2>
                      {plugin.meta.name}{" "}
                      <small className={styles.pluginVersion}>
                        v{plugin.meta.version}
                      </small>
                    </h2>
                  </Link>
                  <p>{plugin.meta.description}</p>
                </div>
                <div className={styles.pluginActions}>
                  <CopyButton link={plugin.link} />
                  <a
                    href={plugin.meta.repositoryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open repository"
                  >
                    <GithubIcon size={25} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.pagination}>
            <button
              className={styles.arrowButton}
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => handlePageChange(n)}
                disabled={n === page}
                className={`${styles.pageButton}${
                  n === page ? " " + styles.active : ""
                }`}
              >
                {n}
              </button>
            ))}
            <button
              className={styles.arrowButton}
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages || totalPages === 0}
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PluginsList;

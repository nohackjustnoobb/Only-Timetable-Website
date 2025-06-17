import fs from "fs/promises";
import path from "path";
import type { Plugin } from "../../../types/plugin";
import React from "react";
import styles from "./page.module.css";
import { CopyButton } from "../../../components/CopyButton";

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), "public", "plugins.json");
  const file = await fs.readFile(filePath, "utf-8");

  const pluginsData: Record<string, Plugin> = JSON.parse(file);

  return Object.values(pluginsData).map((plugin) => ({
    id: plugin.meta.id,
  }));
}

async function getPluginById(id: string): Promise<Plugin | null> {
  const filePath = path.join(process.cwd(), "public", "plugins.json");
  const file = await fs.readFile(filePath, "utf-8");

  const pluginsData: Record<string, Plugin> = JSON.parse(file);

  return pluginsData[id] ?? null;
}

export default async function PluginPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const plugin = (await getPluginById(id))!;

  const allProps = {
    ...plugin,
    ...plugin.meta,
  };

  const displayProps = Object.entries(allProps).filter(
    ([key]) => key !== "meta"
  );

  return (
    <main className={styles.pluginPageContainer}>
      <h1>{plugin.meta.name || plugin.meta.id}</h1>
      <div className={styles.infoBox}>
        {displayProps.map(([key, value]) => {
          const formattedKey = key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase());

          if (key === "link") return null;

          if (value) {
            const isLink =
              typeof value === "string" &&
              /^(https?:\/\/|www\.)[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(value);
            return (
              <p key={key}>
                <strong>{formattedKey}:</strong>{" "}
                {isLink ? (
                  <a
                    href={value as string}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {value}
                  </a>
                ) : (
                  String(value)
                )}
              </p>
            );
          }

          return null;
        })}
      </div>
      <div>
        <CopyButton link={plugin.link} />
      </div>
    </main>
  );
}

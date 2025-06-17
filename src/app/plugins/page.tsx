import fs from "fs/promises";
import path from "path";
import React, { Suspense } from "react";
import PluginsList from "./pluginsList";
import styles from "./page.module.css";
import type { Plugin } from "../../types/plugin";

async function getPlugins() {
  const filePath = path.join(process.cwd(), "public", "plugins.json");
  const file = await fs.readFile(filePath, "utf-8");
  return JSON.parse(file);
}

export default async function PluginsPage() {
  const pluginsData = await getPlugins();
  const plugins: Plugin[] = Object.values(pluginsData);

  return (
    <main className={styles.pluginsPageContainer}>
      <h1>Available Plugins</h1>
      <Suspense fallback={<div>Loading plugins...</div>}>
        <PluginsList plugins={plugins} />
      </Suspense>
    </main>
  );
}

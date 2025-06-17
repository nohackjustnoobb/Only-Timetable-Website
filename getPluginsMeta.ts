import fs from "fs";
import path from "path";

const pluginsPath = path.join(__dirname, "plugins.json");

function getPluginLinks(): string[] {
  const data = fs.readFileSync(pluginsPath, "utf-8");
  const plugins = JSON.parse(data);
  return plugins;
}

interface PluginMeta {
  id: string;
  name?: string;
  author?: string;
  version?: string;
  description?: string;
  repositoryUrl?: string;
}

async function fetchJson(
  url: string
): Promise<PluginMeta & { [key: string]: unknown }> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
  return res.json();
}

async function getPluginsMeta() {
  const pluginLinks = getPluginLinks();
  const pluginsMeta: Record<
    string,
    {
      link: string;
      meta: PluginMeta;
    }
  > = {};

  for (const link of pluginLinks) {
    const pluginData = await fetchJson(link);
    const { id, name, author, version, description, repositoryUrl } =
      pluginData;

    if (!id)
      throw new Error(
        `Plugin data missing 'id' field: ${JSON.stringify(pluginData)}`
      );

    if (pluginsMeta[id]) throw new Error(`Duplicate plugin ID found: ${id}`);

    pluginsMeta[id] = {
      link,
      meta: { id, name, author, version, description, repositoryUrl },
    };
  }

  return pluginsMeta;
}

async function savePluginsMetaToFile() {
  const pluginsMeta = await getPluginsMeta();
  const outputPath = path.join(__dirname, "public", "plugins.json");
  fs.writeFileSync(outputPath, JSON.stringify(pluginsMeta, null, 2), "utf-8");
  return outputPath;
}

savePluginsMetaToFile();

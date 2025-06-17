export type Plugin = {
  link: string;
  meta: {
    id: string;
    name?: string;
    author?: string;
    version?: string;
    description?: string;
    repositoryUrl?: string;
  };
};

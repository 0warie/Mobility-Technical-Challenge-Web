export type Configuration = {
  api: string;
};

export type Environment = (typeof ENVIRONMENTS)[number];

export const ENVIRONMENTS = ['local'] as const;

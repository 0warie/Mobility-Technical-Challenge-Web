import { config as baseConfig } from './base-config';
import { config as local } from './local';
import type { Configuration, Environment } from './types';

import merge from 'deepmerge';

const configurations: Record<Environment, Partial<Configuration>> = {
  local,
};

Object.entries(configurations).forEach(([key, config]) => {
  const enrichedConfig = merge(baseConfig, config);

  configurations[key as Environment] = enrichedConfig;
});

export default configurations as Record<Environment, Configuration>;

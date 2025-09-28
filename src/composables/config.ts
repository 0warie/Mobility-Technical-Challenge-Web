import configurations from '@/config';

export const useConfig = () => {
  //* Just returns local for now;
  return configurations['local'];
};

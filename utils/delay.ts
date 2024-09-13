export const Delay = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

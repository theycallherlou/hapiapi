const calculateDateRange = (): {
  startDate: number;
  endDate: number;
} => {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const startDate = Math.floor(sevenDaysAgo.getTime() / 1000);
  const endDate = Math.floor(now.getTime() / 1000);

  return { startDate, endDate };
};

export { calculateDateRange };

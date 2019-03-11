module.exports = async (root, _, { api }) => {
  const jobs = await api.find('jobs');
  if (!jobs) throw new Error('jobs not found');
  return jobs;
};

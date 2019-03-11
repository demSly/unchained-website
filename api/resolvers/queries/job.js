module.exports = async (root, { slug }, { api }) => {
  console.log(slug);
  const job = await api.findOne('jobs', slug, 'title_slug');
  if (!job) throw new Error('job not found');
  return job;
};

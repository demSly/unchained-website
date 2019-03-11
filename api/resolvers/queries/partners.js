module.exports = async (root, _, { api }) => {
  const partners = await api.find('partners');
  if (!partners) throw new Error('partners not found');
  return partners;
};

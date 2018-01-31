module.exports = async (root, _, { api }) => {
  const members = await api.find('member');
  if (!members) throw new Error('members not found');
  return members;
};

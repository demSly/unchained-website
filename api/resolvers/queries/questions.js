module.exports = async (root, _, { api }) => {
  const questions = await api.find('questions');
  if (!questions) throw new Error('questions not found');
  return questions;
};

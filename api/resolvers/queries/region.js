module.exports = async (root, { regionId }, { api }) => {
  const region = await api.getRegionData(regionId);
  if (!region) throw new Error('region not found');
  return region;
};

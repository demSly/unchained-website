import { withProps } from 'recompose';

const removeNull = (obj) => {
  // uniforms does not accept null values in a model,
  // but graphql always sends null
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val && typeof val === 'object') {
      newObj[key] = removeNull(val);
    } else if (val !== null) {
      newObj[key] = val;
    }
  });
  return newObj;
};

export default mapFn => withProps((props) => {
  const mapped = mapFn(props);
  const model = removeNull(mapped);
  return { model };
});

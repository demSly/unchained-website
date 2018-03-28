import { lifecycle } from 'recompose';
import { initGA, logPageView } from './analytics';

export default lifecycle({
  componentDidMount() {
    if (!window.gaGlobal) {
      initGA();
    }
    logPageView();
  },
});

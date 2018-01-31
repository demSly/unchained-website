import ReactGA from 'react-ga';
import env from './env';

export const initGA = () => {
  console.info('GA init'); // eslint-disable-line
  if (!env.TRACKING_CODE) return;
  ReactGA.initialize(env.TRACKING_CODE);
};

export const logPageView = () => {
  if (!env.TRACKING_CODE) return;
  console.info(`Logging pageview for ${window.location.pathname}`); // eslint-disable-line
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

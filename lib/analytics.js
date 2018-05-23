import ReactGA from 'react-ga';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const initGA = () => {
  if (!publicRuntimeConfig.TRACKING_CODE) return;
  console.info('GA init'); // eslint-disable-line
  ReactGA.initialize(publicRuntimeConfig.TRACKING_CODE, {
    gaOptions: {
      anonymizeIp: true,
    },
  });
};

export const logPageView = () => {
  if (!publicRuntimeConfig.TRACKING_CODE) return;
  console.info(`Logging pageview for ${window.location.pathname}`); // eslint-disable-line
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (!publicRuntimeConfig.TRACKING_CODE) return;
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (!publicRuntimeConfig.TRACKING_CODE) return;
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

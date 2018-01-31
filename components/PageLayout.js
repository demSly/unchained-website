import React from 'react';
import PropTypes from 'prop-types';
import { compose, withContext, withState, withHandlers } from 'recompose';
import Header from './Header';
import Layout from './Layout';
import Footer from './Footer';

const PageLayout = ({
  children, isMenuToggled, className, ...props
}) => (
  <Layout className={`${isMenuToggled ? 'menu-open' : ''} ${className || ''}`} {...props}>
    <Header />
    <div className="site-content">
      {children}
    </div>
    <Footer />
  </Layout>
);

export default compose(
  withState('isMenuToggled', 'setMenuToggled', false),
  withState('isCartToggled', 'setCartToggled', false),
  withState('isAccountToggled', 'setAccountToggled', false),
  withHandlers({
    toggleMenu: ({
      isMenuToggled, setCartToggled, setAccountToggled, setMenuToggled,
    }) => () => {
      if (!isMenuToggled) {
        setCartToggled(false);
        setAccountToggled(false);
      }
      setMenuToggled(!isMenuToggled);
    },
    toggleCart: ({
      isCartToggled, setCartToggled, setAccountToggled, setMenuToggled,
    }) => () => {
      if (!isCartToggled) {
        setAccountToggled(false);
        setMenuToggled(false);
      }
      setCartToggled(!isCartToggled);
    },
    toggleAccount: ({
      isAccountToggled, setAccountToggled, setMenuToggled, setCartToggled,
    }) => () => {
      if (!isAccountToggled) {
        setCartToggled(false);
        setMenuToggled(false);
      }
      setAccountToggled(!isAccountToggled);
    },
  }),
  withContext({
    isMenuToggled: PropTypes.bool,
    isCartToggled: PropTypes.bool,
    isAccountToggled: PropTypes.bool,
    toggleMenu: PropTypes.func,
    toggleCart: PropTypes.func,
    toggleAccount: PropTypes.func,
  }, ({
    isMenuToggled, isCartToggled,
    isAccountToggled, toggleMenu, toggleCart, toggleAccount,
  }) => ({
    isMenuToggled,
    isCartToggled,
    isAccountToggled,
    toggleAccount,
    toggleMenu,
    toggleCart,
  })),
)(PageLayout);

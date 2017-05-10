import React from 'react';
import ReactDOM from 'react-dom';
import AppTable from './shared/AppTable';
import '../www/assets/css/fixed-data-table';

/**
 * Inject specific component per page
 */
const pages = {
  'home-page': {
    component: <AppTable />,
    container: 'app-table'
  }
};

Object.keys(pages).forEach((pageClass) => {
  if (document.getElementsByClassName(pageClass).length) {
    ReactDOM.render(
      pages[pageClass].component,
      document.getElementById(pages[pageClass].container)
    );

    return;
  }
});


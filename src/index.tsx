import * as React from 'react';
import { render } from 'react-dom';
import { init, FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';
import App from './app/app';

init((sdk) => {
  render(<App sdk={sdk as FieldExtensionSDK} />, document.getElementById('root'));
});

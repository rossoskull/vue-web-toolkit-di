/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'

// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';

const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
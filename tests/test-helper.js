import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import './helpers/qunit-assert-helpers'


setApplication(Application.create(config.APP));

start();

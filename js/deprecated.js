import Adapt from 'core/js/adapt';
import logging from 'core/js/logging';
import mpabc from 'core/js/mpabc';

Object.defineProperties(Adapt, {
  mpabc: {
    get() {
      logging.deprecated('Adapt.mpabc, please use core/js/mpabc directly');
      return mpabc;
    }
  }
});

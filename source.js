const curryLimitCore = require('fup-curry-limit-core');

const curryCore = (executor, ...parameters) => {
  const limit = executor.length;
  return parameters.length < limit
    ? Object.defineProperty((...nextParameters) => curryLimitCore(limit, executor, ...parameters, ...nextParameters), 'length', {
      enumerable   : false,
      configurable : false,
      writable     : false,
      value        : limit - parameters.length
    })
    : executor(...parameters);
};

module.exports = curryCore;
const curryLimitCore = require('fup-curry-limit-core');

const curryCore = (executor, ...parameters) => {
  const limit = executor.length;
  return limit < parameters.length
    ? (...nextParameters) => curryLimitCore(limit, ...parameters, ...nextParameters)
    : executor(...parameters);
};

module.exports = curryCore;

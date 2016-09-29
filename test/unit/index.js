const testsContext = require.context('./specs', true, /\.spec$/);
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);

testsContext.keys().forEach(testsContext);
srcContext.keys().forEach(srcContext);

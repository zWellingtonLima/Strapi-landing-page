const rootDir = 'E:/Programação/Udemy/Curso React e NextJS/Strapi-landing-page-front'

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: [`${rootDir}/.jest/setup.tests.js`],
  moduleNameMapper: {
    '//.(git|ttf|eot|svg|png)$':`${rootDir}.jest/mocks/fileMock.js`,
    '//.(gif|less|sass|scss)$': 'identity-obj-proxy',
  },
}
const devConfig = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/makeanodejsapi-dev',
  JWT_SECRET: 'thisisasecret',
};

const testConfig = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/makeanodejsapi-test',
};

const prodConfig = {
  MONGO_URL: 'mongodb://127.0.0.1:27017/makeanodejsapi-prod',
};

const defaultConfig = {
  PORT: process.env.PORT || 6000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};

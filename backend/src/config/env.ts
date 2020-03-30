
const envName = process.env.NODE_ENV as string;

export default {
  name: envName,
  isDevelopment: () => !envName || envName === 'development',
  isProduction: () => envName === 'production',
  isTesting: () => envName === 'test',
}

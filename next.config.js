/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

}
module.exports = (phase, {defaultConfig}) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig['sassOptions'] = {
      includePaths: ['./src'],
      prependData: `@import "~@styles/variables.scss";`,
    }
  }
  return defaultConfig;
}
module.exports = nextConfig

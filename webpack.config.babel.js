import path from 'path';

const ENV_DEV = 'development';
const env = process.env.NODE_ENV || ENV_DEV;
const isDev = env === ENV_DEV;

console.log(`Webpack running in ${env}`);

export default {
  watch: isDev,
  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
    example: path.join(__dirname, 'example', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [/src/]
      }
    ]
  }
};

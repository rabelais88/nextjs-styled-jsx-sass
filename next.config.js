module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.scss$|\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            // type: "scoped"
            type: "global"
          }
        },
        "sass-loader"
      ]
    });

    return config;
  }
};

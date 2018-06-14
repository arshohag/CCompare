import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';

export default (
  head: Object,
  assets: Object,
  htmlContent: string,
  initialState: Object,
  loadableStateTag: string
): string => {
  // Use pre-defined assets in development. "main" is the default webpack generated name.
  const envAssets = __DEV__
    ? { js: '/assets/main.js', css: '/assets/main.css' }
    : assets;

  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" href="/favicon.ico">

        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
        <!-- Import Google Icon Font -->
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Import materialize.css -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
        <link href="/lib/scss/style.css" media="screen, projection" rel="stylesheet" type="text/css">
         <link href="/lib/scss/grid/ag-grid.css" media="screen, projection" rel="stylesheet" type="text/css">
        <link href="/lib/scss/grid/ag-theme-balham.css" media="screen, projection" rel="stylesheet" type="text/css">
        <link href="/lib/scss/grid/RichGridDeclarativeExample.css" media="screen, projection" rel="stylesheet" type="text/css">
        <link href="/lib/scss/grid/style-grid.css" media="screen, projection" rel="stylesheet" type="text/css">
        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        <!-- Insert bundled styles into <link> tag -->
        ${Object.keys(envAssets)
          .map(
            key =>
              key.substr(key.length - 3) === 'css'
                ? `<link href="${
                    envAssets[key]
                  }" media="screen, projection" rel="stylesheet" type="text/css">`
                : ''
          )
          .join('')}

      </head>
      <body>
        <!-- Insert the router, which passed from server-side -->
        <div id="react-view">${htmlContent}</div>

        <!-- Insert loadableState's script tag into page (loadable-components setup) -->
        ${loadableStateTag}

        <!-- Store the initial state into window -->
        <script>
          // Use serialize-javascript for mitigating XSS attacks. See the following security issues:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__INITIAL_STATE__=${serialize(initialState)};
        </script>

        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="/lib/js/custom.js"></script>
        <script src="https://use.fontawesome.com/b22bfa1e2e.js"></script>
        <!-- Insert bundled scripts into <script> tag -->
        ${Object.keys(envAssets)
          .map(
            key =>
              key.substr(key.length - 2) === 'js'
                ? `<script src="${envAssets[key]}"></script>`
                : ''
          )
          .join('')}

        ${head.script.toString()}

      </body>
    </html>
  `;

  // html-minifier configuration, refer to "https://github.com/kangax/html-minifier" for more configuration
  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
  };

  // Minify html in production
  return __DEV__ ? html : minify(html, minifyConfig);
};

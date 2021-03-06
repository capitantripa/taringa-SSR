import React from 'react';

const Markup = (props) => {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="icon" type="image/png" href="http://example.com/myicon.png" />
        <meta charSet="utf-8" />
        <base href="http://localhost:3001" />
        <link rel="stylesheet" type="text/css" href="/public/style.css" />
        <title>server side render</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body>
        <div dangerouslySetInnerHTML={{__html: props.content}} id="render_target"></div>
        <script dangerouslySetInnerHTML={{__html: `window.__PRELOADED__STATE__=${JSON.stringify(props.preloaded_state)}`}}></script>
        <script src="/public/app.js" />
      </body>
    </html>
  )
}


export default Markup;

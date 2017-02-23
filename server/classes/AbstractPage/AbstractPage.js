const isDeveloping = process.env.NODE_ENV !== 'production';

function AbstractPage(pageConfig = {}) {
    return `
        <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>react-kickstart</title>
                <meta name="description" content="just another react + webpack boilerplate">
                <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body>
                <div id="root"></div>
                <script type="text/javascript">
                    window.__DEV__ = ${isDeveloping};
                    window.pageConfig = JSON.parse('${JSON.stringify(pageConfig)}');
                </script>
                <script type="text/javascript" src="/bundle.js"></script>
            </body>
        </html>
    `;
}

export default AbstractPage;

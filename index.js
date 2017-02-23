import express from 'express';
import webpack from 'webpack';
import redis from 'redis';
import bodyParser from 'body-parser';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import session from 'express-session';
import connectRedis from 'connect-redis';
import config from './webpack.config';
const client = redis.createClient();

import Routers from './server/Api/Routers';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const redisStore = connectRedis(session);

if (isDeveloping) {
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
} else {
    app.use(express.static(__dirname + '/dist'));
}

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'i love my books',
    resave: false,
    saveUninitialized: false,
    store:  new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
}));

app.use(Routers);

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

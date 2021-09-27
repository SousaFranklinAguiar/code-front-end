const PROXY_CONFIG = [
    {
        context:['/api'],
        target: 'https://categorias-teste.herokuapp.com',
        secure: true,
        logLevel: 'debug',
        pathRewrite: {'^/api' : ''} ,
        changeOrigin: true
    }  
];
module.exports = PROXY_CONFIG;
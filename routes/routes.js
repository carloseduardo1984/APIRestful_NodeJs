// import other routes
const userRoutes = require('./users');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('Bem vindo ao exemplo de api-server');
    });

    // // other routes
    userRoutes(app, fs);

};

module.exports = appRouter;
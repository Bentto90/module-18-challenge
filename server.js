const express = require ('express');
const db = require ('./config/connection');
const routes = require ('./routes');

const app = express ();
const PORT = process.env.PORT || 3001;

// Middleware
app.use (express.urlencoded ({extended: true}));
app.use (express.json ());
app.use (routes);


// Start server
db.once ('open', () => {
    app.listen (PORT, () => {
        console.log (`API server running on port ${PORT}!`);
    });
    }
);

// Path: routes/server.js
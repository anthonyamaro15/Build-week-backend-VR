const express = require("express");
const helmet = require("helmet");

const authInvestor = require("../authRoutes/authInvestor");
const authEntrepeneur = require("../authRoutes/authEntrepeneur");

// const investorRestricted = require('../middlewares/investor-restricted');
// const entrepeneurRestricted = require('../middlewares/entrepeneur-restricted');

// we just need to bring entrepeneurs Routes/ investors Routes and add the restricted middleware.

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/auth/investor", authInvestor);
server.use("/api/auth/entrepeneur", authEntrepeneur);

module.exports = server;

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Investor = require("../models/investor-model");

// INVESTORS ROUTES

const route = express.Router();

// POST  /api/auth/register
route.post("/register", (req, res) => {});

// POST  /api/auth/login
route.post("/login", (req, res) => {});

module.exports = route;

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate_middleware.js');
const authRouter = require('../auth/auth_router.js');
const campaignsRouter = require('../campaigns/campaign_router.js');
const reviewsRouter = require('../reviews/reviews_router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/campaigns', authenticate, campaignsRouter);
server.use('/api/reviews', authenticate, reviewsRouter);

module.exports = server;
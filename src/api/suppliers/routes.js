const router = require('express').Router();
const controller = require('./controller');
const _ = require('underscore');
/*
 * /api/suppliers/ POST - CREATE
 * /api/suppliers/ GET - READ ALL
 * /api/suppliers/:id DELETE - DELETE
 */

router.route('/')
  .post(controller.create)
  .get(controller.all);

router.delete('/:id',controller.delete );

module.exports = router;

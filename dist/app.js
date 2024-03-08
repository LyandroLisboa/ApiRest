"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _homeRotes = require('./routes/homeRotes'); var _homeRotes2 = _interopRequireDefault(_homeRotes);
var _tokenRotes = require('./routes/tokenRotes'); var _tokenRotes2 = _interopRequireDefault(_tokenRotes);
var _AlunoRotes = require('./routes/AlunoRotes'); var _AlunoRotes2 = _interopRequireDefault(_AlunoRotes);
var _userRotes = require('./routes/userRotes'); var _userRotes2 = _interopRequireDefault(_userRotes);
var _photoRotes = require('./routes/photoRotes'); var _photoRotes2 = _interopRequireDefault(_photoRotes);

_dotenv2.default.config();

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _homeRotes2.default);
    this.app.use('/users/', _userRotes2.default);
    this.app.use('/tokens/', _tokenRotes2.default);
    this.app.use('/alunos/', _AlunoRotes2.default);
    this.app.use('/photograph/', _photoRotes2.default);
  }
}

exports. default = new App().app;

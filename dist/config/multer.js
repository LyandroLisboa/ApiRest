"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const rdm = Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('arquivo precisa ser jpeg ou png'));
    }

    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads/images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${rdm}${_path.extname.call(void 0, file.originalname)}`);

      // Data de hoje em millisegundos
      // calculo randomico de 10 / 20 mil
      // mantem o nome original pos o ponto ex >>.jpg .png ...<<
    },
  }),
};

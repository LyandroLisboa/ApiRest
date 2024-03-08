import multer from 'multer';
import { extname, resolve } from 'path';

const rdm = Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('arquivo precisa ser jpeg ou png'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads/images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${rdm}${extname(file.originalname)}`);

      // Data de hoje em millisegundos
      // calculo randomico de 10 / 20 mil
      // mantem o nome original pos o ponto ex >>.jpg .png ...<<
    },
  }),
};

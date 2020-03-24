import {NextApiResponse, NextApiRequest} from 'next';
// import {Message} from "../../../index";
// import multer from 'multer';
import {createWriteStream} from "fs";

// const handleError = (err, res) => {
//   res
//       .status(500)
//       .contentType("text/plain")
//       .end("Oops! Something went wrong!");
// };


// const upload = multer({
//   dest: '/public/images/coursePicture',
// } as multer.Options);

// function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: multer.Options) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // for the pipe to work, we need to disable "bodyParser" (see below)
  req.pipe(createWriteStream('./public/images/coursePicture/test.jpg'));
  res.statusCode = 200;
  res.end();
};
export const config = {
  api: {
    bodyParser: false,
  },
};
  // await runMiddleware(req, res, upload.single('file'));

// const tempPath = req.file.path;
// const targetPath = path.join(__dirname, "./uploads/image.png");

// if (path.extname(req.file.originalname).toLowerCase() === ".png") {
//   fs.rename(tempPath, targetPath, (err) => {
//     if (err) return handleError(err, res);

//     res
//         .status(200)
//         .contentType("text/plain")
//         .end("File uploaded!");
//   });
// } else {
//   fs.unlink(tempPath, (err) => {
//     if (err) return handleError(err, res);

//     res
//         .status(403)
//         .contentType("text/plain")
//         .end("Only .png files are allowed!");
//   });
// }

// console.log('I AM HERE');
// console.log(req.body);


// import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};


// export default async (req: any, res: any) => {
//   const form = new formidable.IncomingForm();
//   form.uploadDir = './public/images/coursePicture';
//   form.maxFileSize = 2;
//   form.on('file', (filename, file) => {
//     console.log(file.path);
//     // form.emit('data', {name: 'file', key: filename, value: file});
//   });
//   // form.parse(req, function(err, fields, files) {
//   //   // console.log(files[0]);
//   //   res.end();
//   // });
// };



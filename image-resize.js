const path = require('path');
const gm = require('gm');

function resizeImage(fileName, hieght, width) {

  console.log(__dirname);
  let originalFilePath = path.resolve(__dirname, `${fileName}`);

  let outputFilePath = path.resolve(__dirname, `${hieght}_${width}_${fileName}`);

  return new Promise((resolve, reject) => {
    gm(originalFilePath)
      .resize(hieght, width)
      .write(outputFilePath, function (err) {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          resolve(outputFilePath);
        }
      });
  });
}


resizeImage('car_image.jpg', 200, 200)

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');
const initialContent = 'Hello Node.js';
const updatedContent = 'Hello Node.js\nLearning FS Module';

console.log('Creating File...');

fs.writeFile(filePath, initialContent, (writeError) => {
  if (writeError) {
    console.log(`Error creating file: ${writeError.message}`);
    return;
  }

  console.log('File Created');
  console.log('Reading File...');

  fs.readFile(filePath, 'utf8', (readError, data) => {
    if (readError) {
      console.log(`Error reading file: ${readError.message}`);
      return;
    }

    console.log(data);
    console.log('Updating File...');

    fs.appendFile(filePath, '\nLearning FS Module', (appendError) => {
      if (appendError) {
        console.log(`Error updating file: ${appendError.message}`);
        return;
      }

      fs.readFile(filePath, 'utf8', (updatedReadError, updatedData) => {
        if (updatedReadError) {
          console.log(`Error reading updated file: ${updatedReadError.message}`);
          return;
        }

        console.log(updatedData);
        console.log('File Updated');
        console.log('Deleting File...');

        fs.unlink(filePath, (deleteError) => {
          if (deleteError) {
            console.log(`Error deleting file: ${deleteError.message}`);
            return;
          }

          console.log('File Deleted');
        });
      });
    });
  });
});

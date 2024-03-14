const readline = require('readline');
const { exec } = require('child_process');

require('dotenv').config(); // Load environment variables from .env file
const MONGODB_ATLAS_CONNECTION_STRING =
  process.env.MONGODB_ATLAS_CONNECTION_STRING.replace(
    '/?retryWrites=true&w=majority',
    ''
  );

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  'Press 1 to import to db. Press 2 to export from db: ',
  (choice) => {
    if (choice === '1') {
      const importCommand = `mongoimport --uri ${MONGODB_ATLAS_CONNECTION_STRING}/test --collection courses --jsonArray --file courses.json --drop`;
      exec(importCommand, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error occurred during import: ${error.message}`);
        } else {
          console.log('Import successful.');
        }
      });
    } else if (choice === '2') {
      const exportCommand = `mongoexport --uri ${MONGODB_ATLAS_CONNECTION_STRING}/test --collection courses --jsonArray --out courses_export.json`;
      exec(exportCommand, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error occurred during export: ${error.message}`);
        } else {
          console.log('Export successful.');
        }
      });
    } else {
      console.log('Invalid choice. Please choose 1 or 2.');
    }

    rl.close();
  }
);

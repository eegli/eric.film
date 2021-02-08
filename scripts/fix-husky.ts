// Resolves an issue with yarn on Windows where 'husky-run' is not found

const fs = require('fs');

// If OS is Windows, fix Husky for Yarn
if (process.platform === 'win32') {
  const huskyScript = fs.readFileSync('.git/hooks/husky.sh', {
    encoding: 'utf-8',
  });
  const fixedHuskyScript = huskyScript.replace(
    'run_command yarn run --silent;;',
    'run_command npx --no-install;;',
  );
  fs.writeFileSync('.git/hooks/husky.sh', fixedHuskyScript);
}

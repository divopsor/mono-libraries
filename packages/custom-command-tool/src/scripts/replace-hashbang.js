const fs = require('fs');
const filePath = './dist/index.js';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile(filePath, `#!/usr/bin/env node\n${data}`, 'utf8', (err) => {
        if (err) throw err;
        console.log('파일이 성공적으로 업데이트되었습니다.');
    });
});

import chalk from "chalk";

console.log('');

console.log(
  chalk.green("TS 로 만드는", chalk.blue.underline.bold("나만의"), " 커맨드 툴")
);

console.log('');

console.log(chalk.bgWhite(`현재시각: ${new Date().toISOString()}`));

console.log('');

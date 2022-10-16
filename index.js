/*
?? Глобальные переменные и експорт/импорт функции
 */
// const { getCurrentDate } = require("./dateUtils");
// global.testData = "123";

// console.log(`function result: ${getCurrentDate()}`);
// console.log(global.testData);
/*
?? process.arg и математические операции
*/
// console.log(process.argv);
// console.log(__dirname);
// console.log(__filename);
// const Calc = require("calc-js").Calc;
// console.log(process.argv);
// const [, , a, b] = process.argv;
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());
/*
??путь к файлу module "path"
*/
// const path = require("path");
// console.log(path.resolve("dateUtils"));

/*
??работа с файлами vodule "fs"
*/

// const fs = require("fs");
// fs.readFile("./data.txt", "utf8", (error, data) => {
//   if (error) {
//     console.error(error);
//   }
//   console.log(data);
// });
// console.log(121231231);
//!!делаем синхроноу чтение файлов (не рекомендуется использовать из-за блокировки eventloop, так
//!! как все приложение будет ждать, когда прочитается файл)
// const fs = require("fs");
// const data = fs.readFileSync("./data.txt", "utf8");
// console.log(data);

// console.log(121231231);
//?? работа с промисами
// const fs = require("fs").promises;
// const path = require("path");
// fs.readFile(path.resolve("./data.txt"), "utf8")
//   .then((data) => console.log(data))
//     .catch((error) => console.log(error));
//?? работа с async await, чтение, запись, перемещение и удаление файлов
const fs = require("fs").promises;
const path = require("path");
(async () => {
  try {
    const data = await fs.readFile(path.resolve("./data.txt"), "utf8");
    console.log(data);

    const newContent = `${data} Polupan`;
    await fs.writeFile("./data1.txt", newContent, "utf8");
    // await fs.rename("./dateUtilsNewName", "./tmp/dateUtilsNewName");
    // console.log(await fs.readdir("./tmp"));
    // await fs.unlink("./tmp/dateUtilsNewName");
  } catch (error) {
    console.log(error);
  }
})();

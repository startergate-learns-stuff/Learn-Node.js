var testFolder = "/Bitnami/wampstack-7.1.17-0/apache2/htdocs/study/node.js/data";
var fs = require('fs');

fs.readdir(testFolder, function(err, filelist) {
  console.log(filelist);
});

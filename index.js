var fse = require("fs-extra");
var fs = require("fs");


function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

module.exports.convertFile = function (fileFormat = ".jpg", classNumber = 46, objNumber = 7) {
    const outputFolder = './output/'
    fse.ensureDir(outputFolder, err => {
        if (err) {
            console.log(err) 
            return;
        }
        let inputFolder = './data/';
        let count = 1;
        for (var i = 0; i < classNumber; i++) {
            for (var j = 0; j < objNumber; j++) {
                let int = (100 + 1 + i);
                let fileName = int + "_" + (j + 1) + fileFormat;
                let outputFileName = "face" +pad(count, 5) + fileFormat;

                if (fs.existsSync(inputFolder + fileName)) {
                    //ENABLE IF TO CLASSNUMBER FOLDER
                    // fse.copySync(inputFolder + fileName, outputFolder + (i+1) +"/" + outputFileName);

                    // ENABLE IF OUTPUT IN ONE FOLDER
                    fse.copySync(inputFolder + fileName, outputFolder + outputFileName);

                    console.log("Created File : " +  outputFolder + outputFileName);
                    count++;
                } else {
                    console.log("Cannot find file name: " + inputFolder + fileName);
                }
            }
        }
    })
};
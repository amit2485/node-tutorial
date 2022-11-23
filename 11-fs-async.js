const {readFile, writeFile} = require("fs");
console.log("start");

readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err, result) => {
        if(err){
            console.log(err);
            return
        }
        const second = result;
        console.log(`the result is ${first} ${second}`);
        writeFile('./content/result-async.txt',`Here the result is ${first} ${second}`,(err,result) => {
            if(err){
                console.log(err);
                return
            }
            console.log("done with this task");
            console.log(result);

        })
    })
})
console.log("starting next one");
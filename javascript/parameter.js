function printMsg(msg = "메세지") {
    console.log("message: ", msg);
}

printMsg();
printMsg("Have nice Day");


function sum(x, y, ...args) {
    let result = x + y;
    for (let num of args) {
        result += num;
    }

    console.log("args 개수: ", args.length);

    return result;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
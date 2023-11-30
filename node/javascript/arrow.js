function hello(name) {
    return "Hello," + name;
}
let arrHello = (name) => {
    return "Hello," + name;
}

arrHello = name => "Hello," + name;


const message = function (msg) {
    return "msg: " + msg;
}
let arrMessage = (msg) => {
    return "msg: " + msg;
}

arrMessage = msg => "msg: " + msg;
arrMessage = () => {
    let today = new Date().getDay();
    console.log("오늘 날짜 ", today);
}


function hello(msg) {
    return "msg: Hello," + msg;
}

console.log(hello("world"));
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("결과 데이터");
    } else {
        reject(new Error("에러 메세지"));
    }
});
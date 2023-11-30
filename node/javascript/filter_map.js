let words = ["spray", "limit", "elite", "exuberant", "paresent"];

let result = words.filter(function(word, idx, arr) {
    // console.log(arr, idx, word);
    return word.length > 6;
})

console.log(words, result);

let users = [{
        id: 100,
        name: "Hong"
    },
    {
        id: 200,
        name: "Kim"
    },
    {
        id: 300,
        name: "Lee"
    }
]

result = users.map(function (user) {
    return {
        id: user.id,
        name: user.name,
        grade: user.id == 200 ? "VIP" : "일반"
    }
});

console.log(users, result);
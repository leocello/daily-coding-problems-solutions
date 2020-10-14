const chooseRandom = stream => {
    let resp = null;

    for (const [$index, value] of stream.entries()) {
        if ($index === 0 || Math.floor(Math.random() * $index) === $index - 1) {
            resp = value;
        }
    }

    return resp;
};

const stream = [];
for (let i = 1; i <= 100; i++) {
    stream.push(i);
    console.log(chooseRandom(stream));
}
const getMedian = list => {
    const orderedList = [];
    for (let i = 0; i < list.length; i++) {
        orderedList.push(list[i]);
        if (orderedList.length == 1) {
            console.log(list[i]);
        } else {
            for (j = orderedList.length - 2; j >= 0; j--) {
                if (orderedList[j] > orderedList[j + 1]) {
                    const tmp = orderedList[j];
                    orderedList[j] = orderedList[j + 1];
                    orderedList[j + 1] = tmp;
                }
            }
            if (orderedList.length % 2 === 0) {
                console.log((orderedList[Math.floor((orderedList.length - 1) / 2)] + orderedList[Math.ceil((orderedList.length - 1) / 2)]) / 2);
            } else {
                console.log(orderedList[(orderedList.length - 1) / 2]);
            }
        }
    }
}

getMedian([2, 1, 5, 7, 2, 0, 5]);
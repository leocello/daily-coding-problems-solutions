const calculateTrappedWaterBruteForce = map => {
    if (map.length < 3) {
        return 0;
    }

    const answerMap = [0];

    for (let i = 1; i < map.length - 1; i++) {
        answerMap[i] = 0;
        let left = map[i];
        let right = map[i];
        for (let j = 0; j < i; j++) {
            if (map[j] > left) {
                left = map[j];
            }
        }

        for (let j = i + 1; j < map.length; j++) {
            if (map[j] > right) {
                right = map[j];
            }
        }

        if (left > map[i] && right > map[i]) {
            let lowerBorder = left < right ? left : right;
            
            answerMap[i] = lowerBorder - map[i];
        }
    }

    let answer = 0;
    for (let i = 0; i < answerMap.length; i++) {
        answer += answerMap[i];
    }

    return answer;
};

const calculateTrappedWater = map => {
    if (map.length < 3) {
        return 0;
    }

    let total = 0;
    let leftIndex = 0
    let rightIndex = map.length - 1;
    let leftHighest = 0;
    let rightHighest = 0;

    while (leftIndex <= rightIndex) {
        if (map[leftIndex] <= map[rightIndex]) {
            if (map[leftIndex] > leftHighest) {
                leftHighest = map[leftIndex];
            } else {
                total += leftHighest - map[leftIndex];
                leftIndex++;
            }
        } else {
            if (map[rightIndex] > rightHighest) {
                rightHighest = map[rightIndex];
            } else {
                total += rightHighest - map[rightIndex];
                rightIndex--;
            }
        }
    }

    return total;
};

module.exports = {
    calculateTrappedWaterBruteForce,
    calculateTrappedWater,
};
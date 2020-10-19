const getSizeOfLongestPath = pathAsString => {
    const pathAsArray = pathAsString.split('\n');

    const isFile = path => {
        return path.includes('.');
    };

    const getLevel = path => {
        return path.split('\t').length - 1;
    };

    const getItemName = path => {
        while(path.substr(0, 1) == '\t') {
            path = path.substr(1);
        }

        return path;
    };

    const getFullPath = $index => {
        let level = getLevel(pathAsArray[$index]);
        let fullPath = getItemName(pathAsArray[$index]);
        let i = $index - 1;

        while (level > 0) {
            if (!isFile(pathAsArray[i]) && getLevel(pathAsArray[i]) < level) {
                fullPath = getItemName(pathAsArray[i]) + '/' + fullPath;
                level--;
            }
            i--;
        }

        return fullPath;
    };

    let longestFilePath = -1;

    for (let i = 0; i < pathAsArray.length; i++) {
        if (isFile(pathAsArray[i])) {
            const currentLength = getFullPath(i).length;
            if (currentLength > longestFilePath) {
                longestFilePath = currentLength;
            }
        }
    }

    if (longestFilePath < 0) {
        throw "No files found";
    }

    return longestFilePath;
};

module.exports = {
    getSizeOfLongestPath,
};
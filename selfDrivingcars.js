var selfDividingNumbers = function (left, right) {
    let res = []
    for (let i = left; i <= right; i++) {
        let num = i;
        let exist = true;
        while (num > 0) {
            let rem = num % 10;
            if (i % rem !== 0) {
                exist = false;
                break
            }
            num = parseInt(num / 10)
        }
        if (exist) {
            res.push(i)
        }
    }
    return res
};
/*  
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
*/
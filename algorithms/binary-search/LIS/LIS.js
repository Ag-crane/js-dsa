const arr = [3, 9, 4, 5, 1, 2, 3, 4];

const sequence = [];

for (const x of arr) {
    if (sequence.length === 0 || x > sequence.at(-1)) {
        sequence.push(x);
    } else {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (sequence[mid] < x) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

		sequence[left] = x;
    }
}

console.log(sequence.length) // LIS의 길이
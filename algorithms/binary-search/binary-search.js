function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // 찾으면 해당 인덱스 반환
        } else if (arr[mid] < target) {
            left = mid + 1; // 오른쪽으로 탐색 범위 이동
        } else {
            right = mid - 1; // 왼쪽으로 탐색 범위 이동
        }
    }

    return -1; // 못 찾으면 -1 반환
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(arr, 7)); // 3
console.log(binarySearch(arr, 2)); // -1 (없음)
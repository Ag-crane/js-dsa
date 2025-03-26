// target과 가장 가까운 값 찾기
// 이분 탐색 후 최종 index가 정답이라는 보장이 없다. 이미 지나쳤을 수 있음.
// 최적값을 저장하고 계속 업데이트해야함

function findClosestValue(arr, target) {

	let closestValue;
	let minDiff = Infinity // '현재 값과 target 값의 차'의 최솟값

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currentDiff = Math.abs(arr[mid] - target);

        // 현재 값이 더 가까우면 업데이트
        if (currentDiff < minDiff) {
            minDiff = currentDiff;
            closestValue = arr[mid];
        }

        // 타겟 값과 일치하면 즉시 반환
        if (arr[mid] === target) {
            return arr[mid]
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return closestValue;
}

const arr = [-5, -1, 2, 3, 6]
console.log(findClosestValue(arr, -2)) // -1
console.log(findClosestValue(arr, 1)) // 2
console.log(findClosestValue(arr, 3)) // 3
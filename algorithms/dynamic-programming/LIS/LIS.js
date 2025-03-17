// DP를 활용한 가장 긴 증가하는 수열(LIS) 구하기 : O(N^2)
// 단, 이분탐색을 사용하는 방법이 훨씬 효율적이다 : O(NlogN)

const arr = [10, 20, 10, 30, 20, 50, 10, 20];
const N = arr.length;

// dp 테이블 생성
const dp = Array(N).fill(1); // LIS의 길이를 저장
const prev = Array(N).fill(-1); // 역추적용 이전 index 저장

for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
            dp[i] = dp[j] + 1;
            prev[i] = j; // arr[i]를 추가하기 전 LIS의 마지막 원소의 index
        }
    }
}

// LIS의 길이 : dp테이블 최댓값
console.log("LIS의 길이 : ", Math.max(...dp));

// 최댓값 위치 구하기
let maxValue = 0;
let maxIndex = 0;
for (let i = 0; i < N; i++) {
    if (dp[i] > maxValue) {
        maxValue = dp[i];
        maxIndex = i;
    }
}

// 역추적을 통해 LIS 자체를 구하기
let LIS = [];
while (maxIndex > -1) {
    LIS.push(arr[maxIndex]);
    maxIndex = prev[maxIndex];
}
LIS = LIS.reverse(); // 역순으로 찾았으므로 뒤집어주기
console.log("LIS : ", LIS);

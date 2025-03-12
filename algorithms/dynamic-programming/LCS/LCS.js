// 예시 문자열
const strA = "ABCBDAB";
const strB = "BDCABA";

const n = strA.length;
const m = strB.length;

const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

// dp 테이블 생성
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (strA[i - 1] === strB[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
}

// LCS의 길이
console.log("LCS의 길이: ", dp[n][m]);

// 테이블 끝(n, m)에서부터 역추적으로 LCS 찾기
let lcsArr = []; // 문자열을 매번 더하는 것보다, 배열에 담아서 한번에 변환하는게 더 효율적
let i = n;
let j = m;

while (i > 0 && j > 0) {
    if (strA[i - 1] === strB[j - 1]) {
        lcsArr.push(strA[i - 1]); // 같으니까 아무거나 고르면 됨
        // 대각선 위로 이동
        i--;
        j--;
    } else {
        // dp 테이블 값이 더 큰 쪽으로 이동
        if (dp[i][j - 1] > dp[i - 1][j]) {
            j--;
        } else {
            i--;
        }
    }
}

const lcs = lcsArr.reverse().join(""); // 거꾸로 삽입했으니 뒤집기
console.log("LCS: ", lcs);

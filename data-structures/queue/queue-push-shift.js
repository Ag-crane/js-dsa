// 간단히 활용하기
const queue = []; // 배열로 선언
queue.push('element'); // 맨 뒤에 요소 삽입
console.log(queue.shift()); // 맨 앞 요소 반환, 삭제
console.log(queue[0]) // 맨 앞 요소 확인
console.log(queue.length); // 요소 수 확인

// Class로 구현
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift(element);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        return this.isEmpty() ? null : this.items[0];
    }

    size() {
        return this.items.length;
    }
}

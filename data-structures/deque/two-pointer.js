class Deque {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    pushFront(value) {
        this.front--;
        this.items[this.front] = value;
    }

    pushBack(value) {
        this.items[this.rear] = value;
        this.rear++;
    }

    popFront() {
        if (this.size() === 0) return;

        const value = this.items[this.front];
        delete this.items[this.front];
        this.front++;

        return value;
    }

    popBack() {
        if (this.size() === 0) return;

        this.rear--;
        const value = this.items[this.rear];
        delete this.items[this.rear];

        return value;
    }

    peekFront() {
        return this.items[this.front];
    }

    peekBack() {
        return this.items[this.rear - 1];
    }

    size() {
        return this.rear - this.front;
    }
}

// 사용 예시
const deque = new Deque();

deque.pushBack(1); // [1]
deque.pushBack(2); // [1, 2]
deque.pushFront(0); // [0, 1, 2]

console.log(deque.peekFront()); // 0
console.log(deque.peekBack()); // 2

console.log(deque.popFront()); // 0 -> 이후 [1, 2]
console.log(deque.popBack()); // 2 -> 이후 [1]

console.log(deque.size()); // 1

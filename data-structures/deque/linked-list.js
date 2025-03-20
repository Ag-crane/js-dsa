class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    pushFront(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    pushBack(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.size++;
    }

    popFront() {
        if (this.size === 0) return;

        const value = this.head.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.size--;
        return value;
    }

    popBack() {
        if (this.size === 0) return;

        const value = this.tail.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.size--;

        return value;
    }

    peekFront() {
        return this.head.value;
    }

    peekBack() {
        return this.tail.value;
    }
}

// 사용 예시
const deque = new Deque();

deque.pushFront(2); // front <- 2 -> back
deque.pushFront(1); // front <- 1 <-> 2 -> back
deque.pushBack(3); // 1 <-> 2 <-> 3
deque.pushBack(4); // 1 <-> 2 <-> 3 <-> 4

console.log(deque.peekFront()); // 1
console.log(deque.peekBack()); // 4

console.log(deque.popFront()); // 1 (이후 2 <-> 3 <-> 4)
console.log(deque.popBack()); // 4 (이후 2 <-> 3)

console.log(deque.size); // 2

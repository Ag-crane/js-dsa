class Queue {
    constructor() {
        this.items = []
        this.front = 0
        this.rear = 0
    }

    enqueue(element) {
        this.items[this.rear++] = element
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items[this.front++]
    }

    isEmpty() {
        return this.front === this.rear
    }

    peak() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }
}
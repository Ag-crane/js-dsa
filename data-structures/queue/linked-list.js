class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(element) {
        const newNode = new Node(element);

        if (this.isEmpty()) {
            // 큐가 비어있다면, front와 rear 모두 새 노드를 가리키게 한다.
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode; // 현재 마지막 노드 뒤에 새로운 노드 연결
            this.rear = newNode; // rear 포인터가 새로운 노드를 가리키도록 변경 : 이제 새로운 노드가 마지막 노드!
        }

        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) return null;

        const removedElement = this.front.element; // 제거할 노드의 값
        this.front = this.front.next; // front 포인터가 2번째 노드를 가리키도록 변경 : 이제 2번째 노드가 첫 번째 노드!
        this.size--;

        if (!this.front) this.rear = null; // 마지막 노드를 제거한 경우 남아있는 참조를 해제 (메모리 누수 방지)

        return removedElement;
    }

    isEmpty() {
        return this.front === null; // front가 null이면 큐가 비어있는 상태. `this.size === 0`도 직관적인 좋은 방법
    }

    peek() {
        return this.isEmpty() ? null : this.front.element;
    }

    // size() 함수는 대신 프로퍼티로 접근할 수 있으니 생략
}

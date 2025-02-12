class Node {
    constructor(value) {
        this.item = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // 맨 뒤에 삽입
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // 맨 앞에 삽입
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // 특정 위치에 삽입
    insert(value, index) {
        if (index < 0 || index > this.size) {
            throw new Error("Index out of bounds");
        }

        if (index === 0) {
            this.prepend(value);
            return;
        }

        if (index === this.size) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);

        // head부터 탐색
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }

        // current 위치에 삽입
        const prevNode = current.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        current.prev = newNode;
        newNode.next = current;

        this.size++;
    }

    // 특정 위치 노드 삭제
    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let deletedNode;
        if (index === 0) {
            deletedNode = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                // 노드가 하나였고 제거로 인해 비워졌다면 tail도 null
                this.tail = null;
            }
        } else if (index === this.size - 1) {
            deletedNode = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            let current = this.head;
            let i = 0;
            while (i < index) {
                current = current.next;
                i++;
            }
            deletedNode = current;
            const prevNode = current.prev;
            const nextNode = current.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.size--;
        return deletedNode;
    }

    // 노드 검색
    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    // 정방향 순회
    printForward() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log("Forward: ", values.join(" <-> "));
    }

    // 역방향 순회
    printBackward() {
        const values = [];
        let current = this.tail;
        while (current) {
            values.push(current.value);
            current = current.prev;
        }
        console.log("Backward:", values.join(" <-> "));
    }
}

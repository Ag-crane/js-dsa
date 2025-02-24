class Node {
    constructor(value) {
        this.item = value;
        this.next = null;
    }
}

class SinglyLinkedList {
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

        // head부터 탐색
        const newNode = new Node(value);
        let current = this.head;
        let previous = null;
        let i = 0;

        while (i < index) {
            previous = current;
            current = current.next;
            i++;
        }
        previous.next = newNode;
        newNode.next = current;

        this.size++;
    }

    // 특정 위치의 노드 삭제
    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }

        let deletedNode = null;

        if (index === 0) {
            deletedNode = this.head;
            this.head = this.head.next;
            // 리스트가 비워졌다면 tail 업데이트
            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            let previous = null;
            let i = 0;

            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }

            deletedNode = current;
            previous.next = current.next;

            // 제거한 노드가 tail이었던 경우 tail 업데이트
            if (index === this.size - 1) {
                this.tail = previous;
            }
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

    // head부터 순회
    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(" -> "));
    }
}

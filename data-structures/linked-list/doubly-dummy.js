class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(null); // 더미 head
        this.tail = new Node(null); // 더미 tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        const prevNode = this.tail.prev;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = this.tail;
        this.tail.prev = node;
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        const nextNode = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = nextNode;
        nextNode.prev = node;
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size)
            throw new Error("Index out of bounds");
        let curr = this.head.next;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        const prevNode = curr.prev;
        const nextNode = curr.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.size--;
        return curr.value;
    }

    printForward() {
        let curr = this.head.next;
        const arr = [];
        while (curr !== this.tail) {
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log(arr.join(" -> "));
    }

    printBackward() {
        let curr = this.tail.prev;
        const arr = [];
        while (curr !== this.head) {
            arr.push(curr.value);
            curr = curr.prev;
        }
        console.log(arr.join(" -> "));
    }
}

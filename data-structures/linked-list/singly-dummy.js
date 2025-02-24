class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = new Node(null); // 더미 head
        this.tail = this.head;
        this.size = 0;
    }

    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head.next;
        this.head.next = node;
        if (this.tail === this.head) this.tail = node;
        this.size++;
    }

    remove(index) {
        if (index < 0 || index >= this.size)
            throw new Error("Index out of bounds");
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        const toDelete = curr.next;
        curr.next = toDelete.next;
        if (toDelete === this.tail) this.tail = curr;
        this.size--;
        return toDelete.value;
    }

    print() {
        let curr = this.head.next;
        const arr = [];
        while (curr) {
            arr.push(curr.value);
            curr = curr.next;
        }
        console.log(arr.join(" -> "));
    }
}

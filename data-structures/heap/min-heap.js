class MinHeap {
    constructor() {
        this.heap = []; // 배열로 표현
    }

    getSize() {
        return this.heap.length;
    }

    // 두 노드의 위치를 바꾼다
	swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // 루트(최솟값) 조회
    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value); // 일단 삽입 후
        this.bubbleUp(); // 위로 올리며 정렬
    }

    pop() {
        if (this.getSize() === 0) return;
        if (this.getSize() === 1) return this.heap.pop();

        // 루트와 마지막 원소 교환, 루트 제거
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.bubbleDown(0);

        return root;
    }

    // 끝에 삽입된 원소 위로 올리며 정렬
    bubbleUp() {
        let index = this.getSize() - 1; // 삽입된 원소 인덱스

        // 부모보다 작으면 계속 위로
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            // 부모보다 크거나 같으면 중단
            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }

            // 부모보다 작다면 부모와 교환
			this.swap(parentIndex, index)

			// 스왑된 위치로 올라간 후 이어서 검사
            index = parentIndex;
        }
    }

    // 특정 노드를 루트로 하는 부분 트리를 재정렬하여 힙 구조로 만든다
    bubbleDown(index) {
        const size = this.getSize();

        while (true) {
            // 현재 노드(index)의 자식 노드들
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            // 현재 노드(index)와 그 자식 노드들 중에서 가장 작은 값을 가진 노드의 인덱스를 smallestIndex에 저장
            let smallestIndex = index;

            if (leftChildIndex < size && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }

            if (rightChildIndex < size && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }

            // 현재 노드가 가장 작으면(= 더 내려갈 필요가 없으면) 종료
            if (smallestIndex === index) break;

            // 그렇지 않으면, 교환
			this.swap(index, smallestIndex)

            // 스왑된 위치로 내려간 후 이어서 검사
            index = smallestIndex;
        }
    }
}

// 사용 예시
const minHeap = new MinHeap();
minHeap.push(5);
minHeap.push(2);
minHeap.push(8);
minHeap.push(1);
``;
console.log(minHeap.pop()); // 1
console.log(minHeap.pop()); // 2
console.log(minHeap.pop()); // 5
console.log(minHeap.pop()); // 8

class MaxHeap {
    constructor() {
        this.heap = []; // 배열로 표현
    }

    getSize() {
        return this.heap.length;
    }

    // 루트(최솟값) 조회
    peek() {
        return this.heap[0];
    }

    push(value) {
        this.heap.push(value); // 일단 삽입 후
        this.heapifyUp(); // 위로 올리며 정렬
    }

    pop() {
        if (this.getSize() === 0) return;
        if (this.getSize() === 1) return this.heap.pop();

        // 루트와 마지막 원소 교환, 루트 제거
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.heapifyDown(0);

        return root;
    }

    // 끝에 삽입된 원소 위로 올리며 정렬
    heapifyUp() {
        let index = this.getSize() - 1; // 삽입된 원소 인덱스
        const insertedValue = this.heap[index]; // 삽입된 원소

        // 부모보다 크면 계속 위로
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            // 부모보다 작거나 같으면 중단
            if (this.heap[parentIndex] >= insertedValue) {
                break;
            }

            // 부모보다 크다면 부모와 교환
            this.heap[index] = this.heap[parentIndex];
            index = parentIndex;
        }

        this.heap[index] = insertedValue;
    }

    // 특정 노드를 루트로 하는 부분 트리를 재정렬하여 힙 구조로 만든다
    heapifyDown(index) {
        const size = this.getSize();
		const startValue = this.heap[index] // 시작 노드(부분 트리의 루트 노드) 값 임시 보관

        while (true) {
			// 현재 노드(index)의 자식 노드들
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;

            // 현재 노드(index)와 그 자식 노드들 중에서 가장 큰 값을 가진 노드의 인덱스를 largestIndex에 저장
            let largestIndex = index;

            if (leftChildIndex < size && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if (rightChildIndex < size && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            // 현재 노드가 가장 작으면(= 더 내려갈 필요가 없으면) 종료
            if (largestIndex === index) break;

            // 더 작은 값을 가진 자식 노드를 한 칸 올려주기기
            this.heap[index] = this.heap[largestIndex];

            // 스왑된 위치로 내려간 후 이어서 검사
            index = largestIndex;
        }

		// 최종 위치에 시작 노드 값 배치
		this.heap[index] = startValue
    }
}

// 사용 예시
const maxHeap = new MaxHeap();
maxHeap.push(5);
maxHeap.push(2);
maxHeap.push(8);
maxHeap.push(1);
``
console.log(maxHeap.pop()); // 8
console.log(maxHeap.pop()); // 5
console.log(maxHeap.pop()); // 2
console.log(maxHeap.pop()); // 1

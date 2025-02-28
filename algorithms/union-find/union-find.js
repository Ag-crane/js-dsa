class UnionFind {
    constructor(size) {
        // 초기에는 모든 노드가 자기 자신을 부모 노드로 갖는다. 따라서 rank는 모두 0
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = new Array(size).fill(0);
    }

    find(x) {
        if (this.parent[x] === x) return x;

        this.parent[x] = this.find(this.parent[x]); // 경로 압축
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX === rootY) return; // 이미 같은 집합인 경우

        // Union by Rank
        if (this.rank[rootX] > this.rank[rootY]) {
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            this.parent[rootX] = rootY;
        } else {
            // rank 값이 같은 경우 한쪽에 붙이고 rank 1 증가
            this.parent[rootY] = rootX; // 여기서는 X가 Y의 부모가 된다
            this.rank[rootX]++;
        }
    }

    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
}

const uf = new UnionFind(10);
uf.union(1, 2);
uf.union(2, 3);
console.log(uf.isConnected(1, 3)); // true
console.log(uf.isConnected(1, 4)); // false

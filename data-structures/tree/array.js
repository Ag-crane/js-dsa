class ArrayBinaryTree {
    constructor(arr = []) {
        this.tree = arr;
    }

    // 전위 순회: Root → Left → Right
    preorder(index = 0, result = []) {
        if (index < this.tree.length && this.tree[index] !== null) {
            result.push(this.tree[index]);
            this.preorder(2 * index + 1, result);
            this.preorder(2 * index + 2, result);
        }
        return result;
    }

    // 중위 순회: Left → Root → Right
    inorder(index = 0, result = []) {
        if (index < this.tree.length && this.tree[index] !== null) {
            this.inorder(2 * index + 1, result);
            result.push(this.tree[index]);
            this.inorder(2 * index + 2, result);
        }
        return result;
    }

    // 후위 순회: Left → Right → Root
    postorder(index = 0, result = []) {
        if (index < this.tree.length && this.tree[index] !== null) {
            this.postorder(2 * index + 1, result);
            this.postorder(2 * index + 2, result);
            result.push(this.tree[index]);
        }
        return result;
    }
}

const treeArray = [1, 2, 3, 4, 5, 6, 7];
const tree = new ArrayBinaryTree(treeArray);

console.log("Preorder:", tree.preorder()); // [1, 2, 4, 5, 3, 6, 7]
console.log("Inorder:", tree.inorder()); // [4, 2, 5, 1, 6, 3, 7]
console.log("Postorder:", tree.postorder()); // [4, 5, 2, 6, 7, 3, 1]

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class LinkedBinaryTree {
    constructor() {
        this.root = null;
    }

    // 전위 순회: Root → Left → Right
    preorder(node = this.root, result = []) {
        if (node) {
            result.push(node.value);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    }

    // 중위 순회: Left → Root → Right
    inorder(node = this.root, result = []) {
        if (node) {
            this.inorder(node.left, result);
            result.push(node.value);
            this.inorder(node.right, result);
        }
        return result;
    }

    // 후위 순회: Left → Right → Root
    postorder(node = this.root, result = []) {
        if (node) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.value);
        }
        return result;
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const tree = new LinkedBinaryTree(root);

console.log("Preorder:", tree.preorder(root)); // [1, 2, 4, 5, 3, 6, 7]
console.log("Inorder:", tree.inorder(root)); // [4, 2, 5, 1, 6, 3, 7]
console.log("Postorder:", tree.postorder(root)); // [4, 5, 2, 6, 7, 3, 1]

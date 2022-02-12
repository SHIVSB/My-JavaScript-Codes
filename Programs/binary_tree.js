class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preorder(root) {
  if (root == null) {
    return;
  }
  console.log(root.data);
  preorder(root.left);
  preorder(root.right);
}

function inorder(root) {
  if (root == null) {
    return;
  }

  inorder(root.left);
  console.log(root.data);
  inorder(root.right);
}

function postorder(root) {
  if (root == null) {
    return;
  }

  postorder(root.left);
  postorder(root.right);
  console.log(root.data);
}

function maxHeight(root) {
  if (root == null) {
    return 0;
  }

  let left = maxHeight(root.left) + 1;
  let right = maxHeight(root.right) + 1;

  return Math.max(left, right);
}

function maxElement(root) {
  if (root == null) {
    return Number.MIN_SAFE_INTEGER;
  }

  let left = maxElement(root.left);
  let right = maxElement(root.right);

  return Math.max(left, right, root.data);
}

let root = new node(10);
root.left = new node(20);
root.right = new node(30);
root.left.left = new node(40);
root.left.right = new node(50);

preorder(root);
console.log("#####################");
inorder(root);
console.log("#####################");
postorder(root);
console.log("#####################");
console.log(maxHeight(root));
console.log("#####################");
console.log(maxElement(root));

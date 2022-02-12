class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function mirror(rootleft, rootright) {
  
    if(rootleft == null && rootright == null){
        return true;
    }

    if(rootleft == null || rootright == null){
        return false;
    }

    return (rootleft.data == rootright.data) && mirror(rootleft.left, rootright.right) && mirror(rootright.left, rootleft.right);
}

let root = new node(1);
root.left = new node(2);
root.right = new node(2);
root.left.left = new node(3);
root.left.right = new node(4);
root.right.left = new node(4);
root.right.right = new node(3);

console.log(mirror(root.left, root.right));

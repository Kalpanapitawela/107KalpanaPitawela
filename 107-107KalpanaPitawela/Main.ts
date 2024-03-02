import AVLTree from "./AVLTree";

let avlObj = new AVLTree();
avlObj.insert(25);
avlObj.insert(85);
avlObj.insert(2);
avlObj.insert(-25);
//avlObj.delete(2);


console.log("printing the tree using Inordertraversal ");
avlObj.inOrderTraversal(avlObj.root);

console.log("printing the search is available ");
console.log(avlObj.search(44));

console.log(avlObj.viewHeight());
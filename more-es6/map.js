const number = [1, 2, 3, 4, 5];

const newArray = number.map((value) => value + 1);
// console.log(newArray);

const squareArray = number.map((element) => {
  return element * element;
});
// console.log(squareArray);

const friends = ["rakib", "sakib", "rihand", "sohan"];

const newFriend = friends.map((element, index) => {
  console.log(element);
  console.log(index);
});

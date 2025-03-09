const loadedUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      showUser(data);
    });
};

const showUser = (users) => {
  const userContainer = document.getElementById("users");

  for (const user of users) {
    const li = document.createElement("li");
    li.innerText =  `${user.name}`
    userContainer.appendChild(li)
  }
  //   for(let i =0 ; i < users.length; i++){
  //     const ele = users[i]
  //     console.log(ele)
  //   }
};

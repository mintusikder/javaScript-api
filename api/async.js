const handelUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log("error dorchi", error));
};
handelUser();

const handelUser2 = async () => {
try{
    const user = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await user.json()
    console.log(data);
}catch{
    console.log("error")
}
};
handelUser2()
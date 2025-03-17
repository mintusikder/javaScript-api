const productCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");

  const name = productName.value;
  const quantity = productQuantity.value;

  console.log(name, quantity);

  productContainer(name, quantity);

  productName.value = "";
  productQuantity.value = "";
};

const productContainer = (name, quantity) => {
  const productContainer = document.getElementById("product-Container");

  const li = document.createElement("li");
  li.innerText = `${name} : ${quantity}`;

  productContainer.appendChild(li);
};

const handelSetToLocalStorage = (name, quantity) => {
  const newProduct = { name: quantity };
  localStorage.setItem("cart", JSON.stringify(newProduct));
};

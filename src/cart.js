const notif = document.querySelector("cart-notification");
const openNotif = document.querySelector(".open-notif");
const addCart = document.querySelector(".add-cart");
const quantity = document.querySelector(".qty-field");

function setData(data) {
  const dataObject = {
    title: data.title,
    price: data.price,
    image: data.image,
    qty: data.qty,
  };

  console.log(dataObject);
  notif.open({ data: dataObject });
}

// openNotif.addEventListener('click', (e)=>setData(e))

function addToCart() {
  var payload = {
    id: addCart.getAttribute("data-pid"),
    quantity: quantity.value,
  };

  // console.log(payload)

  fetch("/cart/add.js", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      // console.log(res)
      return res.json();
    })
    .then((res) => {
      // console.log(res.data)
      updateCart();
    })
    .catch((er) => {
      console.log(er);
    });
}

function updateCart() {
  fetch("/cart/update.js", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: "{}",
  })
    .then((res) => {
      // console.log(res)
      return res.json();
    })
    .then((res) => {
      console.log("COUNTER", res.items[0].featured_image.url);
      document.querySelector(".cart-count-container").innerHTML =
        res.item_count;
      setData({
        title: res.items[0].title,
        price: (res.items[0].price / 100) * quantity.value,
        image: res.items[0].featured_image.url,
        qty: res.items[0].quantity,
      });
    })
    .catch((er) => {
      console.log(er);
    });
}

addCart.addEventListener("click", (e) => addToCart(e));

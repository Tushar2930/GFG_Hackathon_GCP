export const updateUserCartItem = async (postData) => {
  try {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "update",
        postData,
      }),
    };
    const data = await fetch(
      "http://localhost:8000/cart/update-user-cart-item",
      requestOptions
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

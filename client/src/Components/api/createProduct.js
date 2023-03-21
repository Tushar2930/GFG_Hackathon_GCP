export const createProduct = async (postData) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "new product",
        postData,
      }),
    };
    const data = await fetch(
      "http://localhost:8000/product/sell-add",
      requestOptions
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

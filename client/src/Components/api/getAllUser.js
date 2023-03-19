export const getAllUser = async (postData) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "new user",
      }),
    };
    const data = await fetch(
      "http://localhost:8000/user/getAllUser",
      requestOptions
    ).then((res) => res.json());
    return data.data;
  } catch (err) {
    console.log(err.message);
  }
};

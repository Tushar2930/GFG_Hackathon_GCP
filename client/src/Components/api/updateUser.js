export const updateUser = async (postData) => {
  try {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "new user",
        postData,
      }),
    };
    const data = await fetch(
      "http://localhost:8000/user/updateUser",
      requestOptions
    ).then((res) => res.json());
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

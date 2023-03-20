export const getUser = async (email) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "new user",
        postData: {
          email: email,
        },
      }),
    };
    const data = await fetch(
      "http://localhost:8000/user/getUser",
      requestOptions
    ).then((res) => res.json());
    return data.data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getUser = async (email) => {
  try {
    const requestOptions = {
      method: "POST",
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
    return data.list[0]._fieldsProto;
  } catch (err) {
    console.log(err.message);
  }
};

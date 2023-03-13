export const createUser = async (
  email,
  password,
  userName,
  accountNO,
  aadharNo
) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: "new user",
        postData: {
          email,
          password,
          userName,
          accountNO,
          aadharNo,
        },
      }),
    };
    const data = await fetch(
      "http://localhost:8000/signup",
      requestOptions
    ).then((res) => res.json());
    return data.data;
  } catch (err) {
    console.log(err.message);
  }
};

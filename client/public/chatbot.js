
      const resp = fetch("http://tushar7.pythonanywhere.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "values": [10, 10, 10, 20, 8, "bihar"]
        }),
      }).then(res=> res.json()).then(res=> console.log(res))

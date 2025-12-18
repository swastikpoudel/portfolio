const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch(
      "https://swastik-v2-backend.onrender.com/api/client",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();

    if (res.ok) {
      alert("Message sent successfully 🚀");
      form.reset();
    } else {
      alert(result.error || "Something went wrong");
    }
  } catch (err) {
    alert("Server not reachable");
    console.error(err);
  }
});

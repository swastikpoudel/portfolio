const form = document.getElementById("contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form); // This includes the file if selected

  // ✅ REMOVE: Don't create separate data object
  // ❌ const data = {
  // ❌   name: formData.get("name"),
  // ❌   phone: formData.get("phone"),
  // ❌   message: formData.get("message"),
  // ❌ };

  try {
    const res = await fetch(
      "https://swastik-v2-backend.onrender.com/api/client",
      {
        method: "POST",
        // ❌ REMOVE: Don't set Content-Type header manually
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // ✅ Send FormData directly
        // body: JSON.stringify(data), // ❌ WRONG
        body: formData, // ✅ CORRECT - sends file + text
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
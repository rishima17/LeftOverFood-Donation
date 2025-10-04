// Wait for the page to load before attaching event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".loginform");
  const messageBox = document.createElement("p");
  messageBox.id = "message";
  form.appendChild(messageBox);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // ✅ Get input values
    const email = document.querySelector("#email")?.value || document.querySelector("input[placeholder='Username']").value.trim();
    const password = document.querySelector("#password")?.value || document.querySelector("input[placeholder='Password']").value.trim();

    if (!email || !password) {
      showMessage("Please fill in all fields", "red");
      return;
    }

    try {
      // ✅ Send POST request to backend
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        showMessage("Login successful ✅", "green");

        // ✅ Save JWT token for future use
        localStorage.setItem("token", data.token);

        // Redirect to dashboard or home page after 1 sec
        setTimeout(() => {
          window.location.href = "dashboard.html";
        }, 1000);
      } else {
        showMessage(data.message || "Invalid credentials!", "red");
      }
    } catch (error) {
      showMessage("Server not responding. Please try again later.", "red");
    }
  });

  function showMessage(text, color) {
    messageBox.textContent = text;
    messageBox.style.color = color;
    messageBox.style.textAlign = "center";
    messageBox.style.marginTop = "10px";
  }
});

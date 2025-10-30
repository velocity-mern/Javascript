function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("All fields are required");
    return;
  }

  const user = { name, email, password };

  localStorage.setItem("user", JSON.stringify(user));
  alert("User Registered Successfully");
  window.location.href = "index.html";
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
  if (!storedUser) {
    alert("no user is found, please register first");
  }

  if (email === storedUser.email && password === storedUser.password) {
    sessionStorage.setItem("isLoggedIn", "true");
    alert("login successfully");
    window.location.href = "welcome.html";
  } else {
    alert("Invalid Email and password");
  }
}

function displayUser() {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "index.html";
    return;
  }
  const storedUser = JSON.parse(localStorage.getItem("user"));
  document.getElementById("username").textContent = storedUser.name;
}

function logout() {
  //   sessionStorage.removeItem("isLoggedIn");

  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "index.html";
}

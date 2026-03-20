async function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (res.status === 200) {
        localStorage.setItem("token", data.access);

        window.location.href = "/api/home/";
    } else {
        document.getElementById("error").innerText = "Invalid credentials!";
    }
}

// async function register() {
//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     const res = await fetch("/api/register/", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ username, email, password })
//     });

//     const data = await res.json();

//     if (res.status === 200) {
//         document.getElementById("message").innerText = "✅ Registration successful!";
        
//         // Redirect to login after 2 sec
//         setTimeout(() => {
//             window.location.href = "/api/";
//         }, 2000);
//     } else {
//         document.getElementById("message").innerText =
//             "❌ " + JSON.stringify(data);
//     }
// }

async function register() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/api/register/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (res.status === 200 || res.status === 201) {
        document.getElementById("message").style.color = "darkgreen";
        document.getElementById("message").innerText = "Registration successful!";

        setTimeout(() => {
            window.location.href = "/api/";
        }, 1500);
    } else {
        document.getElementById("message").innerText =
        data.email ? data.email[0] : "Registration failed";
}
}

function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

async function loadProfile() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "/api/";
        return;
    }

    try {
        const res = await fetch("/api/profile/", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        if (res.status !== 200) {
            throw new Error("Unauthorized");
        }

        const data = await res.json();

        document.getElementById("welcomeText").innerText =
            `Welcome to Dashboard, ${data.username}`;

    } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
        window.location.href = "/api/";
    }
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "/api/";
}

let profileVisible = false;

async function toggleProfile() {
    const dropdown = document.getElementById("profileDropdown");

    if (!profileVisible) {
        dropdown.style.display = "block";

        const token = localStorage.getItem("token");

        const res = await fetch("/api/profile/", {
            headers: {
                "Authorization": "Bearer " + token
            }
        });

        const data = await res.json();

        document.getElementById("profileUsername").innerText =
            "👤 USERNAME:  " + data.username;

        document.getElementById("profileEmail").innerText =
            "📧 EMAIL ID:  " + data.email;

        profileVisible = true;

    } else {
        dropdown.style.display = "none";
        profileVisible = false;
    }
}

window.onload = loadProfile;
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("registrationForm")) {
        document.getElementById("registrationForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let users = JSON.parse(localStorage.getItem("users")) || [];
            let user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                contact: document.getElementById("contact").value,
                address: document.getElementById("address").value
            };
            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));
            this.reset();
            alert("User Registered Successfully!");
        });
    }

    if (document.getElementById("userTableBody")) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let tableBody = document.getElementById("userTableBody");
        users.forEach(user => {
            let row = `<tr>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.contact}</td>
                        <td>${user.address}</td>
                      </tr>`;
            tableBody.innerHTML += row;
        });
    }
});

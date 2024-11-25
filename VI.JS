
// Sample user data (could be stored in localStorage or a database in real scenarios)
let users = [];

// Function to add a new user
function addUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Input validation
    if (!name || !email || !phone) {
        alert("All fields are required!");
        return;
    }

    // Create a new user object
    const newUser = {
        id: Date.now(),  // Generate unique ID using timestamp
        name: name,
        email: email,
        phone: phone
    };

    // Add new user to the list
    users.push(newUser);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    // Re-render the user list
    renderUserList();
}

// Function to render the user list
function renderUserList() {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = ''; // Clear the table before re-rendering

    users.forEach(user => {
        const row = document.createElement('tr');
        
        // Create table cells
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>
                <button class="edit" onclick="editUser(${user.id})">Edit</button>
                <button class="delete" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to edit a user
function editUser(id) {
    const user = users.find(user => user.id === id);
    if (user) {
        document.getElementById('name').value = user.name;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;

        // Remove the user from the list and allow updating
        deleteUser(id);
    }
}

// Function to delete a user
function deleteUser(id) {
    users = users.filter(user => user.id !== id); // Remove user with matching ID
    renderUserList(); // Re-render the list after deletion
}

// Initial render when the page loads
window.onload = renderUserList;
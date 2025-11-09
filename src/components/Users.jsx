import React from 'react';
const Users = () => {
    const handleUser = e => {
        e.preventDefault();
        const name = e.target.nameField.value;
        const email = e.target.emailField.value;
        console.log(name, email);
        // Create user in Db
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username: "name" })
        })
            .then(res => res.json())
            .then(data => {
                console.log('data , after creating in db', data)
            })
    }
    return (
        <div>
            <div>
                {/* Add User */}
                <h1>Simple Crud Applications</h1>
                <form onSubmit={handleUser}>
                    <input name='nameField' type="text" />
                    <br />
                    <input name='emailField' type="text" />
                    <br />
                    <input type="submit" value="AddUser" />
                </form>
            </div>
        </div>
    );
};
export default Users;
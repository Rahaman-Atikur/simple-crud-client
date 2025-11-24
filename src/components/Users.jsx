import React, { use, useState } from 'react';
const Users = ({ usersPromise }) => {
    const initialUsers = use(usersPromise);
    const [users, setUsers] = useState(initialUsers);
    console.log(initialUsers);
    const handleUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };
        console.log(newUser);
        e.target.reset();
        // Create user in Db
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data  after creating in db', data)
                if (data.insertedId) {
                    newUser._id = data.insertedId;
                    const newUsers = [...users,newUser];
                    setUsers(newUsers);
                    alert('User added successfully');
                    e.target.reset();
                }
            })
    }
    return (
        <div>
            <div>
                {/* Add User */}
                <h1>Simple Crud Applications</h1>
                <form onSubmit={handleUser}>
                    <input name='name' type="text" />
                    <br />
                    <input name='email' type="text" />
                    <br />
                    <input type="submit" value="AddUser" />
                </form>
            </div>
            {/* View Users Details */}
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}:{user.email}</p>)
                }
            </div>
        </div>
    );
};
export default Users;
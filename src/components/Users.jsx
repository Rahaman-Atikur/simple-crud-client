import React from 'react';
const Users = () => {
    const handleUser = e => {
        e.preventDefault();
        const name = e.target.nameField.value;
        const email = e.target.emailField.value;
        console.log(name, email);
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
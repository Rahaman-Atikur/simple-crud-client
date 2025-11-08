import React from 'react';

const Users = () => {
    const handleUser =e=>{
        e.preventDefault();

    }
    return (
        <div>
            <div>
                {/* Add User */}
                <form onSubmit={handleUser}>
                    <input name='nameField' type="text" />
                    <br />
                    <input name='emailField' type="text" />
                    <br />
                    <input type="submit" value="addUser" />
                </form>
            </div>
        </div>
    );
};

export default Users;
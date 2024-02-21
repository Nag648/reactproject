import React from 'react';

function Mylogin() {
    return (
        <div className="login-form">
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </div>
    );
}

export default Mylogin
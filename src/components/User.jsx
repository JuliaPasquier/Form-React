import React, { useState } from "react";


const setUsername = "John Doe";
const setEmail = "";

function User() {
        const [username, email] = useState(true);
 

        const handleUsername = (e) => {
            setUsername(e.target.value);

        }
        const handleEmail = (e) => {
            setEmail(e.target.value);

        }

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(username, email);
        }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" onChange={handleUsername} />
                    <label>Email</label>
                    <input type="text" onChange={handleEmail} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }

    
export default User;

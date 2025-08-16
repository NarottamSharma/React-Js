import React from "react";

export const UserList = () => {
    const users = [
        {
            id: 1,
            name: "Narottam",
            age: 21,
        },
        {
            id: 2,
            name: "Priya",
            age: 25,
        },
        {
            id: 3,
            name: "Rahul",
            age: 28,
        },
        {
            id: 4,
            name: "Anjali",
            age: 23,
        },
        {
            id: 5,
            name: "Vikash",
            age: 30,
        },
    ];

    return (
        <div>
            <main>
                {users.map(({name,age}) => (
                    <div key={users.id}>
                        <h1>Name: {name} </h1>
                        <h1>Name: {age} </h1>
                    </div>
                ))}
            </main>
        </div>
    );
};

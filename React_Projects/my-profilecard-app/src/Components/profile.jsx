import React from "react";
function Profile({name="Manikanta",age=21,bio="My name is Manikanta"}){
    return (
        <>
        <h1>Name:{name}</h1>
        <h3>Age:{age}</h3>
        <p>Bio:{bio}</p>
        </>
    )
}
export default Profile;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const nevigate = useNavigate();
    const realName = "Michal";
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <input placeholder="name" onChange={(e) => setName(e.target.value)}></input>
            <input placeholder="password" type={'password'} onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={
                name === realName ?
                    () => nevigate(`/homePage/${name}`) :
                    () => nevigate(`/registration`)}>
                Log in
            </button>
        </>
    );
}
export default LogIn;
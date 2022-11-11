const Person = ({ age, name, hobbies }) => {
    let msg;

    msg = age > 18 ? <h3>Please go VOTE!!!</h3> : <h3>You must be 18</h3>;

    if (name.length > 8) {
        name = name.slice(0, 6);
    }

    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>My name is : {name}</li>
                <li>Age : {age}</li>
                <ul><b>Hobbies are :</b>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </ul>
            <h3>{msg}</h3>
        </div>
    )
};
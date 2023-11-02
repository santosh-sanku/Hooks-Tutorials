import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <h1>useState Example using Object</h1>

      <form>
        <input
          type="text"
          placeholder="Enter First Name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h3>Your entered first name as : {name.firstName}</h3>
        <h3>Your entered last name as : {name.lastName}</h3>

        <h2>{JSON.stringify(name)}</h2>

        <p>
          NOTE : - The setter function provided by the useState Hook is not
          automatically merge & update objects , you have to manually merge it
          yourself & then pass the value to the setter function.
        </p>
        <p>
          = use of spread operator = Copy every property in the name object,
          just overwrite the firstname field with different value || similarly
          for last name , make the replica of the name object & then only update
          the last name property to the new value
        </p>
      </form>
    </div>
  );
}

export default HookCounterThree;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';

type Profile = {
  firstname: string,
  lastname: string,
  age: number,
}

function App() {
  const {register, handleSubmit, errors}= useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input ref={register({required: true})} type="text" id="firstname" name="firstname"/>
        {errors.firstname && <div className="error">Enter your first name</div>}
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input ref={register({required: true})} type="text" id="lastname" name="lastname"/>
        {errors.lastname && <div className="error">Enter your last name</div>}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input ref={register({required: true})} type="text" id="age" name="age"/>
        {errors.age && <div className="error">Enter your age</div>}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default App;

import React, {useState} from "react"

export const validate= (input)=>{
let errors = {};

if(!input.username){
  errors.username = "Username is required"
} else if (!/\S+@\S+\.\S+/.test(input.username)) {
  errors.username = 'Username is invalid';
}

if(!input.password){
  errors.password = "Password is required"
}else if(!/(?=.*[0-9])/.test(input.password)){
  errors.password = "Password is invalid"
}

return errors;
}

export default function Form() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors]= useState({
    username: "",
    password: ""
  });
  
  const handleInputChange = function(e) {
    const value = e.target.value;
    const property = e.target.name;
    setInput({
      ...input,
      [property]: value
    });
    setErrors(validate({
      ...input,
      [property]: value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>Username:</label>
     
      <input type="text" name="username" onChange={handleInputChange} className={errors.username && "danger"} value={input.username} />
    </div>
    {errors.username && (
      <p className="danger">{errors.username}</p>
    )}
   <br />
    <div>
      <label>Password:</label>
      <input type="password" name="password" onChange={handleInputChange}className={errors.password && "danger"} value={input.password} />
    </div>
    {errors.password && (
      <p className="danger">{errors.password}</p>
    )}
    <button type="submit" disabled={input.username || input.password || errors}>Submit</button>
    </form>
  )
}
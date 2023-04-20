
/* 
This code is for user authentication with email and password using 
Firebase authentication library.

The useState hook is used to create state variables for the email, 
password, confirm password, and error fields. The handleSignUp function now checks 
whether the entered passwords match before proceeding to hash the password using bcrypt 
before calling createUserWithEmailAndPassword. The handleSignIn and handleSignUp functions 
both now include a setError call to update the error state if an error occurs during 
authentication. Additionally, the error message is displayed in the UI when an error 
occurs using a conditional rendering statement.
*/

// Import necessary packages and libraries:
import React, { useState } from "react"; // used to manage state within functional components.
import bcrypt from "bcryptjs"; // used to securely hash passwords.
// Import the functions you need from the SDKs you need

// *** FUNCTIONS ***

// * USER AUTHENTICATION *
/* 
Inside the component, we use useState to define four state variables: email, 
password, confirmPassword, and error. email, password, and confirmPassword will 
be used to store the user input for the email address, password, and confirm password 
fields, respectively. error will be used to store error messages that may occur 
during authentication.
*/

export function UserAuthentication() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  
// * HANDLE SIGN IN *
/* 
handleSignIn is a function that will be called when the user clicks the 
"Sign In" button. Inside the function, we use Firebase Authentication's 
signInWithEmailAndPassword function to authenticate the user. If the authentication
is successful, we log the user object to the console. If there is an error during 
authentication, we log the error message to the console and set the error state 
variable to the error message.
*/
 // const handleSignIn = () => {
  //  firebase.auth().signInWithEmailAndPassword(email, password)
      //.then((userCredential) => {
        // Signed in
     //   const user = userCredential.user;
     //   console.log(user);
    //  })
    //  .catch((error) => {
   //     const errorCode = error.code;
   //     const errorMessage = error.message;
   //     console.log(errorCode, errorMessage);
   //     setError(errorMessage);
   //   });
 // };
  
// * HANDLE SIGN UP*
/* 
handleSignUp is a function that will be called when the user clicks the 
"Sign Up" button. We first check if the password and confirm password fields match. 
If they don't match, we set the error state variable to "Passwords do not match" and 
return from the function to prevent further execution. If the passwords match, we 
use bcrypt to hash the password before calling Firebase Authentication's 
createUserWithEmailAndPassword function to create a new user. If the user is 
successfully created, we log the user object to the console. If there is an error 
during user creation, we log the error message to the console and set the error state 
variable to the error message.
*/
  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    firebase.auth().createUserWithEmailAndPassword(email, hashedPassword)
      .then((userCredential) => {
         Signed up
       const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setError(errorMessage);
     });
  };


// *** RENDER THE UI ***
  
  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        required
      />

      <button onClick={handleSignIn}>Sign In</button>
     <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default UserAuthentication;

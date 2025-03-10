// // Random Password Generator

// function generatepassword(length , includeLowerCase , includeUpperCase , includeNumbers , includeSymbols) {

//     const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numbersChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+<>?:";
    
//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowerCase ? lowerCaseChars : "";
//     allowedChars += includeUpperCase ? upperCaseChars : "";
//     allowedChars += includeNumbers ? numbersChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     // console.log(allowedChars);

//     if(length <= 0){
//         return `(password length must be atleast 1)`;
//     }
//     if (allowedChars.length === 0) {
//         return `(Atleast 1 set of character needs to be selected)`;
//     }

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random()*allowedChars.length);
//         password += allowedChars[randomIndex];
        
//     }

//     return password;
// }

// const passwordLength = 8;
// const includeLowerCase = true;
// const includeUpperCase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatepassword(passwordLength , 
//                                   includeLowerCase , includeUpperCase , includeNumbers , 
//                                   includeSymbols);

// console.log(`Generated Password: ${password}`);


















function generatePassword() {
    const length = document.getElementById("length").value;
    const includeLowerCase = document.getElementById("lowercase").checked;
    const includeUpperCase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolChars = "@#$^&*";
    
    let allowedChars = "";
    let password = "";
    
    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    if (length <= 0) {
        document.getElementById("password").innerText = "Password length must be at least 1";
        return;
    }
    if (allowedChars.length === 0) {
        document.getElementById("password").innerText = "At least one set of characters must be selected";
        return;
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    
    document.getElementById("password").innerText = `Generated Password: ${password}`;
}
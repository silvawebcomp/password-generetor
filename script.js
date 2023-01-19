let displayPassword = document.getElementById("displayPassword")

function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyz1234567890@#$&*" + "ABCDEFGHIJLMNOPQRSTUVWXYZ";
    let passlen = 12;
    let password = "";
    for (let i = 1; i <= passlen; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1 );  
        console.log(randomNumber)
    }
    document.getElementById("displayPassword").value = password;
    console.log(displayPassword)
    // console.log( document.getElementById("generate").value = password)
};

function copyPassword(){
    let copyText = document.getElementById("displayPassword");
    // copyText.focus();
    copyText.select();
    navigator.clipboard.writeText(copyText.value)
    // document.execCommand(copyText.value);  
}
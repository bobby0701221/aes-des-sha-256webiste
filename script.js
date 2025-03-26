// AES Encryption
function encryptAES() {
    let plainText = document.getElementById("plain-text").value;
    let key = document.getElementById("key").value;

    if (!plainText || !key) {
        alert("Please enter text and key!");
        return;
    }

    let encrypted = CryptoJS.AES.encrypt(plainText, key).toString();
    redirectToResult("AES Encryption", encrypted);
}

// AES Decryption
function decryptAES() {
    let cipherText = document.getElementById("Cipher-text").value;
    let key = document.getElementById("key").value;

    if (!cipherText || !key) {
        alert("Please enter cipher text and key!");
        return;
    }

    let decrypted = CryptoJS.AES.decrypt(cipherText, key).toString(CryptoJS.enc.Utf8);
    if (!decrypted) {
        alert("Decryption failed! Check your key.");
        return;
    }

    redirectToResult("AES Decryption", decrypted);
}

// DES Encryption
function encryptDES() {
    let plainText = document.getElementById("plain-text").value;
    let key = document.getElementById("key").value;

    if (!plainText || !key) {
        alert("Please enter text and key!");
        return;
    }

    let encrypted = CryptoJS.DES.encrypt(plainText, key).toString();
    redirectToResult("DES Encryption", encrypted);
}

// DES Decryption
function decryptDES() {
    let cipherText = document.getElementById("Cipher-text").value;
    let key = document.getElementById("key").value;

    if (!cipherText || !key) {
        alert("Please enter cipher text and key!");
        return;
    }

    let decrypted = CryptoJS.DES.decrypt(cipherText, key).toString(CryptoJS.enc.Utf8);
    if (!decrypted) {
        alert("Decryption failed! Check your key.");
        return;
    }

    redirectToResult("DES Decryption", decrypted);
}

// SHA-256 Hashing (No decryption)
function hashSHA256() {
    let plainText = document.getElementById("plain-text").value;

    if (!plainText) {
        alert("Please enter text to hash!");
        return;
    }

    let hash = CryptoJS.SHA256(plainText).toString();
    redirectToResult("SHA-256 Hash", hash);
}

// Redirect to result.html with data
function redirectToResult(type, result) {
    localStorage.setItem("algorithm", type);
    localStorage.setItem("result", result);
    window.location.href = "result.html";
}

// Display the result on result.html
function displayResult() {
    document.getElementById("algoName").innerText = localStorage.getItem("algorithm") || "Result";
    document.getElementById("output").value = localStorage.getItem("result") || "No result available";
}

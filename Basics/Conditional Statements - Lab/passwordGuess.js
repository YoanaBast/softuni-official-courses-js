function passGuess(passw) {
    if (passw === 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

passGuess("s3cr3t!P@ssw0rd")
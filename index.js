function check(){
    const embed = document.getElementById("embed");
    const input = document.getElementById("url");
    let newUrl = input.value;

    let https = !newUrl.includes('https://');

    if(https) {
        newUrl = `https://${newUrl}`
    }
    
    embed.src = "https://www.whateverorigin.org/get?url=" + newUrl;
}

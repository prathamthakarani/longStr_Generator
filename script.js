function longText(str,n){
    let vowels = "aeiouAEiOU";
    let result = "";
    
    for(let charStr in str){
        for(let charVowel in vowels){
            if(str[charStr] == vowels[charVowel]){
                charCount = str[charStr].repeat(n-1);
                result += charCount ;
            }
        }
        result = result + str[charStr] ;
    }
    alert(result);
    
}
let str = prompt("enter your string");
let n = prompt("enter count");
longText(str, n);


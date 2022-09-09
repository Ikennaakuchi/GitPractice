const isAnagram = (str1,str2) => {
 let word1 = str1.split("").sort().join("")
 let word2 = str2.split("").sort().join("")
 console.log("word1 is "+ word1)
 console.log("word2 is "+ word2)
 if (word1 === word2){
    return true
 }else{
    return false
 }
}

module.exports = isAnagram
console.log(isAnagram("india", "nidia"))


























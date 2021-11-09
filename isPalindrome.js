const {reverseString} = require('./reverseString')

const isPalindrome = (str) => {
    let joinedOriginalString = str.split(" ").join('')
if(reverseString(joinedOriginalString.toLowerCase()) === joinedOriginalString.toLowerCase()){
    return true
}
 return false
}

module.exports = {isPalindrome}
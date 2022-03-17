let sentence = 'Wizkid o2 arena show was lit'
let vowels = 'aeiou'
function sentenceReader(sentence){
    console.log(`The length of the sentence is ${sentence.length}`);
    console.log(`The number of the word in the sentence is ${sentence.split(' ').length}`)
}

function vowel(sentence){
    // return sentence.match(/[aeiou]/gi)?sentence.match(/[aeiou]/gi).length:0
    if (sentence.match(/[aeiou]/gi)){
        return (sentence.match(/[aeiou]/gi).length);
    }
    else {
        return 0;
    }
}

console.log(vowel(sentence))
// sentenceReader(sentence)

// write a search procedure (C,STR,VARFIND, VARPOS) which searches for a character C in a string STR , and returns its postion if it exists. FIND will be true is the element exists 

// write a DELETE  procedure (C,STR,VARFIND)  which deletes the firstoccurence of a character C in a string STR , if it exists 

// write  a DELETE_ALL procedure (C,STR) which deletes all occurecnce of an element of an element C in a string STR, if it exists

// let text = (C,STR,VARFIND, VARPOS)
// // let postion = text.search("C")


// function text(C,STR,VARFIND, VARPOS){
//     if 
// }

// function inString(searchStr, searchC) {

//     let index = searchStr.indexof(searchC);

//     if(index !== -1) return index;
//     return;
// }


// function searchProcedure(c, str, find, pos) {
//     pos = inString (str, c)
//      find = Boolean(pos)

// }


// let sentence = "Smart learn from everything and everyone, average people from their experience, stupid already, have all the answers"
// let vowels = []

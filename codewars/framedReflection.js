/**
 * You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. 
 * Responsibilities:
 * 1. Reverse string
 * 2. Wrap in mirror
 * 
 * Error Checks:
 * 1. What is calling this and what should be returned if the input is not of type String.
 */

const  mirror = (text) => {
  // BEGIN: Helper functions
  //    Spit a string into single words and reverse each word.
  const reverseTxt = (txt) => {
    
    let wordArray = txt.split(' ');
    
    wordArray.forEach((word, index) => {
      wordArray[index] = reverseWord(word);
    });

    return wordArray.join(' ');
  };
  
  //    Reverse the characters in a single word.
  const reverseWord = (word) => {
    let charArray = word.split('');
    let i = 0;
    let j = charArray.length - 1;
    
    while (i < j) {
      let temp = charArray[i];
      charArray[i] = charArray[j];
      charArray[j] = temp;
      i++;
      j--;
    }
    
    return charArray.join('');
  }

  //   Format the text.
  const wrapTextInMirror = (txt) => {
    let words = txt.split(' ');
    let maxWordChars = 0;
    let result = '';

    // Iterate the array to Get the length of the longest word, then you know how many characters to output.
    words.forEach((word) => {
      if (word.length > maxWordChars) maxWordChars = word.length;
    });
    // Begin writing lines for each word in the array plus the first and last line.
    words.forEach((word, index) => {
      // Append each work with additional spaces as needed.
      let spaces = maxWordChars - word.length;
      let lineFill = new Array(spaces);
      lineFill.fill(' ');
      words[index] = '* ' + word + lineFill.join('') + ' *\n';
    });

    let topBottom = new Array(maxWordChars + 4);
    topBottom.fill('*');
    topBottom = topBottom.join('');
    
    result = topBottom + '\n';
    words.forEach((word) => {
      result += word;
    });
    result += topBottom;

    return result;
  };
  // END: Helper functions.

  return wrapTextInMirror(reverseTxt(text));
}

console.log(mirror('reverse this'));


/**
 * Solution from another user on Codewars.
 * I like this because it follows the same logical steps as mine,
 * but is significantly shorter in lines of code. It takes more of a functional approach
 * and uses spread syntax cleverly.
 */
function mirror2(s){
  let a = s.split(' ');
  let m = Math.max(...a.map(x=>x.length));
  a = a.map(x=>'* '+[...x].reverse().join('')+' '.repeat(m-x.length)+' *');
  return ['*'.repeat(m+4),...a,'*'.repeat(m+4)].join('\n');
}

console.log(mirror2('reverse this'));

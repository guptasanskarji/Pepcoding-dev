///////////////////   STRING (13/02/2022)   //////////////////////

// String :- it is a sequence of characters

        var str = "Hello Pepcoders";
        console.log(str);

        console.log(str[8]);     // output :- p
        console.log(str.length);

        // strings in js are immutable
        str[4] = "z";
        console.log(str);
        

// String methods 
 
// 1). Extraction method

     // slice method  :- slice(start, end-1) :- start index is inclusive and end index is exclusive

        var slicedStr = str.slice(2,8);     // 2nd index se start krenge or (8-1)=7 index tk print krenge
        console.log(slicedStr);
        console.log(str);                   // original source of information is not changed "original string par koi effect nhi padega string me hmesha nai string lete h"

        var slicedStr = str.slice(3);      // 3rd index se start krenge or end tk poori print hogi
        console.log(slicedStr);

        var slicedStr = str.slice(2,-4);    // 2nd index se start krenge or end se 4rth index tk chhod kr saare print honge
        console.log(slicedStr);

    // substring method  :- substr(start, length)  :- start index se shuru hoga or jitne character print krne hai vha se vo length 
        
        var ans = str.substr(2, 7);
        console.log(ans);
        console.log(str);

   // replacing the string 

        str = "SANSKAR"
        console.log(str);

        console.log(str.toLowerCase());       // lower case

        str = "gupta"
        console.log(str.toUpperCase());      // upper case
        console.log(str);                    // no any effect on string

  // Concatenating :- combine 2 string and make them one string

  let firstStr = "Believe in ";
  let secondStr = "yourself";

  var concatenateStr = firstStr + secondStr;
  console.log(concatenateStr);

  var concatenateStr = firstStr.concat(secondStr, " and me");
  console.log(concatenateStr);

  // Trim method :- removes all the start and end white spaces but not middle

  let trimStr = "                                Hello                How are you              ";
  console.log(trimStr);
  console.log(trimStr.length);

  console.log(trimStr.trim());
  console.log(trimStr.trim().length);

  



        



// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}

function dscount(startStr, char1, char2){
    let counter = 0;
    let str = startStr.toLowerCase();
    let c1 = char1.toLowerCase();
    let c2 = char2.toLowerCase();
    for(let i = 0; i<str.length-1; i++){
        if((str.charAt(i) == char1) && (str.charAt(i+1) == char2)){ 
            counter++;
        }
    }
    return counter;
}

function checkSyntax(str){
    let open = ["<", "(", "{", "["];
    let close = [">", ")", "}", "]"];
    let a = [];
    for(let i=0;i<str.length; i++){
        if(open.indexOf(str.charAt(i)) != -1){
            a.push(str.charAt(i));
        }
        else if (close.indexOf(str.charAt(i)) != -1){
            if (close.indexOf(str.charAt(i)) == open.indexOf(a[a.length-1])){
                a.pop();
            }
            else{
                a.push(str.charAt(i));
            }
        }
    }
    return a.length === 0 ? 0 : 1;
}

console.clear();

try {
    console.log("Задача 1. БАЗА")
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2); 
    
    // test(checkSyntax,"---(++++)----", 0)
    // test(checkSyntax,"", 0)
    // test(checkSyntax,"before ( middle []) after ", 0)
    // test(checkSyntax,") (", 1)
    // test(checkSyntax,"} {", 1)
    // test(checkSyntax,"< ( > ) >", 1)
    // test(checkSyntax,"(  [  <>  ()  ]  <>  )", 0)
    // test(checkSyntax,"  (      [)", 1)

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

console.log("Задача 2. БАЗА")
console.log("Получено: " + checkSyntax("---(++++)----") + " Ожидаемо: 0");
console.log("Получено: " + checkSyntax("") + " Ожидаемо: 0");
console.log("Получено: " + checkSyntax("before ( middle []) after ") + " Ожидаемо: 0");
console.log("Получено: " + checkSyntax(") (") + " Ожидаемо: 1");  
console.log("Получено: " + checkSyntax("} {") + " Ожидаемо: 1");
console.log("Получено: " + checkSyntax("<(   >)") + " Ожидаемо: 1");
console.log("Получено: " + checkSyntax("(  [  <>  ()  ]  <>  )") + " Ожидаемо: 0");
console.log("Получено: " + checkSyntax("   (      [)") + " Ожидаемо: 1");



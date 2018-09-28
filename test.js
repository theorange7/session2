function remove(card){
    var digit = card.split("-");
    var newCard = ""
    for (i = 0; i < digit.length; i++) { 
        newCard = newCard+ digit[i];
    }

    return newCard
};


function validateCreditCard(input) {
    var card = remove(input)
    result = true

    // All have to be digit
    for (i = 0; i<16;i++){
        if (typeof card[i] != "number"){
            result = false
        }
    }

    //At least 2 different digits
    var numberList = []
    for (i = 0; i<16;i++){
        if (numberList.includes(card[i]) == false ){
            numberList.push(card[i])}
        
    }

    if (numberList.length == 1){
        result = false
    }


    //The final digit is even
    if (Number(card[-1]) % 2 != 0 ){
        result = false
    }


    //sum of all digits > 16
    sum = 0
    for (i = 0; i<16;i++){
        sum += Number(card[i])
        
    }

    if (sum <= 16){
        return false
    }

    console.log(result)
};

validateCreditCard("9999-9999-8888-0000");
//
// My Sample App
//



function interestCalculator(){
    var principal = Number(document.getElementById('principal').value)
    var tenor = Number(document.getElementById('tenor').value)

    if (tenor > 9){
        rate = 0.18
    }
    else if (tenor <= 9 && tenor > 6 ){
        rate = 0.15
    }
    else if(tenor <= 6 && tenor > 3){
        rate = 0.12
    }
    else if( tenor <= 3 && tenor >= 1){
        rate = 0.09
    }

    document.getElementById('result').innerHTML= principal + (principal * (tenor/12) * rate);
}
document.getElementById('calculate').addEventListener('click', interestCalculator)
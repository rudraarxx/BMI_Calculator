// function convert(){
//     var hValue=document.querySelector('#numId').value;
//     var mValue= hValue/3.281;
//     document.getElementById('result').innerText=mValue;
// }
// convert();

function bmiCalc(){
    var footVal=document.myBmi.txtFoot.value;
    var inchVal=document.myBmi.txtInch.value;
    var mFoot=footVal/3.281;
    var mInch=inchVal/39.37;
    var mValue=mFoot+mInch;
    var wValue=document.myBmi.txtWeight.value;
    var bmi;
    bmi=wValue/Math.pow(mValue,2);
    if(bmi<18.5){
        swal(bmi.toFixed(2), "You are Underweight","error");
        return false;
    }
    else if(bmi>=18.5 && bmi<25){
        swal(bmi.toFixed(2), "You have Normal weight", "success");
        return false;
    }
    else if(bmi>=25 && bmi<30){
        swal(bmi.toFixed(2), "You are Overweight", "error");
        return false;
    }
    else if(bmi>=30 && bmi<35){
        swal(bmi.toFixed(2), "You suffer from Obesity class-I", "warning");
        return false;
    }
    else if(bmi>=35 && bmi<40){
        swal(bmi.toFixed(2), "You suffer from Obesity class-II", "warning");
        return false;
    }
    else if(bmi>=40){
        swal(bmi.toFixed(2), "You suffer from Obesity class-III", "warning");
        return false;
    }

}

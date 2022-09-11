// Made by Isaac Hus, September 2022
// JS file to calculate head measument stats for AHS physios
// For Head measurement applet run on web browser
// Github: 1saacH

function change_answer (){
    var Width = parseFloat(document.getElementById('CW').value);
    var Length = parseFloat(document.getElementById('CL').value);
    var DA =  parseFloat(document.getElementById('DA').value);
    var DB =  parseFloat(document.getElementById('DB').value);
    var index, bigger_diag, Asym_index, interm_diff;
    interm_diff = Math.abs(DA - DB);
    index = (Width/Length) * 100;
    if (DA > DB){bigger_diag = DA;}
    else if (DA > DB){bigger_diag = DB;}
    else{bigger_diag = DA;}
    Asym_index = (interm_diff / bigger_diag) * 100;
    var toprint = 'The cranial index is: ' + index.toFixed(2) + '. The cranial vault asymmetry index is: ' + Asym_index.toFixed(2);
    document.getElementById('answer').innerHTML = toprint;
}
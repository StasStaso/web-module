
var array = ["Кот", "Ручка", "Стол", "Камера"]; 


function yourfunction(){

    var x = document.getElementById("val").value;

    for(var i=0; i < array.length; i++)
    {
        if(x == array[i])
        {
            alert(x);          
        }else{ alert("exeptiom"); break;}

    }
}


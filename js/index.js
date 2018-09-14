var search=document.getElementById('search');
var input=document.getElementById('input');
search.onclick= function () {
    if(input.style.display=='block'){
        input.style.display='none';
    }
    else{
        input.style.display='block';
    }
};


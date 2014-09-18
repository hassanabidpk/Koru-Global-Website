function premier(n) {
    for(var i = 1; i < 3; i++) {
        obj = document.getElementById('premier'+i);
        img = document.getElementById('premier_button'+i);
        if ( n == i ) {
            obj.style.display = "block";
                        img.height = 31;
            img.src = "../images/tab11on"+i+".gif";    
        } else {
            obj.style.display = "none";
                        img.height = 31;
            img.src = "../images/tab11off"+i+".gif";
        }
    }
}

function l_premier(n) {
    for(var i = 1; i < 3; i++) {
        obj = document.getElementById('l_premier'+i);
        img = document.getElementById('l_premier_button'+i);
        if ( n == i ) {
            obj.style.display = "block";
                        img.height = 31;
            img.src = "../images/l_tab11on"+i+".gif";    
        } else {
            obj.style.display = "none";
                        img.height = 31;
            img.src = "../images/l_tab11off"+i+".gif";
        }
    }
}
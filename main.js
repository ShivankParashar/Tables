element1 = 0;
element2 = 0;
element3 = 0;
element4 = 0;
element5 = 0;
element6 = 0;
element7 = 0;
element8 = 0;
element9 = 0;
element10 = 0;

function show() {
    store = document.getElementById("numholder").value;

    element1 = store*1;
    document.getElementById("n1").innerHTML = element1;

    element2 = store*2;
    document.getElementById("n2").innerHTML = element2;

    element3 = store * 3;
    document.getElementById("n3").innerHTML = element3;

    element4 = store * 4;
    document.getElementById("n4").innerHTML = element4;

    element5 = store * 5;
    document.getElementById("n5").innerHTML = element5;

    element6 = store * 6;
    document.getElementById("n6").innerHTML = element6;

    element7 = store * 7;
    document.getElementById("n7").innerHTML = element7;

    element8 = store * 8;
    document.getElementById("n8").innerHTML = element8;

    element9 = store * 9;
    document.getElementById("n9").innerHTML = element9;

    element10 = store * 10;
    document.getElementById("n10").innerHTML = element10;
}
// variable

// var one = 10,
//     two = 20,
//     three = 30,
//     four = 40;

// alert (one*two/three-four)

// var example = {"start" : "hello", "hi" : "hi", "good" : "good", "bye" : "bye", "mark": "55.8"};

// alert("forst one:" + example["start"]);
// alert("second one:" + example["hi"]);
// alert("third one:" + example["bye"]);

// var content = "We are here with them"

// alert(content.length)

// document.write(content)

// var content = "hello world wlcome to our world";
// var well = content.indexOf("world");

// alert(well);

// var content = "hello world welcome to our world";
// var well = content.lastindexOf("world");

// alert(well);

// function kaj () {
//     alert ("this is hacked");
//     alert ("still using this pc?");
//     console.log ("keno click korlen vai");
//     document.write ("voi nai naki");
//     alert("jak allohr nam niye suya poren")
// }

// function name(param1, param2) {
//     console.log (param1 + param2);
// }

// name(argument1, argument2);

// document.getElementById("text").style.color = "red";
// document.getElementById("text").style.fontSize = "30px";
// document.getElementById("text").style.fontFamily = "arial";
// document.getElementById("text").style.backgroundColor = "grey";

var age = prompt ("enter your age");

if (age <= 19 && age >= 13) {
    document.write ("teen ager apni");
}

else if (age < 30 && age <= 100) {
    document.write("vai boyos to khub besi na");
}

else if (age <= 40 && age >= 20 ){
    document.write ( "middle age" );
}

else if (age <= 80 && age >= 41 ){
    document.write ( "neme poren dhormo chorcha te" );
}



else if (age < 0 || age > 100) {
    document.write ("vai abar lekhen ki likhlen kichu bujha jai na")
}

else {
    document.write("vai bura hoye jaben biya kore nen");
}


function translatePigLatin(str) {

    switch (str[0]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            str = str + "way";
            return str;

    }

    for (var i = 0; i < str.length; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            str = str.substr(i) + str.slice(0, i) + "ay";
            console.log(str);
            return str;
        }
    }


    return str;


}

translatePigLatin("consonant");
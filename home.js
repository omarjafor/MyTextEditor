function f1() {
    document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
    document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
    document.getElementById("textarea1").style.textDecoration = "underline";
}

function f4() {
    document.getElementById("textarea1").style.textAlign = "left";
}

function f5() {
    document.getElementById("textarea1").style.textAlign = "center";
}

function f6() {
    document.getElementById("textarea1").style.textAlign = "right";
}

function f7() {
    document.getElementById("textarea1").style.textAlign = "justify";
}

function f8() {
    const fontSize = document.getElementById('fontSize');
    fontSize.addEventListener('input', function () {
        document.getElementById("textarea1").style.fontSize = this.value + 'px';
    })

}

function f9() {
    document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f10() {
    const color = document.getElementById('myColor');
    color.addEventListener('input', function () {
        document.getElementById("textarea1").style.color = this.value;
    });
}

function f11() {
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = '';
}
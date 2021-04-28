

function pronuns() {
    var mylist = document.getElementById("myList");
    document.getElementById("pronouns").value = mylist.options[mylist.selectedIndex].text;
}

//get button reference
var myBtn = document.getElementById('myBtn');

//add click function
myBtn.addEventListener('click', function (event) {
    addField();
});

//it's more efficient to get the form reference outside of the function, rather than getting it each time
var form = document.getElementById('myForm');

function addField() {
    var input = document.createElement('input');
    form.appendChild(input);
}

new ReinventedColorWheel({
    onChange: function (color) {
        // the received argument `color` is the ReinventedColorWheel instance itself.
        // console.log("hsl:", color.hsl[0], color.hsl[1], color.hsl[2]);
        // console.log("hsv:", color.hsv[0], color.hsv[1], color.hsv[2]);
    },
})
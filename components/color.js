AFRAME.registerComponent('change-color', {
    schema: {
        color: {default: ''}
    },
    init: function(){
        var data = this.data;
        this.el.addEventListener('click', function(){
            //this.setAttribute('color', getRandomColor());
            console.log("in function");
            let currcolor = this.getAttribute("material").color;
            this.setAttribute('color', setNewColor(currcolor))
        })
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setNewColor(color) {
    const colors = [
        "blueviolet",
        "firebrick",
        "darkorange",
        "skyblue",
        "darkblue",
        "sienna",
        "lightgrey",
        "darkseagreen",
        ];
    let index = colors.indexOf(color) + 1;
    if (index >= colors.length) { index = 0; }
    return colors[index];

}
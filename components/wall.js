AFRAME.registerComponent('change-wall-color', {
    schema: {
        color: {default: ''}
    },
    init: function(){
        var data = this.data;
        this.el.addEventListener('click', function(){
            let currcolor = this.getAttribute("material").color;
            let walls = document.querySelectorAll(".wall");
            walls.forEach(function (elem) {
                elem.setAttribute("color", setNewColor(currcolor))
            })
        })
    }
});

function setNewColor(color) {
    const colors = [
        "antiquewhite",
        "burlywood",
        "darkgrey",
        "skyblue",
        "sienna",
        "lightgrey",
    ];
    let index = colors.indexOf(color) + 1;
    if (index >= colors.length) {
        index = 0;
    }
    return colors[index];
}


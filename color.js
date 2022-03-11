AFRAME.registerComponent('change-color', {
    schema: {
        color: {default: ''}
    },
    init: function(){
        var data = this.data;
        this.el.addEventListener('click', function(){
            this.setAttribute('color', getRandomColor());
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
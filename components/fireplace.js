AFRAME.registerComponent('change-fireplace-model', {
    schema: {
        visibility: { default: '' }
    },
    init: function(){
        var data = this.data;
        this.el.addEventListener('click', function(){
            let f1 = document.querySelector('#fireplace1');
            let f2 = document.querySelector('#fireplace2');
            if (f1.getAttribute('visible') === false) {
                f1.setAttribute('visible', 'true');
                f2.setAttribute('visible', 'false');
            } else {
                f1.setAttribute('visible', 'false');
                f2.setAttribute('visible', 'true');
            }
        })
    }
});
AFRAME.registerComponent('change-object', {
    schema: {
        visibility: { default: '' }
    },
    init: function(){
        var data = this.data;
        this.el.addEventListener('click', function(){
            //let o1 = document.querySelector('#pool');
            let o2 = document.querySelector('#motor');
            let o3 = document.querySelector('#gym-run-jog');
            /*
            if (o1.getAttribute('visible') === true) {
                o1.setAttribute('visible', 'false');
                o2.setAttribute('visible', 'true');
            } else
            */
            if (o2.getAttribute('visible') === true){
                o2.setAttribute('visible', 'false');
                o3.setAttribute('visible', 'true');
            } else {
                o3.setAttribute('visible', 'false');
                o2.setAttribute('visible', 'true');
            }
        })
    }
});
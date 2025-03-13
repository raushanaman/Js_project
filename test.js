const button1 = document.querySelectorAll('.buttons')

const body = document.querySelector("body")

button1.forEach(function(buttons){
    buttons.addEventListener('click', function(e){
        console.log(e.target);
        if(e.target.id ==='grey'){
            body.style.backgroundColor = 'grey' //or e.target.id
        }

        if(e.target.id ==='white'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id
        }

        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id
        }

    });

});
const form = document.querySelector('form');
const email = document.getElementById('email');
const submit = document.querySelector('submit');
const error = document.getElementById('error');
const expresion = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

let campo = false;

const validate = (e)=>{
    if(expresion.test(e.target.value)){
        document.getElementById('error').classList.remove('invalid-show');
        campo = true;
    }
    else{
        document.getElementById('error').classList.add('invalid-show');
        setTimeout(()=>{
            document.getElementById('error').classList.remove('invalid-show');
        }, 3000)
        campo = false;
    }
}

email.addEventListener('keyup', validate);
email.addEventListener('blur', validate);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campo){
        form.reset();
    }
    else{
        document.getElementById('error').classList.add('invalid-show');
        setTimeout(()=>{
            document.getElementById('error').classList.remove('invalid-show');
        }, 3000)
    }
});
let form = document.querySelector('.form-register');


let progressOptions = document.querySelectorAll('.progressbar__option');

//se agrega el evento click a todo el formulario
form.addEventListener('click',function(e){
	let element = e.target;
	let isButtonNext = element.classList.contains('step__button--next');
	let isButtonBack = element.classList.contains('step__button--back');
	//si se apretan los botones de siguiente o regresar
	if(isButtonNext || isButtonBack){
		//console.log('es boton');
		//vamos a verificar en que paso nos encontramos
		let currentStep = document.getElementById('step-'+ element.dataset.step);

		//ver a donde vamos a avanzar
		let jumpStep = document.getElementById('step-'+ element.dataset.to_step);
		
		currentStep.addEventListener('animationend',function callback(){
			//al paso actual le quitamos la clase active
			currentStep.classList.remove('active');
			jumpStep.classList.add('active');//le agregamos la clase active

			//verificamos si se preciono el boton siguiente
			if(isButtonNext){
				currentStep.classList.add('to-left');
				progressOptions[element.dataset.to_step - 1].classList.add('active');//agregamos la clase activa para que las cajitas se animen
			}else{
				jumpStep.classList.remove('to-left');
				progressOptions[element.dataset.step - 1].classList.remove('active');//quitamos la clase activa de las cajita
			}
			currentStep.removeEventListener('animationend',callback);s
			
		});

		
		currentStep.classList.add('inactive');
		jumpStep.classList.remove('inactive');
	}
})
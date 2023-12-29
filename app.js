window.onload = () => {
     const  button = document.querySelector('#btn');
     button.addEventListener('click', calculateBMI)
}

function calculateBMI()
{
    const  height = document.querySelector('#height').value;
    const  weight = document.querySelector('#weight').value;
    const  result = document.querySelector('#result'); 

    if(!height || !weight|| height<0 || isNaN(height)||weight<0 ||isNaN(weight))
    {
        result.innerHTML  ="Please provide a vaild Height and Weight";
        return;
    }

    const bmi =(weight/ ((height*height)/10000)).toFixed(2);

    if(bmi<18.5)
    {
        result.innerText  = `Under Weight :${bmi}`;
    }else if(bmi>18.5 && bmi<24.9)
    {
        result.innerText  = `Normal :${bmi}`;
    }else if(bmi>25 && bmi<29.9)
    {
        result.innerText  = `Over Weight :${bmi}`;
    }else if(bmi>30 && bmi<34.9)
    {
        result.innerText  = `Obesity (Class 1) :${bmi}`;
    }else if(bmi>35 && bmi<39.9)
    {
        result.innerText  = `Obesity (Class 2) :${bmi}`;
    }else
    {
        result.innerText  = `Extreme Obesity  :${bmi}`;
    }
}
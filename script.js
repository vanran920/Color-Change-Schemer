const buttons = document.querySelectorAll('.button')
console.log(buttons)


const body = document.querySelector('body')
// There are many event in the browser like moving a cursor, closing a 
// a tap is also an event

buttons.forEach(function(button)
{
    console.log(button) 
    // Now we add event listener ( one who listern all the event. )
    button.addEventListener('click',function(e){ // Here i add a event listener , click -> whose he have to listern and  fuction(e) -> call back function. // e is a name of object
    console.log(e)
    console.log(e.target) // From where click is comming. 
    // if(e.target.id === 'green' )
    //     {
    //         body.style.backgroundColor = 'green'
    //     }
    // if(e.target.id === 'red')
    //     {
    //        body.style.backgroundColor = 'red'
    //     }
    // if(e.target.id === 'blue')
    //     {
    //        body.style.backgroundColor = 'blue'
    //     }
    // if(e.target.id === 'yellow')
    //     {
    //        body.style.backgroundColor = 'yellow'
    //     }
    switch(e.target.id)
    {
        case 'green' :
            body.style.backgroundColor = 'green'
            break;
        
        case 'red' :
            body.style.backgroundColor = 'red'
            break;

        case 'blue' :
            body.style.backgroundColor = 'blue'
            break;

        case 'yellow' :
            body.style.backgroundColor = 'yellow'
            break;
        
        case 'purple' :
            body.style.backgroundColor = 'blueviolet'
            break;
    }
})
})
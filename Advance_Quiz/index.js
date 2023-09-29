const Questions = [
    {
        "id" :1,
        "que" :"Which of the following is a client side language ?",
        "a" :"C",
        "b" :"Java",
        "c" :"Python",
        "d" :"Javascript",
        "correct" :"Python",


    },
    {
        "id" :2,
        "que" :"What is the size of float and double in java?",
        "a" :"32 and 64",
        "b" :"32 and 32",
        "c" :"64 and 64",
        "d" :"64 and 32",
        "correct" :"32 and 32",

    },
    {   
        "id" :3,
        "que" :"Automatic type conversion is possible in which of the possible cases?",
        "a" :"Byte to int",
        "b" :"Int to long",
        "c" :"Long to int",
        "d" :"Short to int",
        "correct" :"Int to long",
    },
    {   
        "id" :3,
        "que" :"When an array is passed to a method, what does the method receive?",
        "a" :"The reference of the array",
        "b" :"Copy of the array",
        "c" :"Length of the array",
        "d" :'Copy of first element',
        "correct" :"Length of the array",
    },
   
]

const mai = document.getElementById('mai');

let items ="";
console.log(Questions.length)
for(let i=0; i<Questions.length;i++){
items+=`
<form action="" id="main" class="question-form">
<table >
    <tbody> 
        
        <tr>
            <td id="num">${i+1}.</td>
            <td id="questionbox">${Questions[i].que}</td>
        </tr>
        <tr>
            <td>

            </td>
            <td>
                <p>
                    <input type="radio" name="opti" id="" class="option" value="${Questions[i].a}">${Questions[i].a}
                </p>
               
            </td>
        </tr>
        <tr>
            <td>

            </td>
            <td>
                <p>
                    <input type="radio" name="opti" id="" class="option" value="${Questions[i].b}">${Questions[i].b}
                </p>
                
            </td>
        </tr>
        <tr>
            <td>

            </td>
            <td>
                <p>
                    <input type="radio" name="opti" id="" class="option" value="${Questions[i].c}">${Questions[i].c}
                </p>
                
            </td>
        </tr>
        <tr>
            <td>

            </td>
            <td>
                <p>
                    <input type="radio" name="opti" id="" class="option" value="${Questions[i].d}">${Questions[i].d}
                </p>
                
            </td>
        </tr>
    </tbody>
</table>
<button type="submit">Button    </button>
</form>`
}

mai.innerHTML = items;


// Assuming you have given each form a class "question-form"
const questionForms = document.querySelectorAll('.question-form');
// console.log(questionForms)
const urlParams = new URLSearchParams(window.location.search);
      const emailParam = urlParams.get('email');
      var score =0;
questionForms.forEach(function(form, index) {
   
  form.addEventListener('submit', function(event) {
   
    event.preventDefault(); // Prevent the default form submission behavior
    var userData = JSON.parse(localStorage.getItem(`${emailParam}`)) ?? [];   
    const radioButtons = form.querySelectorAll('input[name="opti"]');
    radioButtons.forEach(function(radioButton) {
        if (radioButton.checked) {
          // Log the value of the selected radio button
          console.log(`Question ${index + 1} - Selected option: ${radioButton.value}`);
         if( radioButton.value==Questions[index].correct){
            score++;
         }
          userData.push({
            'index':index+1,
            'email':Questions[index].que,
            'Answer':radioButton.value,
            'score': score,
        })
        localStorage.setItem(`${emailParam}`,JSON.stringify(userData));

        }
        
        // Disable all radio buttons in the same form
        radioButton.disabled = true;
      });
    
      
      console.log(emailParam);
  });
});



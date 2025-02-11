 document.addEventListener("DOMContentLoaded",(e)=>{
    e.preventDefault()

    const inputName = document.querySelectorAll('input[type="texte"]')[0]
    const inputLastName = document.querySelectorAll('input[type="texte"]')[1]
    console.log(inputLastName)

    const btn_submit = document.getElementsByTagName('input')[2]
   
    btn_submit.addEventListener("click",(e)=>{
      e.preventDefault()
      swal.fire({

       title: "Good job!",
       text: "You clicked the button!",
      icon: "success"

      })

    })
   
 })
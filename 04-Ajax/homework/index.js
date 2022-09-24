$('#boton').click(()=>{
    var list = $('#lista');
    list.empty();
    $.get('http://localhost:5000/amigos'), (data) => {
       for (let i = 0; i < data.length; i++) {
        list.append(`<li>${data[i].name}</li>`)
        
       } 
    }
});

$('#search').click(()=>{
let searchId = $('#input').val();
$.get(`http://localhost:5000/amigos/${searchId}`, (data)=>{
$('#amigo').text(data.name);
});
});

$('#delete').click(()=>{
    const valorDelInput= $('#inputDelete').val()
    if(!valorDelInput) return alert('Es necesario agregar el Id de un amigo para borrar')
    $.ajax({
        url:`http://localhost:5000/amigos/${searchId}`,
        type: "DELETE",
        success:(data)=> {
                 console.log(data)
                 $('#inputDelete').val('')
        }
    })
})
    
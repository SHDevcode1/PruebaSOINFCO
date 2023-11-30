function getUsers(done){

    const results = fetch("https://api.escuelajs.co/api/v1/users/");

    results
        .then(response => response.json())
        .then(data => {
            done(data);
            console.log(data);
        });
}

let head = false;

getUsers(data => {
    data.forEach(personaje => {
        console.log(personaje);

        const article = document.createRange().createContextualFragment(`
            <article class="image-container">
                <table class="table">
                    <thead>
                        ${!head ? `<tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Eliminar</th>
                        </tr>` : ''}
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">${personaje.id}</th>
                            <td>${personaje.name}</td>
                            <td>${personaje.email}</td>
                            <td>${personaje.role}</td>
                            <td><img src="${personaje.avatar}" alt="Personaje"></td>
                            <td><input type="button" class="btn btn-danger" value="Eliminar" /></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        `);
        

        head = true; // Cambia head a true después de la primera iteración para que no se repita 

        const main = document.querySelector("main");

        main.append(article);

    });

    //Oculta fila 
    $(document).on('click', '.btn', function(event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });

    
    
});


// getUsers(data =>{
//     console.log(data.results);
// });
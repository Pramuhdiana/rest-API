

$('#search-button').on('click', function () {
    
$.ajax({
    url: 'http://www.omdbapi.com', //urlnya
    type: 'get', //typenya get
    dataType: 'json', //kembaliannya ingin json
    data: {
        'apikey': '1b740c2c', //id apikeynya
        's': $('#search-input').val() //s untuk search (parameter di website omdbnya)
    },
    //jika berhasil maka
    success: function (result) {
        console.log(result);
    //     if (result.Response == "True")
    //     {
    //         //agar bisa mengambil searchnya
    //         let movies = result.Search;

    //         //looping data 
    //         $.each(movies, function (i, data) {
    //             $('#movie-list').append(`
    //   <div class="card">
    //     <img src="`+ data.Poster +` class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">Card title</h5>
    //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //     </div>
    //             `)
    //         })

    //     } else
    //     {
    //         $('#movie-list').html(`
    //         <div class="col">
    //         <h1 class="text-center">`+ result.Error +`</h1>
    //         </div>
    //         `)
    //     }
    }
});

});
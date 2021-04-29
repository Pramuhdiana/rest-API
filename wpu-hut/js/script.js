function tampilkanSemuaMenu()
{

    // menangkap JSON
    $.getJSON('data/pizza.json', function(data)
    {
        //jika jsonnya berhasil di tangkap maka
        let menu = data.menu; //untuk menghilangkan key menunya
    
        // melakukan pengulangan
        $.each(menu, function(i, data)//ambil semua elemen yang ada di menu
        {
            //jquery mencari id daftar-menu
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3""><img src=" img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a> </div></div></div>')
        }); 
    });
}

tampilkanSemuaMenu();


// event pada saat li di klik
$('.nav-link').on('click', function()
{
    $('.nav-link').removeClass('active'); //menghilangkan active
    $(this).addClass('active'); //menambahkan active yang sedang di klik

    let kategori = $(this).html(); //cara mengambil menu kategori
     $('h1').html(kategori); //untuk judul

    if( kategori == 'All menu' ) 
    {
        tampilkanSemuaMenu();
        return; //agar keluar dari function
    }


    // untuk menu
    $.getJSON('data/pizza.json', function(data)
    {
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data)
        {
            //jika kategori sama dengan kategori yang di klik maka
            if( data.kategori == kategori.toLowerCase())
            {
                content += '<div class="col-md-4"><div class="card mb-3""><img src=" img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">Rp. '+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a> </div></div></div>';
            }
        });
        $('#daftar-menu').html(content);
    });

});
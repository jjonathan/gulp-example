$(function(){  
    distImagePath = './assets/dist/img/';
    var h1 = "<h1>Gulp Example</h1>";
    var images = [
        '<img src="' + distImagePath + 'img1.jpg">',
        '<img src="' + distImagePath + 'img2.jpg">',
        '<img src="' + distImagePath + 'img3.jpg">',
    ];
    for (var i = images.length - 1; i >= 0; i--) {
        images[i] = '<div class="col-md-4">' + 
            '<div class="thumbnail">' + 
                '<a href="' + distImagePath + 'img' + (i + 1) + '.jpg">' +
                    images[i] + 
                    '<div class="caption"><p>Imagem ' + (i + 1) + '</p></div>' +
                '</a>' +
            '</div>' +
        '</div>';
    }
	$("body").append(h1);
    $("body").append('<div class="row col-md-11"></div>');
    $(".row").append(images);
});
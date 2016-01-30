'use strict';

$(function () {

    $('#target').find('li:even').css({
        color: 'red'
    }).append(' - marks with red by jQuery')

});

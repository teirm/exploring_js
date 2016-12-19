function chess_board (board_symbol, width, height) {
    var base_string = "";    

    for (var i = 0; i < width; i++) {
        if (i % 2 == 0) base_string += board_symbol;
        else base_string += " ";
    }

    for (var j = 0; j < height; j++) {
        if (j % 2 == 0) console.log(base_string.slice(1,width) + board_symbol);
        else console.log(base_string);
    }
}    


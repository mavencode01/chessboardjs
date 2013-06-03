var board = new ChessBoard('board');

$('#setStartBtn').on('click', function() {
  board.start(false);
});

$('#setRookCheckmateBtn').on('click', function() {
  var rookCheckmate = {
    a4: 'bK',
    c4: 'wK',
    a7: 'wR'
  };
  board.position(rookCheckmate, false);
});

$('#setRuyLopezBtn').on('click', function() {
  var ruyLopez = '2bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R/w';
  board.position(ruyLopez, false);
});
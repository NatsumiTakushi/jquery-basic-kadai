$(function() {
    // 色が変わる
    $('#change-color').click(function() {
        $('#target').css('color', 'red');
    });

    // 文字が変わる
    $('#change-text').click(function() {
        $('#target').text('Hello!');
    });

    // フェードアウト
    $('#fade-out').click(function() {
        $('#target').fadeOut();
    });

    // フェードイン
    $('#fade-in').click(function() {
        $('#target').fadeIn();
    });
});
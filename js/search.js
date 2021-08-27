function check_data() {
    var words = test.sendTxt.value;
    var linkUrl = "";

    if (test.key.value == 'google') {
        linkUrl = "https://www.google.co.jp/search?q=" + words;
    } else if (test.key.value == 'yahoo') {
        linkUrl = "https://search.yahoo.co.jp/search?p=" + words;
    } else if (test.key.value == 'bing') {
        linkUrl = "https://www.bing.com/search?q=" + words;
    } else if (test.key.value == 'twitter') {
        linkUrl = "https://twitter.com/search?q=" + words;
    } else if (test.key.value == 'amazon') {
        linkUrl = "https://www.amazon.co.jp/s?k=" + words;
    }
    window.open(linkUrl, '_blank');
}
window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('input1').addEventListener('keyup', function () {
        if (this.value.length < 1) {
            setDisabledButton();
        } else {
            unDisabledButton();
        }
    }, false);
}, false);
//引数が true = 非活性, false = 活性
//実行ボタンがクリックされたらDisabled
function setDisabledButton() {
    document.getElementById('eventButton1').disabled = true;
    document.getElementById('eventButton2').disabled = true;
    document.getElementById('eventButton3').disabled = true;
    document.getElementById('eventButton4').disabled = true;
    document.getElementById('eventButton5').disabled = true;
}
//解除ボタンがクリックされたらDisabled解除
function unDisabledButton() {
    document.getElementById('eventButton1').disabled = false;
    document.getElementById('eventButton2').disabled = false;
    document.getElementById('eventButton3').disabled = false;
    document.getElementById('eventButton4').disabled = false;
    document.getElementById('eventButton5').disabled = false;
}
String.prototype.bytes = function () {
    return(encodeURIComponent(this).replace(/%../g,"x").length);
  }
  function getLen(str){
    var result = 0;
    for(var i=0;i<str.length;i++){
      var chr = str.charCodeAt(i);
      if((chr >= 0x00 && chr < 0x81) ||
         (chr === 0xf8f0) ||
         (chr >= 0xff61 && chr < 0xffa0) ||
         (chr >= 0xf8f1 && chr < 0xf8f4)){
        //半角文字の場合は1を加算
        result += 1;
      }else{
        //それ以外の文字の場合は2を加算
        result += 2;
      }
    }
    //結果を返す
    return result;
  };
          function ShowLength() {
              var inputText = document.form1.sendTxt.value;
              if (document.form1.nohtml.checked) {
                  inputText = inputText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
              }
              var inputTextBytes = getLen(inputText);
              document.getElementById("inputlength").innerHTML = inputTextBytes + "バイト";
              if(inputTextBytes>=281 && document.form1.tweetlimit.checked){
                  document.form1.sendTxt.style.color = "red";
              } else {
                  document.form1.sendTxt.style.color = "black";
              }
          }
          window.addEventListener('DOMContentLoaded', function () {
              document.getElementById('submit1').disabled = true;
              document.getElementById('input1').addEventListener('keyup', function () {
                  if (this.value.length < 1) {
                      document.getElementById('submit1').disabled = true;
                  } else {
                      document.getElementById('submit1').disabled = false;
                  }
              }, false);
              document.getElementById('input1').addEventListener('change', function () {
                  if (this.value.length < 1) {
                      document.getElementById('submit1').disabled = true;
                  }
              }, false);
          }, false);
          function send() {
              var tweet = "";
              /* 名前(コード変換) */
              if (document.form1.sendTxt.value != "") {
                  sendTxt = document.form1.sendTxt.value;
              }
              /* アドレスにパラメータを付加 */
              location.href = "https://twitter.com/intent/tweet?text=" + sendTxt;
              return false;
          }
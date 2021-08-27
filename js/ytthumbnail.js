// 参考
// http://so-zou.jp/web-app/text/encode-decode/
// https://github.com/eEIi0A5L/mochifilter_homepage/blob/master/youtube_thumbnail.html
( function()
{
    var form = document.getElementById('text-form');
    form.text.select();
    form.onsubmit = function() {
        var text = this.text.value; // テキストボックスの値

        var youtube_id = get_youtube_id(text);
        console.log("youtube_id = " + youtube_id );

        set_img(youtube_id, 'default');
        set_img(youtube_id, '1');
        set_img(youtube_id, '2');
        set_img(youtube_id, '3');
        set_img(youtube_id, 'mqdefault');
        set_img(youtube_id, 'hqdefault');
        set_img(youtube_id, '0');
        set_img(youtube_id, 'sddefault');
        set_img(youtube_id, 'maxresdefault');


        return false;
    }

    function set_img(youtube_id, type) {
        var imgtype = type + "_img";
        var urltype = type + "_url";

        //alert(type);
        //alert(urltype);

        var alink = document.getElementById(type);
        //var str = text;
        var imgurl = "https://i.ytimg.com/vi/" + youtube_id + "/" + type + ".jpg";
        //alert(imgurl);
        alink.href = imgurl;

        var img = document.getElementById(imgtype);
        img.src = imgurl;

        var td_url = document.getElementById(urltype);
        td_url.innerHTML = imgurl;
    }

    //https://www.youtube.com/watch?v=
    //https://youtu.be/id
    function get_youtube_id(text) {
        var ret = "";
        var result = text.match(/.*\?v=([^&\?]*)/);
        if (result != null) {
            ret = result[1];
            return ret;
        }

        result = text.match(/youtu\.be\/([^&\?]*)/);
        if (result != null) {
            ret = result[1];
            return ret;
        }

        //alert(ret);
        return ret;
    }
})();
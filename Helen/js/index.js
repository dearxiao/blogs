$(function () {
    // 打开弹窗
    $('.pop-up').click(function () {
        var nextWin = $(this).attr('next-win')
        $('.window').hide()
        $('.' + nextWin).slideDown()
        $('.shade').show()
    })
    // 返回上一个弹窗
    $('.window .back, .cancel').on('click', function () {
        var lastWin = $(this).attr('last-win')
        $('.window').hide()
        $('.' + lastWin).show()
    })
    $('.confirm').click(function () {
        $('.window').hide()
        $('.mall').show()
        $('.mall .title span:eq(1)').click()
    })
    //选项卡切换
    $('.title span').on('click', function () {
        var i = $(this).index()
        $('.title span').removeClass('select')
        $(this).addClass('select')
        $('.rank ul, .report ul, .mall ul, .miner ul, .market2>ul').hide()
        $('.list' + i + '').show()
    })
    $('.title2 span').on('click', function () {
        var i = $(this).index()
        $('.title2 span').removeClass('select2')
        $(this).addClass('select2')
        $('.market2 .list2 ul').hide()
        $('.market2 .list2 .order' + i + '').show()
    })
    // operation
    $('.miners').on('click', '.miner', function () {
        $(this).siblings().show()
        $('.shade').show()
    })
    // gather
    $('.miners').on('click', '.gather', function () {
        hint()
        $('.operation').hide()
    })
    // work
    $('.miners').on('click', '.work', function () {
        var img_src = $(this).siblings('.miner').attr('src')
        var img_src2 = img_src.substr(0, img_src.length-4) + '.gif'
        $(this).siblings('.miner').attr('src', img_src2)
        $('.operation, .shade').hide()
    })
    // music
    var play = false
    $('.music').click(function () {
        if (play) {
            play = false
            $('audio').get(0).pause()
            $('.music img').attr('src', 'images/setting3.png')
        } else {
            play = true
            $('audio').get(0).play()
            $('.music img').attr('src', 'images/setting4.png')
        }
    })
    // 复制
    var copy = document.getElementsByClassName('copy')[0]
    copy.onclick = function () {
        var url = document.getElementById('url')
        url.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
    }
})

function upload(e, n) {
    var file = e.files[0]
    if (e.files) {
        var reader = new FileReader()
        reader.readAsDataURL(e.files[0]); //发起异步请求
        reader.onload = function (e) {
            //console.log(e)
            var src = this.result
            if (n == 1) {
                $('.touxiang').attr('src', src)
            } else if (n == 2) {
                $('.upload').attr('src', src)
            } else {
                $('.upload2').attr('src', src)
            }
        }
    }
}
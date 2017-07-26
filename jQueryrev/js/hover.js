$(function() {
    var imgs = $.makeArray($(".hovertest img"));

    $(".hovertest").mouseout(function() {
        for (var i = 0; i < imgs.length; i++) {
            // 需要使用自定义的animate函数，不能使用jquery自带的animate函数
            animate(imgs[i], { left: 0, opacity: 1 }, 100);
        }
    });

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onmouseover = function() {
            for (var j = 0; j < imgs.length; j++) {
                animate(imgs[j], { left: 0, opacity: 0.1, 'background-color': '#000' }, 100);
            }
            animate(this, { left: -15, opacity: 1 }, 100);
        }

    }
})
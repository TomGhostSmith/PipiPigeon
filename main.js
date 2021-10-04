// let canvasContent = document.getElementById('canvas'), //需要截图的包裹的（原生的）DOM 对象
//     width = canvasContent.clientWidth, //canvasContent.offsetWidth || document.body.clientWidth; //获取dom 宽度
//     height = canvasContent.clientHeight, //canvasContent.offsetHeight; //获取dom 高度
//     canvas = document.createElement("canvas"), //创建一个canvas节点
//     scale = 4; //定义任意放大倍数 支持小数
// canvas.width = width * scale; //定义canvas 宽度 * 缩放
// canvas.height = height * scale; //定义canvas高度 *缩放
// canvas.style.width = canvasContent.clientWidth * scale + "px";
// canvas.style.height = canvasContent.clientHeight * scale + "px";
// canvas.getContext("2d").scale(scale, scale); //获取context,设置scale

// let opts = {
//     scale: scale, // 添加的scale 参数
//     canvas: canvas, //自定义 canvas
//     logging: false, //日志开关，便于查看html2canvas的内部执行流程
//     width: width, //dom 原始宽度
//     height: height,
//     useCORS: true // 【重要】开启跨域配置
// };

// let domContent = document.getElementById('canvas');
// let html = (type, toDown = false) => {
//     html2canvas(domContent, opts).then(function(canvas) {
//         let imgUrl = canvas.toDataURL('image/' + type);
//         if (toDown) {
//             window.location.href = imgUrl;
//         } else {
//             return imgUrl;
//         }
//     });
// }

//#proMain:要截图的DOM元素
//useCORS:true:解决跨域问题
$('#saveData').click(function() {
    var control = document.getElementById("control");
    control.style.display = "none";
    html2canvas(document.querySelector('body'), { useCORS: true }).then(function(canvas) {
        //获取年月日作为文件名
        var timers = new Date();
        var fullYear = timers.getFullYear();
        var month = timers.getMonth() + 1;
        var date = timers.getDate();
        var randoms = Math.random() + '';
        //年月日加上随机数
        var numberFileName = fullYear + '' + month + date + randoms.slice(3, 10);
        var imgData = canvas.toDataURL();
        //保存图片
        var saveFile = function(data, filename) {
            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;

            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
        };
        //最终文件名+文件格式
        var filename = numberFileName + '.png';
        saveFile(imgData, filename);
        control.style.display = "block";
    })
})

function func() {
    var additionPic = document.getElementById("addition");
    var actionPic = document.getElementById("action");
    var actionSel = document.getElementById("actionSel");
    var shellPic = document.getElementById("shell");
    var shellSel = document.getElementById("shellSel");
    var expressionPic = document.getElementById("expression");
    var expressionSel = document.getElementById("expressionSel");
    actionPic.src = "./Action/" + actionSel.value + ".png";
    shellPic.src = "./Shell/" + shellSel.value + ".png";
    expressionPic.src = "./Expression/" + expressionSel.value + ".png";
    if (actionSel.value < 4) {
        additionPic.src = "./Addition/" + actionSel.value + ".png";
    } else {
        additionPic.src = "";
    }
}
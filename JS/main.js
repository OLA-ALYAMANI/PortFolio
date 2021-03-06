// $(window).on("load", () =>{
//     $("loading_area").fadeOut(10000)
//     $("main_area").fadeIn(10000)
// })
$(".main_area").hide()

setTimeout(() => {
    $(".loading_area").fadeToggle()
}, 1500)

$(".main_area").show()

// $(document).ready(() => {
//     var enteries = [
//         { label: 'HTML' },
//         { label: 'CSS' },
//         { label: 'JAVASCRIPT' },
//         { label: 'BOOTSTRAP' },
//         { label: 'NODE.JS' },
//         { label: 'REACT.JS' },
//         { label: 'ADOBE XD' },
//         { label: 'SQL' },
//         { label: 'NOSQL' }
//     ];

//     var settings = {
//         entries: enteries,
//         width: 500,
//         height: 500,
//         redius: '50%',
//         radiusMin: 75,
//         bgColor:'#000',
//         bgDraw: true,
//         opacityOver: 1.00,
//         opacityOut: 0.05,
//         fov: 800,
//         speed: 1,
//         fontFamily: 'Courier, Arial, sans-serif',
//         fontSize: '30',
//         fontColor: 'rgb(23, 65, 129)',
//         fontWedght:'bold',
//         fontSretch:'normal',
//         fontStyle: 'normal',
//         fontToUpperCase: true,
//     };
//     $(".tag").svg3DTagCloud(settings);
// })

$(document).ready(() => {
    var enteries = [
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JAVASCRIPT' },
        { label: 'BOOTSTRAP' },
        { label: 'NODE.JS' },
        { label: 'REACT.JS' },
        { label: 'ADOBE XD' },
        { label: 'SQL' },
        { label: 'NOSQL' }
    ];

    var settings = {
        entries: enteries,
        width: 580,
        height: 500,
        redius: '50%',
        radiusMin: 75,
        bgColor:'#ffff',
        bgDraw: true,
        opacityOver: 1.00,
        opacityOut: 0.05,
        fov: 800,
        speed: 1,
        fontFamily: 'Courier, Arial, sans-serif',
        fontSize: '30',
        fontColor: 'rgb(74, 157, 168)',
        fontWeight:'bold',
        fontSretch:'normal',
        fontStyle: 'normal',
        fontToUpperCase: true,
    };
    $(".tag").svg3DTagCloud(settings);
})
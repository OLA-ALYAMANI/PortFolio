// $(window).on("load", () =>{
//     $("loading_area").fadeOut(10000)
//     $("main_area").fadeIn(10000)
// })
$(".main_area").hide()

setTimeout(() => {
    $(".loading_area").fadeToggle()
}, 1500)

$(".main_area").show()

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
        width: 400,
        height: 400,
        redius: '50%',
        radiusMin: 75,
        bgDraw: true,
        opacityOver: 1.00,
        opacityOut: 0.05,
        fov: 800,
        speed: 2,
        fontFamily: 'Courier, Arial, sans-serif',
        fontSize: '30',
        fontColor: 'rgb(23, 65, 129)',
        fontStyle: 'normal',
        fontToUpparcase: true,
    };
    $(".tag").svg3DTagCloud(settings);
})
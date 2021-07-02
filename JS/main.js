// $(window).on("load", () =>{
//     $("loading_area").fadeOut(10000)
//     $("main_area").fadeIn(10000)
// })
$(".main_area").hide()

setTimeout(() => {
    $(".loading_area").fadeToggle()
}, 2000)

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

// const options = {
//     bottom: '64px', // default: '32px'
//     right: '32px', // default: '32px'
//     left: 'unset', // default: 'unset'
//     time: '0.5s', // default: '0.3s'
//     mixColor: '#fff', // default: '#fff'
//     backgroundColor: '#fff',  // default: '#fff'
//     buttonColorDark: '#100f2c',  // default: '#100f2c'
//     buttonColorLight: '#fff', // default: '#fff'
//     saveInCookies: true, // default: true,
//     label: '🌓', // default: ''
//     autoMatchOsTheme: true // default: true
//   }
  
//   const darkmode1 = new Darkmode(options);
//   darkmode1.showWidget();

$(document).ready(function(){
    $(".project-area").trigger("click");

    $(".project-area .grid .test-popup-link").magnificPopup({
        type:'image',
        gallery:{enabled:true}
    })
    
    let nav_offset_top = $(".header_area").height()+ 50;

    function navbarFixed(){
        if ($(".header_area").length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $(".header_area .main-menu").addClass("navbar_fixed")
                }
                else{
                    $(".header_area .main-menu").removeClass("navbar_fixed")
                }
            })
        }
    }
    navbarFixed();
})
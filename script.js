let curr_top = 0;
let WIN_WIDTH = window.innerWidth;
let car_x = WIN_WIDTH / 2;
let curr_white = [-25, 0, 25, 50, 75];
let mycar = document.getElementById("my_car");
mycar.style.left = car_x + "px";
offsets = document.getElementById('my_car').getBoundingClientRect();
var left = offsets.left;


document.addEventListener("keypress", function onEvent(event) {
    // console.log(mycar.getBoundingClientRect().left+mycar.offsetWidth,72.5*WIN_WIDTH/100);
    if (event.key === "a" && mycar.getBoundingClientRect().left > 55 * WIN_WIDTH / 200) {
        car_x -= 10;
        mycar.style.left = car_x + "px";
    } else if (event.key === "d" && mycar.getBoundingClientRect().left + mycar.offsetWidth - 4.5 * WIN_WIDTH / 100 < 72.5 * WIN_WIDTH / 100) {
        car_x += 10;
        mycar.style.left = car_x + "px";
    }
});

// document.getElementsByClassName("l")[0].style.left = (((1)*(45-3.6)*WIN_WIDTH/40000)+ 55*WIN_WIDTH/20000)+ "vh";
// document.getElementsByClassName("m")[0].style.left = (((2)*(45-3.6)/400)*WIN_WIDTH+ 55*WIN_WIDTH/20000)+ "vh";
// document.getElementsByClassName("r")[0].style.left = (((3)*(45-3.6)/400)*WIN_WIDTH+ 55*WIN_WIDTH/20000)+ "vh";
c1 = document.getElementsByClassName("l")[0]
c2 = document.getElementsByClassName("m")[0]
c3 = document.getElementsByClassName("r")[0]
c4 = document.getElementsByClassName("s")[0]
// c5 = document.getElementsByClassName("o")[0]

// console.log(topss2);

function dec_left() {
    let ra = Math.floor(Math.random() * 10 % 4);
    console.log(ra)
    if (ra == 0) {
        return 25.5;
    } else if (ra == 1) {
        return 36.5;
    } else if (ra == 2) {
        return 49.5;
    } else if (ra == 3) {
        return 60.5;
    }
}

function collision_check() {
    T = mycar.offsetTop;
    L = mycar.offsetLeft;
    W = mycar.offsetHeight;
    H = mycar.offsetWidth;
    opp = document.getElementsByClassName("oppo");
    for (let i = 0; i < opp.length; i++) {
        t = opp[i].offsetTop;
        l = opp[i].offsetLeft;
        w = opp[i].offsetHeight;
        h = opp[i].offsetWidth;

        if (t + h > T && t < T + H && l < L + W && l + w > L) {
            return 1;
        }
    }
    return 0;
}

function car_collide(car_num) {
    opp = document.getElementsByClassName("oppo");
    T = opp[car_num].offsetTop;
    L = opp[car_num].offsetLeft;
    W = opp[car_num].offsetHeight;
    H = opp[car_num].offsetWidth;
    for (let i = 0; i < opp.length; i++) {
        if (i == car_num) {
            continue;
        }
        t = opp[i].offsetTop;
        l = opp[i].offsetLeft;
        w = opp[i].offsetHeight;
        h = opp[i].offsetWidth;
        if (t + h > T && t < T + H && l < L + W && l + w > L) {
            return 1;
        }
    }
    return 0;
}

function dostuff() {
    document.getElementById("won").style.display = "none";
    let score = 0;

    topss = -350;
    topss1 = -350;
    topss2 = -350 - Math.random() * 1000 % 400;
    topss3 = -350 - Math.random() * 1000 % 400;
    topss4 = -350 - Math.random() * 1000 % 400;
    // topss5 = -350 - Math.random() * 1000 % 400;
    lefft1 = dec_left();
    lefft2 = dec_left();
    lefft3 = dec_left();
    lefft4 = dec_left();
    // lefft5 = dec_left();
    let change_score = document.getElementById("scores");
    let x = setInterval(function play() {
        score += 2;
        change_score.innerText = score;
        document.getElementById("score_out").style.display = "block";
        let m = document.getElementsByClassName("whites");
        c1.style.top = topss1 + "px";
        c2.style.top = topss2 + "px";
        c3.style.top = topss3 + "px";
        c4.style.top = topss4 + "px";
        // c5.style.top = topss5 + "px";
        c1.style.left = lefft1 + "vw";
        c2.style.left = lefft2 + "vw";
        c3.style.left = lefft3 + "vw";
        c4.style.left = lefft4 + "vw";
        // c5.style.left = lefft5 + "vw";
        topss1 += 15;
        topss2 += 15;
        topss3 += 15;
        topss4 += 15;
        // topss5 += 15;
        opponent = document.getElementsByClassName("oppo");
        if(topss1 < -600){
            topss1 = -250;
        }
        if(topss2 < -600){
            topss2 = -250;
        }
        if(topss3 < -600){
            topss3 = -250;
        }
        if(topss4 < -600){
            topss4 = -250;
        }
        // if(topss5 < -600){
        //     topss5 = -250;
        // }
        if (car_collide(0)) {
            // console.log("uep")
            // lefft1 = dec_left();       
        }
        if (car_collide(1)) {
            // console.log("uep")
            topss2-= 12*window.innerHeight/100;
        // lefft2 = dec_left();
        }
        if (car_collide(2)) {
            // console.log("uep")
            // lefft3 = dec_left();
            topss3 -= 24*window.innerHeight/100;
        }
        if (car_collide(3)) {
            // console.log("uep")
            // lefft4 = dec_left();
            topss4 -= 36*window.innerHeight/100;
            
        }
        // if (car_collide(4)) {
        //     // console.log("uep")
        //     // lefft5 = dec_left();
        //     topss5 -= 36*window.innerHeight/100;
        //     // topss5 -= 15;
        // }
        if (topss1 - Math.random() * 100 % 100 >= window.innerHeight) {
            score += 25;
            topss1 = -350 - Math.random() * 1000 % 400;
            lefft1 = dec_left();
        }
        if (topss2 - Math.random() * 100 % 100 >= window.innerHeight) {
            score += 25;
            topss2 = -350 - Math.random() * 1000 % 400;
            lefft2 = dec_left();
        }
        if (topss3 - Math.random() * 100 % 100 >= window.innerHeight) {
            score += 25;
            topss3 = -350 - Math.random() * 1000 % 400;
            lefft3 = dec_left();
        }
        if (topss4 - Math.random() * 100 % 100 >= window.innerHeight) {
            score += 25;
            topss4 = -350 - Math.random() * 1000 % 400;
            lefft4 = dec_left();
        }
        // if (topss5 - Math.random() * 100 % 100 >= window.innerHeight) {
        //     score += 25;
        //     topss5 = -350 - Math.random() * 1000 % 400;
        //     lefft5 = dec_left();
        // }
        for (let i = 0; i < m.length; i++) {
            curr_white[i] += 1.5;
            if (curr_white[i] > 100) {
                curr_white[i] = -25;
            }
            m[i].style.top = (curr_white[i]) + "vh";
        }
        if (collision_check()) {
            clearInterval(x);
            document.getElementById("start").innerText = "Replay";
            document.getElementById("score_tag").style.display = "block";
            document.getElementById("score_out").style.display = "none";
            document.getElementById("scorein").innerText = score;
            document.getElementById("won").style.display = "flex";
        }
    }, 100);
}
document.getElementById("start").addEventListener("click", dostuff)
let x_axis = 0, y_axis = 0;

document.onkeydown = check_key;

function check_key(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 38:
            move_car("up");
        break;
        case 40:
            move_car("down");
            break;
        case 37:
            move_car("left");
            break;
        case 39:
            move_car("right");
            break;
        default:
            break;
    }
}

function move_car(direction) {
    switch (direction) {
        case "up":
            y_axis -= 10
            $(".car").css({"transform": "translate("+x_axis+"px,"+y_axis+"px) rotate(270deg)"})
        break;
        case "down":
            y_axis += 10
            $(".car").css({"transform": "translate("+x_axis+"px,"+y_axis+"px) rotate(90deg)"})
        break;
        case "left":
            x_axis -= 10
            $(".car").css({"transform": "translate("+x_axis+"px,"+y_axis+"px) rotate(180deg)"})
        break;
        case "right":
            x_axis += 10
            $(".car").css({"transform": "translate("+x_axis+"px,"+y_axis+"px) rotate(0deg)"})
        break;
    }

}
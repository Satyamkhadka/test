var NUMBER_OF_CALLS = 0;
var LOC_OF_OBS;
var OBS_OBJ;
var OBS_DIAM;
var RED_COLOR_ADDRESS;

//just checking for the file association
function check() {

    alert("it works!");
}

//Obstacle class

class Obstacle {

    constructor() {

        // nothing
    }

    //sets Obstacles (to be called from outside)
    setObstacle() {
        Obstacle.setObstacle_stat();
    }

    //static class of setting obstacle that is set from inside the class
    static setObstacle_stat() {

        NUMBER_OF_CALLS++;
        //updateScore();
        var colors = Obstacle.getRandomColors();
        OBS_OBJ = document.createElement('div');

        if (NUMBER_OF_CALLS <= 5) {
            var obs_diam = 150;
            OBS_DIAM = obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid";

            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderRightColor = colors[0];
            OBS_OBJ.style.borderBottomColor = colors[1];
            OBS_OBJ.style.borderLeftColor = colors[2];
            OBS_OBJ.style.borderTopColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ);
        } else if (NUMBER_OF_CALLS > 5 || NUMBER_OF_CALLS <= 10) {
            var obs_diam = 130;
            OBS_DIAM = obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid";

            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderRightColor = colors[0];
            OBS_OBJ.style.borderBottomColor = colors[1];
            OBS_OBJ.style.borderLeftColor = colors[2];
            OBS_OBJ.style.borderTopColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ);
        } else if (NUMBER_OF_CALLS > 10 || NUMBER_OF_CALLS <= 15) {
            var obs_diam = 100;
            OBS_DIAM = obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid";

            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderRightColor = colors[0];
            OBS_OBJ.style.borderBottomColor = colors[1];
            OBS_OBJ.style.borderLeftColor = colors[2];
            OBS_OBJ.style.borderTopColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ);
        } else {
            var obs_diam = 80;
            OBS_DIAM = obs_diam;
            OBS_OBJ.classList.add('rotatethis');
            OBS_OBJ.style.width = obs_diam + 'px';
            OBS_OBJ.style.height = obs_diam + 'px';
            OBS_OBJ.style.position = "absolute";
            //OBS_OBJ.style.background='pink';
            OBS_OBJ.style.top = FRAME_OFFSET_VER - (obs_diam / 2) + 'px'; // initial
            LOC_OF_OBS = parseInt(OBS_OBJ.style.top);
            OBS_OBJ.style.left = FRAME_OFFSET_HOR + (FRAME_WIDTH / 2) - (obs_diam / 2) - (15 / 2) + 'px'; //initial : left+ adding playablearea;s half and subb objects half 
            OBS_OBJ.style.borderRadius = "50%";
            OBS_OBJ.style.border = "solid";

            OBS_OBJ.style.borderWidth = '15px';

            OBS_OBJ.style.borderRightColor = colors[0];
            OBS_OBJ.style.borderBottomColor = colors[1];
            OBS_OBJ.style.borderLeftColor = colors[2];
            OBS_OBJ.style.borderTopColor = colors[3];
            // alert(colors);
            document.body.appendChild(OBS_OBJ);
        }



    }

    // gentrates the random number (takes one arg)
    // this returnes ramdom number upto the specified number
    static randomNumber(num) {


        return Math.floor(Math.random() * num);
    }

    // return the array of 4 random colors
    static getRandomColors() {
        var textArray = [
            'aqua',
            '#6adca1',
            'cyan',
            'green',
            'blue',
            'skyblue',
            'pink',
            'indigo',
            'lime',
            'magenta',
            'yellowgreen'

        ];
        var AL = textArray.length;
        var randomArray = [
            textArray[Obstacle.randomNumber(AL)], textArray[Obstacle.randomNumber(AL)], textArray[Obstacle.randomNumber(AL)], textArray[Obstacle.randomNumber(AL)]
        ];
        RED_COLOR_ADDRESS = Obstacle.randomNumber(4);
        randomArray[RED_COLOR_ADDRESS] = 'red';
        return randomArray;
    }

    //changes the location of the obstacle
    changeLocation() {
        var top_pos = parseInt(OBS_OBJ.style.top);


        OBS_OBJ.style.top = top_pos + 1 + 'px';
        //OBS_OBJ.style.transform = "translateY(20px)"; 
        if (top_pos > (FRAME_HEIGHT - (OBS_DIAM) - 15)) {

            OBS_OBJ.remove();

            Obstacle.setObstacle_stat();
            updateScore();
            //call to the new obstacle object creator function method



        }

    }

    // this resets the game by changin the position of the obstacle and the ball
    resetGame() {
        alert("YOU'RE OUT!");
        OBS_OBJ.remove();
        Obstacle.setObstacle_stat();
        // show game stats
        NUMBER_OF_CALLS = 0;
        updateScore();
    }

    //collision detection
    //code 
    //game engine
    checkRules() {
        let BallTop = parseInt(BALL_OBJ.style.top);
        let ObstacleTop = parseInt(OBS_OBJ.style.top);



        if ((BallTop == (ObstacleTop + OBS_DIAM + 30))
            || (BallTop == (ObstacleTop + OBS_DIAM + 15))
        ) {

            var st = window.getComputedStyle(OBS_OBJ, null);
            var tr = st.getPropertyValue('transform');


            var values = tr.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            var a = values[0];
            var b = values[1];
            var c = values[2];
            var d = values[3];

            var scale = Math.sqrt(a * a + b * b);
            var radians = Math.atan2(b, a);
            var radians = Math.atan2(b, a);
            if (radians < 0) {
                radians += (2 * Math.PI);
            }
            var angle = Math.round(radians * (180 / Math.PI));
            console.log(angle);


            if (RED_COLOR_ADDRESS == 0) {
                if ((angle >= 45 && angle < 135))
                    return false;
                else
                    return true;
            }
            if (RED_COLOR_ADDRESS == 1) {
                if (((angle >= 315 && angle < 360)) || angle < 45)
                    return false;
                else return true;
            }
            if (RED_COLOR_ADDRESS == 2) {
                if (((angle >= 225 && angle <= 315)))
                    return false;
                else
                    return true;
            }

            if (RED_COLOR_ADDRESS == 3) {
                if ((angle >= 135 && angle < 225))
                    return false;
                else
                    return true;
            }



        }

        else if ((BallTop == ObstacleTop)
            || (BallTop == (ObstacleTop + 15))) {


            var st = window.getComputedStyle(OBS_OBJ, null);
            var tr = st.getPropertyValue('transform');


            var values = tr.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            var a = values[0];
            var b = values[1];
            var c = values[2];
            var d = values[3];

            var scale = Math.sqrt(a * a + b * b);
            var radians = Math.atan2(b, a);
            var radians = Math.atan2(b, a);
            if (radians < 0) {
                radians += (2 * Math.PI);
            }
            var angle = Math.round(radians * (180 / Math.PI));
            console.log(angle);


            if (RED_COLOR_ADDRESS == 0) {
                if ((angle >= 225 && angle < 315))
                    return false;
                else
                    return true;
            }
            if (RED_COLOR_ADDRESS == 1) {
                if ((angle >= 135 && angle < 225))
                    return false;
                else return true;
            }
            if (RED_COLOR_ADDRESS == 2) {
                if ((angle >= 45 && angle < 135))
                    return false;
                else
                    return true;
            }

            if (RED_COLOR_ADDRESS == 3) {
                if (((angle >= 315 && angle < 360) || angle < 45))
                    return false;
                else
                    return true;
            }




        }
        else
            return false;



    }

}
export let homeHtml = `
<div id="brickImgContainer"></div>
<div id="bricksansball"><img src="assets/bricklogosansball.svg" alt="" style="width: 100%;"></div>
<div id="test">
    <div id="presstostart"><img src="assets/pressToStart.svg" alt="" style="width: 90%;"></div>
</div>
<div id="leftright"><img src="assets/leftright.svg" alt="" style="width: 80%;"></div>
<div id="betterexp">press f11 for better experience <i class="fas fa-expand"></i></div>
`

export let startHtml = ` 
<div id="logo"><img src="assets/bricklogo.svg" alt="" /></div>
<div id="lefthead">
  <div id="score">score: <span class="score">0</span></div>
  <div id="lifesHearts">
    <div id="life">life:</div>
  </div>
  <div id="timer">Time: 00</div>
  <div id="pause"><img src="assets/pause.svg" alt="" /></div>
</div>
`

export let heartHtml = `
<div id="hearts">
  <div id="heart1"><img src="assets/coeur.svg" alt=""></div>
  <div id="heart2"><img src="assets/coeur.svg" alt=""></div>
  <div id="heart3"><img src="assets/coeur.svg" alt=""></div>
</div>
`

export let pauseHTML = `
<div id="overlay"></div>
<div id="pauseMenu">
    <div id="gamepaused">
        <img src="assets/GAME-PAUSED.svg" alt="" style="width: 500px;">
    </div>
    <div id="scoretimerlife"></div>
    <div id="restartreplayquit">
        <div id="restart"><img src="assets/restar.svg" alt=""  ></div>
        <div id="replay"><img src="assets/replay.svg" alt=""></div>
        <div id="quit"><img src="assets/quit.svg" alt="" style="width: 50px;"></div>
    </div>
    <div id="pressh" > Press R to restart and C to replay
    </div>
</div>
`

export let gameoverHTML = `
<div id="finish">
        <div id="gameover"><img src="assets/game-over.svg" alt=""></div>
        <div id="yourscore"><img src="assets/Your-Final-score.svg" alt=""></div>
        <div id="myscore">123</div>
        <div id="restartquit">
            <div id="restartR"><img src="assets/RESTART-R.svg" alt=""></div>
            <div id="quitQ"><img src="assets/QUIT-Q.svg" alt=""></div>
        </div>
    </div>
`

export let winHTML = `
<div id="youwin">
<div id="lgbreaker"><img src="assets/logo-orange.svg" alt="" width="60%"></div>
<div id="yourtimeandscore">
    <div id="yourtime">YOUR TIME:</div>
    <div id="yourscore">YOUR SCORE:</div>
</div>
<div id="ywin"><img src="assets/you-win.svg" alt="" width="50%"></div>
<div id="rq">
    <div id="rplay"><img src="assets/Replay-R.svg" alt="" width="70%"></div>
    <div id="qquit"><img src="assets/Quit-Q.svg" alt="" width="70%"></div>
</div>
<div id="shorcut">
    <img src="assets/Shortcut-to-quit-Press-Q.svg" width="70%" alt="">
</div>
</div>
`

export let skeletonHTML = `
<div id="main_container">
  <div id="gameHead"></div>
  <div id="gameBody"></div>
</div>
`

export let formHTML = `
  <div class="allscoreplace">
  <div class="score-container">
      <div class="instructions">
          You are about to access the scoreboard.<br>
          Please enter a username:
      </div>
      <div class="allusername-input">
          <div class="username-input">
              <div class="icon user-icon" style="border-right: solid black 1px;">
                  <img src="assets/person.svg" alt="">
              </div>
              <form id="myform">
                  <input type="text" placeholder="Username Here...">
                  <div class="icon arrow-icon" style="border-left: solid black 1px;">
                      <button type="submit" style="border: none; background-color: transparent;"><img src="assets/send.svg" alt=""></button>
                  </div>
              </form>
          </div>
      </div>
      <div class="score-info">
          <div>Your score: 148</div>
          <div>Your time: 256s</div>
      </div>
  </div>
</div>
`;

export let blurBackgroundHTML = `
<div style="
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9998;
"></div>
`;

export let allBrickHome = [
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, , 1, 2, 1, 2, 1, 2, 1, , 1, 2, 1, 2, 1, 2],
  [1, , 1, 2, 1, 2, 1, 2, , , , , 1, 2, 1, 2]
]

export let allBrickMap13 = [
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
]

export let allBrickMap1 = [
  [, , , , , , , , , , , , , , , ],
  [, , , , , , , , , , , , , , , ],
  [, , , , , , 2, 2, 2, , , , , , , ]
]

export let allBrickMap2 = [
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]
]

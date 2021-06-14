<!DOCTYPE HTML>
  <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Word Game | Longdo Dict</title>
      <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap" rel="stylesheet">
      <link href="style.css" type="text/css" rel="stylesheet">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
      <script type="text/javascript" src="Var.js"></script>
      <script type="text/javascript" src="Loadphp.js"></script>
      <script type="text/javascript" src="Cookie.js"></script>
      <script type="text/javascript" src="script.js"></script>
      <script type="text/javascript" src="Enable_disabled.js"></script>
      <script type="text/javascript" src="Match.js"></script>
      <script type="text/javascript" src="Question.js"></script>
      <script type="text/javascript" src="Speak.js"></script>
      <script type="text/javascript" src="button.js"></script>
    </head>
    <body onload="">
    <nav class="navbar navbar-expand-sm navbar-custom">
    <div class="container">
    <div class="Icon">
      <a class="navbar-brand font-weight-bold font_size" href="/">
      <img src ="Icon.png" width="50" height="50" alt="Londo Dict" class ="Icon">
      Word Game | Longdo Dict
      </a>
    </div>
    <span class= "navbar-text But_right">
    <a class ="Login_text font-weight-bold" href="/">
      <div class= "Login">
        <span>
        Log in
</span>
      </div>
    </a>
    <a class ="Sign_text font-weight-bold" href="/">
      <div class ="Sign">
        <span>
        Sign in
        </span>
      </div>
    </a>
    </span>
    </div>
    </nav>
    <div class="mgt30 d-flex justify-content-center">
    <span class="Text_Subject"><h5>ENG 404 - Elemetary School</h5></span>
</div>
    <div class="game d-flex justify-content-center">
      <div class="Box">
        <div class="d-flex justify-content-between border_bottom">
          <div class="p-2 bd-highlight">
            <strong id="position" class = ""></strong>
          </div>
          <div class="p-2 bd-highlight">
            <strong id="score" class =""></strong>
          </div>
        </div>
      <!-- <div>
        <button type="button" onclick="GameStart()" id="start">Ready?</button><br>
      </div> -->
        <div class="mgt10 mgb10">
        <span class="material-icons play" onclick = "hearsound()" id = "play_arrow">
        play_arrow
          </span><br>
        </div>
          <div class="quiz " id="quiz">

          <div class="input-group mb-3 d-flex justify-content-center">

            <div class = "md-form form-group w-75">
              <input type="text" id="word" value="" onchange="matchword()" class="word_check form-control preselection" placeholder="Hear">
            </div>

          <div class = "md-form form-group w-75">
            <div class="col-sm-15">
            <input type="text" id="sound" value="" onchange="matchsound()" class="sound_check form-control preselection" placeholder="Spell">
            </div>
          </div>

          <div class="input-group mb-3">
            <input type="text" id="speech" value="" onchange="matchspeech()" class="speech_check form-control preselection" placeholder="Speak">
            <div class="input-group-append">
            <button class="btn btn-outline-secondary btn btn-success" type="submit">
            <span class="material-icons text-white d-flex justify-content-center" id="record" onclick="speak_word()">
                mic
            </span>
            </button>
          </div>
        </div>

        <strong id="ans"></strong>

      </div>
</div>
      <div class ="d-flex justify-content-around border_bottom">
        <div class= "mgb10">
          <button type="button" class = "giveup_button" onclick="giveup()" id="stop">Don't Know</button>
        </div>
        <div class= "mgb10">
          <button type="button" class = "next_button" onclick="next()" id="next">Next</button><br>
        </div>
      </div>
      <div class="mgt10">
          <span onclick="Restart()" class="restart">Restart Game</span><br>
      </div>
    </div>
  </div>
  </body>
</html>

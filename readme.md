Plik Html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    Wszystkie style umieściłbym w osobnym pliku styles.css a następnie zaimportował.
    <style>
      :root {
        --bg-color: red;
      }

      body {
        backgroundColor: var(bg-color); => background-color: var(--bg-color)
        font-family: Lato; => brakuje importu danego fonta
      }

      div {
        margin-top: 2rem;
      }

      .hero {
        border: 1px solid black;
      }
    </style>

  </head>
  <body>
    <h1 aria-main="true">Hall of fame</h1> => Atrybut aria-main zamieniłbym na role="main" oraz nie uzywał go w tagu typu h1 a np. main czy div.
    <div className="hero"> => class="hero", className występuje w JSX
      <h1>Hero count: {heroCount}</h1>  => To wyrażenie JavaScriptowe osadzone w nawiasach klamrowych czyli hook useState.
    </div>
    <button onclick="Hero.train()"></button> => Moim zdaniem lepiej będzie dodać eventListener w pliku JS.
    <script></script> => <script src="heroes-hall-of-fame.js"></script> => Dobrą praktyką jest umieszczenie pliku JS na dole twojego pliku html aby wyswietlić html i css zanim przeglądarka załaduje nasz JavaScript.
  </body>
</html>

PLIK JS

<script>
   class Hero {
        #powerCount = 10
         constructor(name) {
        this.name = name
    }
   
    

    getCurrentPowerCount() {
        return this.#powerCount;
    }

    train() {
        this.#powerCount + 1 => return this.#powerCount + 1
    }
  }



let heroCount = 0

function gethero()

<script>

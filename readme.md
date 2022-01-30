Live site URL: https://hjubsoni.github.io/exercise-akademia-envelo/
Przyciski Odbierz paczkę, idę dalej oraz to wszystko na dziś są aktywne.

Zadanie 1 
Plik HTML:

1. Wszystkie style umieściłbym w osobnym pliku styles.css a następnie zaimportował.
2. 13 linijka nieznana wartość css backgroundColor należy zmienić na background-color oraz przed zmienną bg-color dodać --.
3. 14 linijka Font-family: Lato nie jest zaimportowany.
4. 30 linijka className to wyrażenie z JSX w pliku html należy użyc class.
5. 31 linijka To wyrażenie JavaScriptowe osadzone w nawiasach klamrowych czyli hook useState. Należży zamienić je na <span></span> z dowolną liczbą. A nastepnie w pliku js kontrolować tą wartość.
6. 32 linjka Należy usunąć >.
7. 33 linijka Moim zdaniem lepiej dodać eventListener w pliku JS.
8. 35 skryptowi brakuje zródła src. Dobrą praktyką jest umieszczenie pliku JS na dole twojego pliku html aby wyswietlić html i css zanim przeglądarka załaduje nasz JavaScript.

PLIK JS:

1. funkcja train() zwraca undefined, należy dodać return.
2. funkcja gethero() również zwraca undefined, zastąpiłbym ją tym zapisem: function getHero(name) {
  heroCount++;
  return new Hero(name);
}
3. Teraz 26, 27 oraz 40 stworzy nam bohaterów bez błedów.
4. 43 linjka zwróci błąd null, należy usunąć # przed divem.
5. Całą metodę map zamieniłbym na: 
6. const print_hall_of_fame = () => {
    const spiderman = getHero("spiderman")
    const heroesContainer = document.querySelector("div")
    heroes.push(spiderman)
    heroes.map((hero) => {
    const heroElement = document.createElement("div")
    const name = hero.name
    heroElement.innerHTML = `<p>${name}</p>` // kiedy używamy innerHTML należy użyć DOMPurify.sanitize, aby nasz kod js nie był dostępny do modyfikacji dla innych osób
    heroesContainer.append(heroElement)
    return (heroesContainer)
 })
 }
 7. Linijka 49 próba dostępu do #powerCount poza klasą wygeneruje błąd.
 8. Do konstruktora można dodać atrybut power, a następnie tworzyć bohaterów w następujący sposób function getHero(name, power) {
  heroCount++;
  return new Hero(name, power);
}
9. Aby zadbać o czystość kodu, polecam dodatki takie jak prettier czy ESLint.


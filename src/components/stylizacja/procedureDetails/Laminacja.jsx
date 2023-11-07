import React from "react";

export const Laminacja = () => {
  return (
    <div>
      <h1 className="h1">Laminacja rzęs</h1>
      <div className="li">
        <p>
          Najnowszy i najpopularniejszy trend w stylizacji brwi ostatnich
          miesięcy. Zabieg jest polecany zwłaszcza dla osób, które posiadają
          tzw. „niesforne” włoski, trudne do samodzielnego ułożenia. Procedura
          nadaje brwiom pożądany kierunek a przy tym wzmacnia i regeneruje
          włoski.
        </p>
        <br></br>
        <h3>Na czym polega zabieg?</h3>
        <p>
          Zabieg polega na zmianie kształtu oraz kierunku wzrostu włosków na
          skutek działania kwasu tioglikolowego Substancja ta wpływa na wiązania
          dwusiarczkowe w strukturze włosa. Kolejne etapy powoduja odbudowe
          danych wiązań i intensywna regeneracje poprzez nałożenie preparatu
          laminującego-keratyny. Dodatkowo preparaty maja działanie okluzyjne,
          wypełniają spoiwo między łuskami włosa , poprawiając w ten sposób
          kondycję oraz elastyczność włosa i nadając im blask.
        </p>
        <h3>Jakich efektów należy się spodziewać?</h3>
        <span>
          <ul>
            <li>
              {" "}
              Brwi stają się szersze i wizualnie wyglądają na gęstsze, optycznie
              zwiększa się ich objętość.
            </li>
            <li>
              powstaje tzn wygląd wyczesany do góry” lub po prostu „ułożony” w
              zależności od preferencji
            </li>
            <li>
              brwi stają się elastyczne i miękkie, dzięki czemu będzie je można
              ułożyć w odpowiednim kierunku
            </li>
          </ul>
        </span>
        <p>Jak długo utrzymują się efekty?</p>
        Efekt utrzymuje się około 2 miesiace.
        <br></br>
        <h3>Przeciwwskazania:</h3>
        <span className="numbers-li">
          <ul>
            <li> nowotwory</li>
            <li>rana w okolicy zabiegowej</li>
            <li>choroby wirusowe i bakteryjne (np. opryszczka, grzybica)</li>
            <li> choroby alergiczne oczu</li>
            <li>świeża plastyka oczu</li>
            <li>alergie związane ze skórą</li>
            <li>chemioterapia</li>
          </ul>
        </span>
        <h3>Jak długo trwa zabieg?</h3>
        <p>Zabieg trwa ok. 60 minut.</p>
        <h3>Jakie są zalecenia po zabiegu?</h3>
        <p>Przez ok. 24 h nie należy moczyć włosów brwi.</p>
      </div>
    </div>
  );
};

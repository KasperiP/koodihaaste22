# Solidabis koodihaaste 2022

#### EDIT:

_Ratkaisuni riitti koodihaasteessa sijaan **#2** ja verkkiksen **200€ lahjakortti** turvattu. Kiitos Solidabis haasteesta. Seuraavaa odotellessa :)
Lue lisää voittajista (ja mitä minun ratkaisustani on kommentoitu) [Solidabiksen sivuilta](https://www.solidabis.com/ajankohtaista/koodihaasteen-2022-voittajat/). ❤️_

## Mistä on kyse?

Tämä repository sisältää ratkaisuni Solidabiksen vuoden 2022 koodihaaste kilpailuun. Kilpailun alkuperäisen repositoryn voit löytää [täältä](https://github.com/SolidabisOy/koodihaaste22)

## Toteutuksesta:

Frontend toteutettu käyttäen Next.js React-frameworkkia. Päädyin tähän ratkaisuun, koska Next tuo ns "vanilla" Reactin päälle kivoja ominaisuuksia, kuten kansiorakenteeseen perustuvan routetuksen "out of the box". Tässä toteutuksessa Nextin kaikista kuumimmat ominaisuuden eivät tule juurikaan esille (ssr, isr), joten myös perus Reactilla olisi voinut saavuttaa saman ratkaisun. Olen kommentoinut koodiin **suomeksi** hieman ajatuksenjuoksuani joissakin kohdissa.

Bäkkäriin en tehnyt muutoksia, koska Java skills 404. Bäkkärin puolella olisi kuitenkin syytä tehdä muutoksia, mikäli tästä olisi halunnut paremman. Todellisessa tuotantoympäristössä frontin jakeleminen olisi syytä hoitaa Java backendin kautta, mutta en tämän kanssa lähtenyt kikkailemaan. Next.js tarvitsee myös [oman Node prosessinsa](https://nextjs.org/docs/advanced-features/custom-server) optimaaliseen suorituskykyyn, mutta tässä sillä ei olisi ollut juurikaan merkitystä.

Testeistä vielä sen verran että en tosiaan oo juurikaan kirjoitellut testejä omissa harrasteprojekteissa, joten testit on luokkaa ensikertalainen. Lisäksi jätin vähän turhan viimetippaan testien kirjoittamisen, niin testikattavuus todella kehno. On sentään Typescriptiä, niin ei ainakaan tyypittelyvirheitä pitäs hirviästi olla :D

## Käynnistys / käyttö:

###### Huomioita:

-   Node.js 16+ vaadittu
-   yarn-paketinhallintatyökalu

###### Asennus:

1. Kloonaa repository

```
git clone https://github.com/KasperiP/lounastutka.git
```

2. Asenna riippuvuudet frontend hakemistossa

```
cd frontend && yarn
```

Testit voi ajaa komennolla `yarn test` .

2. Käynnistä backend sen omien ohjeiden mukaan (docker / gradlew)

3. Käynnistä frontend

```
yarn dev
```

4. Navigoi sivulle selaimessa: http://localhost:3000

## Teknologiat:

-   Next.js 12.1.6 (React 18.1.0)
-   Material UI
-   Jest

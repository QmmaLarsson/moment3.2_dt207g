# Moment 3.2 i kursen DT207G, Backend-baserad webbutveckling

Detta är ett API som används för att hantera tidigare arbetslivserfarenheter. APIet är skapat med hjälp av NodeJs, Express, Mongoose och NoSQL-databasen MongoDB Atlas. Webbtjänsten kan hantera CRUD-operationer, det vill säga CREATE, READ, UPDATE och DELETE.

### Installation av databas

APIet är kopplat till en MongoDB Atlas-databas. För att komma igång, börja med att klona ned källkodsfilerna. Kör sedan kommandot "npm install" för att installera de nödvändiga npm-paketen. Slutligen, kör skriptet "index.js".

### Länk till API

https://moment3dt207g.onrender.com/api

### Användning av API

Nedan finns en beskriving av hur man på olika sätt kan nå APIet:

| Metod | Ändpunkt | Beskrivning |
|---|---|---|
| GET | /jobs | Hämtar alla jobb som finns tillagda i databasen |
| POST | /jobs/:id | Lägger till ett jobb till databasen |
| DELETE | jobs/:id | Raderar ett jobb från databasen |
| PUT | jobs/:id | Uppdaterar ett jobb från databasen |

Ett objekt returneras med följande struktur:

{

id: 1

companyname: "Cairns Marine"

jobtitle: "Dykare"

location: "Cairns"

description: "Plocka koraller för forskning och utbildning."

}

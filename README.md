# batapi

Simple Node JS server to serve Batman TV series characters  REST API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development

1. Clone the repo
2. run `npm install`
3. run `npm start`

## Endpoints

These are the endpoints provided by this server

- [/characters](http://localhost:3000/characters) - list of all characters name
```json
//Example Response
[{
    "id": 1,
    "name": "Batman"
  },
  {
    "id": 2,
    "name": "Robin"
  },
  {
    "id": 3,
    "name": "Joker"
}]
```
- [/characters/:id](http://localhost:3000/characters/1) - details for an specific character
```json
//Example Response
{
  "id": 1,
  "name": "Batman",
  "role": "hero",
  "avatar": "images/batman_md.png"
}
```
- [/quotes](http://localhost:3000/quotes) - list some quotes from each character
```json
//Example Response
[{
    "charId": 4,
    "quote": "Sorry Sir, My duties do not include aiding and abetting thievery"
  },
  {
    "charId": 2,
    "quote": "Holy Metronome! What a fate--punched into player-piano rolls!"
  },
  {
    "charId": 1,
    "quote": "All virtues are, old chum. Indeed, that's why they're virtues."
  },
  {
    "charId": 6,
    "quote": "Quick, my finks! Self-defense! The dynamic duo has flipped their wings!"
  },
  {
    "charId": 4,
    "quote": "We Anglo-finks have a long memory."
}]
```
- [/images/\<characterName\>_sm.png](http://localhost:3000/batman_sm.png) - small image of a character

![small character image](https://github.com/Carniatto/batapi/blob/master/images/batman_sm.png)

- [/images/\<characterName\>_md.png](http://localhost:3000/joker_md.png) - medium image of a character

![small character image](https://github.com/Carniatto/batapi/blob/master/images/joker_md.png)

## Authors

* **Mateus Carniatto** - *Creator* - [@c4rniatto](https://twitter.com/c4rniatto) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

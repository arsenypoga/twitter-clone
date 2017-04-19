const List= require('immutable').List
const Map = require('immutable').Map

const navigationItems = List([
  Map({name: "Home", id: 0, destination: "/", active: true}),
  Map({name: "Moments", id: 1, destination: "/moments", active: false}),
  Map({name: "Notiffications", id:  2, destination: "/notiffications", active: false}),
  Map({name: "Messages", id: 3, destination: "/messages", active: false})
])

console.log(navigationItems.set(1, navigationItems.get(0)))
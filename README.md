
# NSS-Modern-Javascript-Developer-Shake-Your-Fist-At-The-Sky
## Motivation
This was Javascript practice done while attending the [Nashville Software School](http://nashvillesoftwareschool.com/).

## How to Contribute
1. npm init -y
1. npm install
1. Add apiKey.json in javascripts folder.
```
{
    "key": "thisWouldBeTheKeyString"
}
```
1. Run grunt
## Synopsis
### Shake your fist at the sky
####  Goal: Practice jQuery, Promises, and optionally Handlebars
 
- [x] Accept two dates from the user (year, month, day) as a search parameter.
- [x] Use the NASA API (https://api.nasa.gov/api.html#NeoWS) to make an ajax call that will gather data about what objects will be close to our planet in the timeframe specified by the user’s dates.
- [x] Using the data you get back from NASA (promises!), use FOAAS to tell three of those asteroids to fuck off, by name.  http://www.foaas.com/
- [x] You can use whichever of the foaas message types you like.
- [x] Print these sky-fist-shaking statements to the DOM
 
### Bonus: 
- [x] Only tell those asteroids that are “potentially hazardous” to fuck off.
- [ ] Use different messages from foaas for the different asteroids.
- [x] Use Handlebars to print your three messages to the DOM

# WebdriverIO-Learning

Run command: yarn test '@tag'
for ex: yarn test '@aboutyou'

To enable Reporter for feature steps: Uncomment the "reporters: ['spec']," line in wdio.conf.js
To make the browser open and run tests visibly: Remove '--headless' from the chromeOptions in wdio.conf.js

"test": "wdio wdio.conf.js --cucumberOpts.tagExpression"

Selectors:

[id='hondacheck']
#benzcheck
[id='autosuggest']
#openwindow
#opentab
[id="carselect"]
option[value="bmw"]
select [value="benz"]
option[value="apple"]
input#autosuggest
tr:last-child td:last-child
tr:nth-child(3) td:last-child
a[class="dynamic-link"][href="/login"] ? 2 selectori

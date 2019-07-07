# convert-strings-to-any-case

## Install package:
`npm i any-case`

## How to use

- camel case
```
const { camel } = require('any-case')
const string = camel('Lorem ipsum Dolor sit amet') // expect 'loremIpsumDolorSitAmet'
```

- title case
```
const { title } = require('any-case')
const string = title('Lorem ipsum Dolor sit amet') // expect 'Lorem Ipsum Dolor Sit Amet'
```

- snake case
```
const { snake } = require('any-case')
const string = snake('Lorem ipsum Dolor sit amet') // expect 'lorem_ipsum_dolor_sit_amet'
```

- screamingSnake case
```
const { screamingSnake } = require('any-case')
const string = screamingSnake('Lorem ipsum Dolor sit amet') // expect 'LOREM_IPSUM_DOLOR_SIT_AMET'
```

- dash case
```
const { dash } = require('any-case')
const string = dash('Lorem ipsum Dolor sit amet') // expect 'lorem-ipsum-dolor-sit-amet'
```

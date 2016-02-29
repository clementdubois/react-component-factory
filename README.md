# schema factory
small utility to create boilerplate of a schema component with fixtures, proptypes and tests

It will create four files :
* schema.fixtures.js
* schema.serverSpec.js
* schema.propTypes.js
* schema.js

## Usage
`node --harmony index.js componentName [/path/to/destination] [*fieldName:fieldType:defaultValue]`

Or use it as a npm script :

`npm i -g ./`

`generate-component-schema ComponentName [/path/to/destination] [*fieldName:fieldType:defaultValue]`

## Warning
This script will create some boilerplate. It works well for simple case (scalar fields) but it doesn't handle well sub objects or lists.
In any use case you have to check each file to see if it's seems coherent.

In order to generate fixtures and corresponding tests, please provide a default value for each field (or manually check after generation)


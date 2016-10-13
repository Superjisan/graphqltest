var generateSchema = require('json-to-graphql');
var contributor = require('./contributor.json');

const contributorSchema = generateSchema(contributor);
fs.writeFile('contributor-schema.js', contributorSchema, (err) => {
    if(err) {
        throw new Error('err ' + err);
    }
    console.log('contributor schema created');
});
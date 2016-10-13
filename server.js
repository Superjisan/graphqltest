
var express = require('express');
var graphqlHTTP = require('express-graphql');
var fs = require('fs');
var {
    graphql,
    buildSchema,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLSchema
} = require('graphql');
var fakedata = require('./contributor.json');
var contributorType = require('./contributor-type.js')

const ContributorType = new GraphQLObjectType({
    name: 'ContributorType',
    fields: {
        name: {
            description: 'enter your name',
            type: new GraphQLNonNull(GraphQLString)
        }
    }
});

// Construct a schema, using GraphQL schema language
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        contributor: {
            description: 'contributors yall',
            type: new GraphQLNonNull(contributorType)
        }
    })
  })
});


// The root provides a resolver function for each API endpoint
var root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => {
    return Math.random();
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  },
  contributor: () => fakedata,
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
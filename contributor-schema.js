const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

const BioTitleAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        statusTerm: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for statusTerm
        },
        prefLabel: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for prefLabel
        },
        doNotTag: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for doNotTag
        },
        created: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for created
        },
        createdBy: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for createdBy
        },
        extractionMethod: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for extractionMethod
        },
        modified: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for modified
        },
        modifiedBy: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for modifiedBy
        }
    },
});

const BioTitleType = new GraphQLObjectType({
    name: 'bioTitle',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
        },
        displayName: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for displayName
        },
        path: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for path
        },
        vocabulary: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for vocabulary
        },
    },
});


const ProfileImageType = new GraphQLObjectType({
    name: 'profileImage',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
        },
    },
});

const SkillsAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        statusTerm: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for statusTerm
        },
        created: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for created
        },
        modified: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for modified
        },
        doNotextract: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for doNotextract
        },
        requestor: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for requestor
        },
        Comment: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for Comment
        },
        definition: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for definition
        },
        prefLabel: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for prefLabel
        },
        extractionMethod: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for extractionMethod
        }
    },
});

const SkillsType = new GraphQLObjectType({
    name: 'skills',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
        },
        displayName: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for displayName
        },
        path: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for path
        },
        vocabulary: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for vocabulary
        },
            },
});

const HobbiesAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        statusTerm: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for statusTerm
        },
        created: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for created
        },
        modified: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for modified
        },
        doNotextract: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for doNotextract
        },
        requestor: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for requestor
        },
        Comment: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for Comment
        },
        definition: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for definition
        },
        prefLabel: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for prefLabel
        },
        extractionMethod: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for extractionMethod
        }
    },
});


const HobbiesType = new GraphQLObjectType({
    name: 'hobbies',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
        },
        displayName: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for displayName
        },
        path: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for path
        },
        vocabulary: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for vocabulary
        },
            },
});

const AlmamatersAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        locationType: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for locationType
        },
        definition: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for definition
        },
        prefLabel: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for prefLabel
        },
        created: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for created
        },
        modified: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for modified
        },
        Comment: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for Comment
        }
    },
});

const AlmamatersType = new GraphQLObjectType({
    name: 'almamaters',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
        },
        displayName: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for displayName
        },
        path: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for path
        },
        vocabulary: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for vocabulary
        },
            },
});

const HometownAttributesType = new GraphQLObjectType({
    name: 'attributes',
    fields: {
        locationType: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for locationType
        },
        lat: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for lat
        },
        long: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for long
        },
        created: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for created
        },
        modified: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for modified
        },
        prefLabel: {
            description: 'enter your description',
            type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
            // TODO: Implement resolver for prefLabel
        }
    },
});


const HometownType = new GraphQLObjectType({
    name: 'hometown',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
        },
        name: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for name
        },
        displayName: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for displayName
        },
        path: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for path
        },
        vocabulary: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for vocabulary
        },
            },
});


const LegacyStaffsType = new GraphQLObjectType({
    name: 'legacyStaffs',
    fields: {
        id: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLID),
            // TODO: Implement resolver for id
        },
        siteCode: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for siteCode
        },
        error: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for error
        }
    },
});


const EventStateType = new GraphQLObjectType({
    name: 'eventState',
    fields: {
        headHash: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for headHash
        },
        requestedHash: {
            description: 'enter your description',
            type: new GraphQLNonNull(GraphQLString),
            // TODO: Implement resolver for requestedHash
        }
    },
});


module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: () => ({
            firstName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for firstName
            },
            lastName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for lastName
            },
            email: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for email
            },
            byline: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for byline
            },
            facebookUrl: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for facebookUrl
            },
            twitterHandle: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for twitterHandle
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
            },
            displayName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for displayName
            },
            path: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for path
            },
            vocabulary: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for vocabulary
            },
            statusTerm: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for statusTerm
            },
            prefLabel: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for prefLabel
            },
            doNotTag: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for doNotTag
            },
            created: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for created
            },
            createdBy: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for createdBy
            },
            extractionMethod: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for extractionMethod
            },
            modified: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for modified
            },
            modifiedBy: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for modifiedBy
            },

            bioTitle: {
                description: 'enter your description',
                type: new GraphQLNonNull(BioTitleType),
                // TODO: Implement resolver for bioTitle
            },
            googlePlusUrl: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for googlePlusUrl
            },
            linkedinUrl: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for linkedinUrl
            },
            pinterestUrl: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for pinterestUrl
            },
            bylineSources: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for bylineSources
            },
            instagramUrl: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for instagramUrl
            },
            youtubeUrl: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for youtubeUrl
            },
            phoneNumber: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for phoneNumber
            },
            profileImage: {
                description: 'enter your description',
                type: new GraphQLNonNull(ProfileImageType),
                // TODO: Implement resolver for profileImage
            },
            snapchatUrl: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for snapchatUrl
            },
            bio: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for bio
            },
            isActive: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLBoolean),
                // TODO: Implement resolver for isActive
            },
            languages: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for languages
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
            },
            displayName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for displayName
            },
            path: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for path
            },
            vocabulary: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for vocabulary
            },
            statusTerm: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for statusTerm
            },
            created: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for created
            },
            modified: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for modified
            },
            doNotextract: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for doNotextract
            },
            requestor: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for requestor
            },
            Comment: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for Comment
            },
            definition: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for definition
            },
            prefLabel: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for prefLabel
            },
            extractionMethod: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for extractionMethod
            },

            skills: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(SkillsType)),
                // TODO: Implement resolver for skills
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
            },
            displayName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for displayName
            },
            path: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for path
            },
            vocabulary: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for vocabulary
            },
            statusTerm: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for statusTerm
            },
            created: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for created
            },
            modified: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for modified
            },
            doNotextract: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for doNotextract
            },
            requestor: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for requestor
            },
            Comment: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for Comment
            },
            definition: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for definition
            },
            prefLabel: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for prefLabel
            },
            extractionMethod: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for extractionMethod
            },

            hobbies: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(HobbiesType)),
                // TODO: Implement resolver for hobbies
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
            },
            displayName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for displayName
            },
            path: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for path
            },
            vocabulary: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for vocabulary
            },
            locationType: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for locationType
            },
            definition: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for definition
            },
            prefLabel: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for prefLabel
            },
            created: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for created
            },
            modified: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for modified
            },
            Comment: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for Comment
            },

            almamaters: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(AlmamatersType)),
                // TODO: Implement resolver for almamaters
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
            },
            name: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for name
            },
            displayName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for displayName
            },
            path: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for path
            },
            vocabulary: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for vocabulary
            },
            locationType: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for locationType
            },
            lat: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for lat
            },
            long: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for long
            },
            created: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for created
            },
            modified: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for modified
            },
            prefLabel: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for prefLabel
            },

            hometown: {
                description: 'enter your description',
                type: new GraphQLNonNull(HometownType),
                // TODO: Implement resolver for hometown
            },
            username: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for username
            },
            beats: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
                // TODO: Implement resolver for beats
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
            },
            siteCode: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for siteCode
            },
            error: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for error
            },
            legacyStaffs: {
                description: 'enter your description',
                type: new GraphQLNonNull(new GraphQLList(LegacyStaffsType)),
                // TODO: Implement resolver for legacyStaffs
            },
            updatedDate: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for updatedDate
            },
            updatedByUser: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for updatedByUser
            },
            updatedBySystem: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for updatedBySystem
            },
            currentVersionHash: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for currentVersionHash
            },
            currentVersionDate: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for currentVersionDate
            },
            id: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLID),
                // TODO: Implement resolver for id
            },
            aggregateName: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for aggregateName
            },
            createdByUser: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for createdByUser
            },
            createdBySystem: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for createdBySystem
            },
            createdDate: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for createdDate
            },
            friendlyId: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLInt),
                // TODO: Implement resolver for friendlyId
            },
            headHash: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for headHash
            },
            requestedHash: {
                description: 'enter your description',
                type: new GraphQLNonNull(GraphQLString),
                // TODO: Implement resolver for requestedHash
            },
            eventState: {
                description: 'enter your description',
                type: new GraphQLNonNull(EventStateType),
                // TODO: Implement resolver for eventState
            }
        })
    })
})
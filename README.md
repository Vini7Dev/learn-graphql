# GraphQL Course

- Link to [Course](https://www.udemy.com/course/curso-de-graphql-e-apollo-server-client)

# Notes

# Scalar Types

**Text Types:**
- ID
- String

**Number Types:**
- Int
- Float

**Logical Types:**
- Boolean

**Array Types:**
- [Type]
  *Example: [Int]*

# Complex Types

**Object Types:**
```graphql
type TypeName {
  attr1: ID!
  attr2: [String]
  ...
}
```

# Handling Response:
- field: Type! (Not null)
- field: [Type!]! (Not null and no elements null)

# Send Agruments
```graphql
extend type Query {
  user(user_id: ID!): User
}
```

# Send Variables
```graphql
query getUser($user_id: ID!) {
  user(user_id: $user_id) {
    id
    firstName
  }
}
```
```json
{
  "user_id": 777
}
```

# Query Aliases
```graphql
query {
  aliasA: post(post_id: "341") {
    aliasAA: id
    title
  }
  aliasB: post(post_id: "342") {
    alias_BB: id
    title
  }
}
```

# Query Fragments
```graphql
fragment postFragment on Post {
  id
  title
  body
}

query {
  post1: post(post_id: "123") {
    ...postFragment
  }
  post2: post(post_id: "321") {
    ...postFragment
  }
}
```

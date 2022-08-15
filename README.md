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

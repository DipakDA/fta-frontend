/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFamilyMember = /* GraphQL */ `
  query GetFamilyMember($id: ID!) {
    getFamilyMember(id: $id) {
      id
      firstName
      lastName
      dateOfBirth
      email
      mobileNumber {
        MobileNumber
        __typename
      }
      currentOccupation
      placeOfBirth
      address
      cityTown
      pincode
      fatherName
      children
      maritalStatus
      sibling
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFamilyMembers = /* GraphQL */ `
  query ListFamilyMembers(
    $filter: ModelFamilyMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilyMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        dateOfBirth
        email
        currentOccupation
        placeOfBirth
        address
        cityTown
        pincode
        fatherName
        children
        maritalStatus
        sibling
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

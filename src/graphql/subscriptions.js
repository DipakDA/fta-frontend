/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFamilyMember = /* GraphQL */ `
  subscription OnCreateFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onCreateFamilyMember(filter: $filter) {
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
export const onUpdateFamilyMember = /* GraphQL */ `
  subscription OnUpdateFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onUpdateFamilyMember(filter: $filter) {
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
export const onDeleteFamilyMember = /* GraphQL */ `
  subscription OnDeleteFamilyMember(
    $filter: ModelSubscriptionFamilyMemberFilterInput
  ) {
    onDeleteFamilyMember(filter: $filter) {
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

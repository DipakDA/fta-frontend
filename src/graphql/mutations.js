/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFamilyMember = /* GraphQL */ `
  mutation CreateFamilyMember(
    $input: CreateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    createFamilyMember(input: $input, condition: $condition) {
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
export const updateFamilyMember = /* GraphQL */ `
  mutation UpdateFamilyMember(
    $input: UpdateFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    updateFamilyMember(input: $input, condition: $condition) {
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
export const deleteFamilyMember = /* GraphQL */ `
  mutation DeleteFamilyMember(
    $input: DeleteFamilyMemberInput!
    $condition: ModelFamilyMemberConditionInput
  ) {
    deleteFamilyMember(input: $input, condition: $condition) {
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

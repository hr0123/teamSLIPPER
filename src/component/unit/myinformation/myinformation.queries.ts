import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      email
      nickname
      introduce
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserSaveInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      nickname
      imageUrl
      introduce
    }
  }
`;

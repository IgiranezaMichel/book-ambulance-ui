import { gql } from "@apollo/client";

export const CREATE_USER=gql`mutation AddUser($input: userInput!) {
    addUser(input: $input) {
      name
    }
  }`;
  
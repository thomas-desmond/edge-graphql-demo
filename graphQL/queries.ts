import { gql } from "graphql-request";

export const GET_ALL_BLOGS = gql`
  {
    allM_Content_Blog {
      results{
        blog_Title
        blog_Body
      }
    }
  }
`
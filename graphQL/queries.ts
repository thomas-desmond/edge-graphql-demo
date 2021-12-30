import { gql } from "graphql-request";

// Get all blogs
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

// Get all blogs with "Next.js" in the title
export const BLOGS_WITH_NEXTJS_TITLE = gql`
{
    allM_Content_Blog (where:{blog_Title_contains:"Next.js"} ) {
    	results{
        blog_Title
        blog_Body
      }
    }
}`

// Get firs 3 blogs in Created On Descending order
export const FIRST_THREE_BLOGS_DESC = gql`
{
    allM_Content_Blog (first:3 orderBy:CREATEDON_DESC) {
    	results{
        blog_Title
        blog_Body
      }
    }
}
`
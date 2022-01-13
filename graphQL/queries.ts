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

// Get first 3 blogs in Created On Descending order
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

// Get all blogs created between Dec 30th 2021 and Jan 14th 2022
export const BLOGS_CREATED_ON_IN_DATE_RANGE = gql`
{
  allM_Content_Blog (where: {createdOn_gt:"2021-12-30", createdOn_lt: "2022-01-14"}) {
    results {
      blog_Title
      blog_Body
      id
      createdOn
    }
  }
}
`
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async (limit, offset) => {
  const query = gql`
    query GetPosts($limit: Int!, $offset: Int!) {
      postsConnection(orderBy: createdAt_DESC, first: $limit, skip: $offset) {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { limit, offset });
  return result.postsConnection.edges;
};

export const getPostsAll = async () => {
  const query = gql`
  query GetPosts() {
    postsConnection() {
      edges {
        node {
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
        }
      }
    }
  }`;
  const result = await request(graphqlAPI, query, {});
  return result.postsConnection.edges;
};

export const getPagesCount = async (postPerPage) => {
  const query = gql`
  query GetPostsCount() {
    postsConnection() {
      aggregate {
        count
      }
    }
  }`;
  const result = await request(graphqlAPI, query, {});
  let pagesCount = 0;
  let postsCount = result.postsConnection.aggregate.count;
  while (postsCount > 0) {
    pagesCount++;
    postsCount -= postPerPage;
  }

  return pagesCount;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        content {
          raw
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

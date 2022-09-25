// for fetching all of the products
export const productsQuery = `
  query Products {
    products(first: 400) {
      edges {
        node {
          title
          handle
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
        }
      }
    }
  }
`;

// for fetching single product details for product page
export const singleProductQuery = `
query SingleProduct ($handle: String!) {
  productByHandle (handle: $handle) {
    title
    handle
    description
    updatedAt
    tags
    priceRange {
      minVariantPrice{
        amount
      }
    }
    images(first: 1) {
      edges {
        node {
          transformedSrc
          altText
        }
      }
    }
    variants(first: 1){
      edges{
        node{
          id
        }
      }
    }
  }

  products(first: 100) {
    edges {
      node {
        title
        handle
        tags
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
       
      }
    }
  }
}

`;

// for checkhout processing
export const checkoutMutationQuery = `
mutation CheckoutCreate($variantId: ID!, $productQuantity: Int!) {
  checkoutCreate(input: {lineItems: {variantId: $variantId, quantity: $productQuantity}}) {
    checkout {
      webUrl
    }
  }
}
`;

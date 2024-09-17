import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
  const queryParams = new URLSearchParams();
  if (keyword) queryParams.set('keyword', keyword);
  
  return (pages > 1 && (
      <Pagination>
          {[...Array(pages).keys()].map((x) => (
              <LinkContainer
                  key={x + 1}
                  to={{
                      pathname: isAdmin ? '/admin/productlist' : '/',
                      search: `?${queryParams.toString()}&page=${x + 1}`
                  }}
              >
                  <Pagination.Item active={x + 1 === page}>
                      {x + 1}
                  </Pagination.Item>
              </LinkContainer>
          ))}
      </Pagination>
  ));
}

export default Paginate;

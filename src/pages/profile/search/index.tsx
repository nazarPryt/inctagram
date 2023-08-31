import React from 'react'

import styled from 'styled-components'

import { getAuthorizedLayout } from '_app/Layouts/authorized/AuthorizedLayout'

export default function SearchPage() {
  return <SearchPageWrapper>search</SearchPageWrapper>
}
SearchPage.getLayout = getAuthorizedLayout

const SearchPageWrapper = styled.div``

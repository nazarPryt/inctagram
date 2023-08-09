import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import styled from 'styled-components'

export default function SearchPage() {
    return <SearchPageWrapper>search</SearchPageWrapper>
}
SearchPage.getLayout = getAuthorizedLayout

const SearchPageWrapper = styled.div``

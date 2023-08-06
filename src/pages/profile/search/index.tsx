import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import styled from 'styled-components'

export default function SearchPage() {
    return (
        <SearchPageWrapper>
            <div className={'one'}></div>
            <div className={'two'}></div>
        </SearchPageWrapper>
    )
}
SearchPage.getLayout = getAuthorizedLayout

const SearchPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 400px;

    .one {
        flex: 2;
        background-color: cornflowerblue;
    }
    .two {
        flex: 3;
        background-color: darkcyan;
    }
`

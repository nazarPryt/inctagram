import React from 'react'
import {getAuthorizedLayout} from '_app/Layouts/authorized/AuthorizedLayout'
import styled from 'styled-components'
import {ButtonAs} from 'shared/ui/ButtonAs/ButtonAs'

export default function SearchPage() {
    return (
        <SearchPageWrapper>
            <ButtonAs ast={'a'} href={'dsd'}>
                sdfsddf
            </ButtonAs>
        </SearchPageWrapper>
    )
}
SearchPage.getLayout = getAuthorizedLayout

const SearchPageWrapper = styled.div``

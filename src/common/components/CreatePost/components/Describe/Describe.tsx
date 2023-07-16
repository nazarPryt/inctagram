import React, {ChangeEvent, useState} from 'react'
import Image from 'next/image'
import EmptyAvatarIcon from 'common/assets/icons/emptyAvatar.svg'
import {Textarea} from '../../../Textarea/Textarea'
import {AvatarWrapper, DescribeWrapper} from './styled'

type DescribeType = {
    describeText: string
    changeTextHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Describe: React.FC<DescribeType> = props => {
    return (
        <DescribeWrapper>
            <div className='headerBlock'>
                <AvatarWrapper>
                    <EmptyAvatarIcon />
                </AvatarWrapper>
                <span>Your Name</span>
            </div>
            <Textarea
                defaultValue={props.describeText}
                onChange={e => props.changeTextHandler(e)}
                label='Add Publication descriptions'
            />
            <div>ADD LOCATION : tobeContinued...</div>
        </DescribeWrapper>
    )
}

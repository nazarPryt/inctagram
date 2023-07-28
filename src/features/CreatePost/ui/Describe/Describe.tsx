import React, {ChangeEvent} from 'react'
import Image from 'next/image'
import {AvatarWrapper, DescribeWrapper} from './styled'
import {TextArea} from '../../../../shared/ui/TextArea/TextArea'
import {useSession} from 'next-auth/react'
import {useGetUserProfileQuery} from '../../../../redux/api/profileAPI'
import SkeletonAvatar from '../../../../shared/assets/icons/skeletonCycle.svg'
import SkeletonTitle from '../../../../shared/assets/icons/skeletonTitle.svg'

type DescribeType = {
    describeText: string
    changeTextHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Describe: React.FC<DescribeType> = props => {
    const {data: user} = useSession()
    const {data, isLoading} = useGetUserProfileQuery(user!.user.userId)

    return (
        <DescribeWrapper>
            <div className='headerBlock'>
                <AvatarWrapper>
                    {data ? (
                        <Image
                            src={data.avatars[0].url}
                            width={data.avatars[0].width}
                            height={data.avatars[0].height}
                            alt={'avatar'}
                        />
                    ) : (
                        <SkeletonAvatar />
                    )}
                </AvatarWrapper>
                <div className='userNameWrapper'>
                    <span>{data ? data.userName : <SkeletonTitle />}</span>
                </div>
            </div>
            <TextArea
                defaultValue={props.describeText}
                onChange={e => props.changeTextHandler(e)}
                label='Add Publication descriptions'
            />
            <div>ADD LOCATION : tobeContinued...</div>
        </DescribeWrapper>
    )
}

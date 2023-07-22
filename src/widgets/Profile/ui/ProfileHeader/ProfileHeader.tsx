import React from 'react'
import {ProfileHeaderWrapper} from 'widgets/Profile/ui/ProfileHeader/ProfileHeader.styled'
import Link from 'next/link'
import {PATH} from 'shared/constants/PATH'
import Image from 'next/image'

export const ProfileHeader = () => {
    return (
        <ProfileHeaderWrapper>
            <div className={'profileAvatar'}>
                <Image src={'https://loremflickr.com/500/500'} alt={'ProfileAvatar'} width={205} height={205} />
            </div>
            <div className={'profileData'}>
                <div className={'profileHeader'}>
                    <h2>URLProfiele</h2>
                    <Link className={'settingsLink'} href={PATH.PROFILE_SETTINGS}>
                        Profile Settings
                    </Link>
                </div>
                <div className={'profileStatistics'}>
                    <div>
                        <span>2 218</span>
                        Following
                    </div>
                    <div>
                        <span>2 218</span>
                        Following
                    </div>
                    <div>
                        <span>2 218</span>
                        Following
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa officia, sapiente! Accusantium,
                    aliquam doloremque enim eos eum ipsa obcaecati odit officiis omnis optio porro quasi quis quisquam
                    quod rerum sit, veniam? Dignissimos ea nostrum possimus quibusdam totam. Cumque eaque inventore nam,
                    nostrum quo rem, repudiandae sapiente soluta unde voluptas, voluptatibus! Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit. Alias dolor dolore, inventore ipsam perspiciatis, possimus quas
                    quisquam repellendus, soluta totam vitae voluptas. Adipisci aliquam, at beatae, commodi deleniti
                    doloribus eligendi fugit libero numquam officiis quas quo saepe sequi, similique tempore unde
                    voluptas voluptatibus. Autem deserunt ducimus eligendi eum, exercitationem facilis id illum in
                    incidunt ipsam libero mollitia quis sed vel voluptate. Assumenda atque autem commodi consectetur
                    culpa delectus ea, est fugit ipsum magni nihil quae sequi ullam voluptas voluptates. Culpa
                    dignissimos eligendi error, exercitationem facilis harum impedit ipsam iste iusto maxime
                    perspiciatis provident quaerat quam quas quod ratione sit! Veniam!
                </p>
            </div>
        </ProfileHeaderWrapper>
    )
}

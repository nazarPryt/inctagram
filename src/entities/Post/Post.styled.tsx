import {Variants, motion} from 'framer-motion'
import styled from 'styled-components'

const PostVariant: Variants = {
    exit: {
        opacity: 0,
        scale: 0,
        transition: {delay: 3},
    },
    hidden: {
        opacity: 0,
        scale: 0,
        transition: {delay: 3},
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {delay: 3, ease: 'backIn'},
    },
}

export const PostWrapper = styled(motion.div).attrs(() => ({
    animate: 'visible',
    exit: 'exit',
    initial: 'hidden',
    layout: true,
    variants: {PostVariant},
}))`
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
    max-width: 500px;

    margin-bottom: 20px;
    padding: 0 3px;
`

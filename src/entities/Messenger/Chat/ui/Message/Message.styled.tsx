import {typography} from '@nazar-pryt/inctagram-ui-kit'
import {Variants, motion} from 'framer-motion'
import styled, {css} from 'styled-components'

export const MessageVariant: Variants = {
    exit: {
        opacity: 0,
        transition: {duration: 0.3},
        x: 100,
    },
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, transition: {ease: 'backIn'}, y: 0},
}

export const MessageStyled = styled(motion.div).attrs<{$owner?: boolean}>({
    animate: 'visible',
    exit: 'exit',
    initial: 'hidden',
    layout: true,
    variants: {MessageVariant},
})`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 30px;

    .avatar {
        width: 50px;
        height: 50px;
    }
    .messageContent {
        max-width: 80%;
        display: flex;
        flex-direction: column;
        gap: 5px;

        p {
            background-color: ${props => props.theme.bodyColor[300]};
            color: ${props => props.theme.textColor[100]};
            padding: 10px 20px;
            border-radius: 0 10px 10px 10px;
            max-width: max-content;
        }
        span {
            ${typography.small_text}
        }
    }

    ${props => {
        if (props.$owner) {
            return css`
                flex-direction: row-reverse;

                .messageContent {
                    align-items: flex-end;
                    p {
                        background-color: ${props => props.theme.palette.primary[300]};
                        border-radius: 10px 10px 0 10px;
                        color: white;
                    }
                }
            `
        }
    }}
`

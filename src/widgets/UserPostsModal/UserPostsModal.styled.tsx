import styled from 'styled-components'
import {Dialog} from '@radix-ui/react-dialog'

export const UserPostsModalWrapper = styled(Dialog)`
  .overlay {
    position: fixed;
    z-index: 100;
    inset: 0;
    background-color: rgb(0 0 0 / 50%);
  }

  .content {
    position: fixed;
    z-index: 101;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: red;
    
    .contentBox {
      padding: 23px 24px 36px;
    }
`

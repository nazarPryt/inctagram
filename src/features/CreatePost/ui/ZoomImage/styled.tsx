import styled from 'styled-components'

export const ZoomWrapper = styled.div`
	display: ${props => (props.hidden ? 'flex' : 'none')};
	flex-direction: column;
	background-color: ${props => props.theme.bodyColor[500]};
	padding: 10px;
	position: absolute;
	left: 50px;
	top: 8px;
}

input {
	width: 90px;
	height: 3px;
}
`

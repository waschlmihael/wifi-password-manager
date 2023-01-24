import styled from 'styled-components';

export const StyledParagraph = styled.p`
	font-family: ${({ theme }) => theme.font__body};
	font-weight: 300;
	font-size: 1rem;
	line-height: 1.618;
	color: ${({ theme }) => theme.fg};
	margin-bottom: 1em;
	&:last-of-type {
		margin-bottom: 2.75rem;
	}
	strong {
		font-weight: bold;
	}
`;
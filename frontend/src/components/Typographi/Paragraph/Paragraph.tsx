import React from 'react';

import { StyledParagraph } from './Styles';

export interface ParagraphProps {
	children: React.ReactChild | React.ReactChild[];
}

export const Paragraph = ({ children }: ParagraphProps) => (
	<StyledParagraph>{children}</StyledParagraph>
);
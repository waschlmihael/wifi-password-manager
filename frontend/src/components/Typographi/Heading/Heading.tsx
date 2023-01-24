import React from 'react';

import {StyledHeading} from "./Styles";

export type THeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
    children: React.ReactChild;
    tag: THeadingTag;
    bannerHeading?: boolean;
}

export const Heading = ({children, tag, bannerHeading}: HeadingProps) => (
    <StyledHeading className={bannerHeading ? "bannerHeading" : ""} as={tag}>{children}</StyledHeading>
);

Heading.defaultProps = {
    tag: 'h2',
    bannerHeading: false
};
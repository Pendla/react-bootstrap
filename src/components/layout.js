import React, { Component } from 'react';
import styled from 'styled-components';

export const Grid = styled.div`
    grid: ${({rows}) => rows} / ${({cols}) => cols};
    display: grid;
`;

export const Center = styled.div`
    justify-self: center;
`;

export const Paragraph = styled.p`
    ${props => props.center ? 'text-align: center;' : ''}
    padding: 0;
    margin: 0 0 ${props => props.noBottomMargin ? '' : '16px'} 0;
`;

export const Card = styled.div`
    background: #fff;
    border-radius: 3px;
    padding: 24px;
    margin: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

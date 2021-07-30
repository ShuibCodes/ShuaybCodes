
import styled from 'styled-components';
import { Link } from 'gatsby';


export const StyledLink = styled(Link)`
border: 1px solid blue;
border-radius: 3px;
width: 100px;
padding: 10px 25px 10px 25px;
margin-left: 1rem;
font-size: 25px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-weight: 500;

&:hover{
    background-color: lightblue;
    text-decoration: none;
}
`


export const BlogLayout = styled.div`
    /* text-align: center; */

    padding: 10%;
    font-family: sans-serif;
    font-size: 20px;
    display: inline-block;
    

`

export const Styledh1 = styled.h1`
        font-size: 40px;
`

export const Styledp = styled.p`
    font-size: 20px
`


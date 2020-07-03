import styled from "styled-components";


export const StyledMenuAndScheduleHeader = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Red Hat Display";
    color: #FBE8BF;
    display: block;
    margin: auto;
`;
export const Menu = styled.div`
    font: normal 130% 'trebuchet ms', sans-serif;
    display: flex;
    padding: 6px 35px 5px 28px;
    color: white;
    list-style: none;
`;
export const ElementOfMenu = styled.div`
    font: normal 110% 'trebuchet ms', sans-serif;
    color: #FBE8BF;
    letter-spacing: 2%;
    text-decoration: none;
    padding: 6px 35px 5px 28px;
    transition: 0.25s linear;
    display: flex;
    &:hover{
       color: #ecba04;
       text-decoration: underline;
    }
`;
export const StyledOfTime = styled.div`
    font: normal 90% 'trebuchet ms', sans-serif;
    margin-left: auto;
    margin-right: auto;
    width:200px;
    padding-bottom: 20px;
`;
import styled from "styled-components";

const GraphContainerStyled = styled("div")`
	width: 90vw;
	border: 1px solid #a8a8e9;
`;

GraphContainerStyled.Subject = styled("div")`
	font-size: 50px;
	height: 25vh;
`;
GraphContainerStyled.Content = styled("div")`
	font-size: 25px;
	height: 400px;
	width: 100%;
    border: 1px solid #a8a8e9;
    padding-bottom: 24px;
`;

GraphContainerStyled.Status = styled("div")`
	font-size: 50px;
	height: 50px;
	width: 100%;
    border: 1px solid blue;
    padding: 24px;
`;
export { GraphContainerStyled };

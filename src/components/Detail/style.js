import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  background: ${(props) => `url(${props.props}) no-repeat top center `};
  background-size: 100%;
  width: 100%;
  height: 80vh;
`;

export const MovieDetailBg = styled.div`
  background: linear-gradient(
    to bottom right,
    rgba(30%, 59.61%, 59.22%, 1),
    rgba(40%, 59.61%, 59.22%, 0.3)
  );
  height: 84vh;
`;
export const MovieDetailContent = styled.p`
  color: white;
  font-size: 1.5rem;
  display: block;
  font-weight: bold;
`;

export const DetailImg = styled.img`
  float: left;
  margin-top: 1rem;
  padding: 30px;
`;

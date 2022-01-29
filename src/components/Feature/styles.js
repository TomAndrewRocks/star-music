import styled from 'styled-components';
import FeaturePic from '../../assets/bg-intro.png';

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100rem;
  max-height: 800px!important;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

export const ColumnContainer = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const Wrapper = styled.div``

export const ColumnMedia = styled.div``

export const ColumnText = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  font-family: 'Red Hat Display'
`

export const ColumnImage = styled.div`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
`

import styled from 'styled-components';

export const MiniCardBlock = styled.div`
.mini-card {
    display: flex;
    padding-bottom: 5px;
    align-items: center;

    img{
      object-fit: cover;
      object-position: center;
      height: 70px;
      width: 65px;
      padding-right: 5px;
    }

    .mini-card-info{
      text-align: start;
      font-size: 15px;

      p:nth-of-type(1){
        font-weight: 700;
      }
    }
  }
`;

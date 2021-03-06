import styled from "@emotion/styled";

export const WrapperOut = styled.div`
  width: 100%;
  margin: 5% 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "HallymGothic-Regular";
`;
export const Infinite = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Head = styled.div`
  width: 100%;
  font-size: 1.8rem;
  border-bottom: 1px solid gainsboro;
  padding: 0% 1% 2% 2%;
  /* margin-bottom: 2%; */
`;
export const UserContents = styled.div`
  width: 90%;
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  box-shadow: 6px 4px 6px -5px gainsboro;
  border-radius: 10px;
  margin: 0 auto 20px auto;
  :hover {
    box-shadow: 5px 5px 15px 5px #e1e1e1;
  }
`;
export const ImageWrap = styled.div`
  width: 34%;
`;
export const UserWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  position: relative;
`;
export const Heart = styled.img`
  position: absolute;
  top: 6%;
  left: 34%;
  width: 20px;
  height: 20px;
  z-index: 1;
  cursor: pointer;
`;
export const ListTitleWrap = styled.div`
  padding: 3%;
`;

export const ListTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;
export const ListHometown = styled.div`
  color: #7b7e7e;
  font-size: 1rem;
`;
export const ListShopName = styled.div`
  color: #2a2f2f;
  font-size: 1.5rem;
`;
export const ImageLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px 0 0 10px;
  position: relative;
`;

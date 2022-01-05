import styled from "@emotion/styled";
export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto;
  max-width: 700px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border: 1px solid #102030;
  justify-content: space-between;
  align-items: center;
`;
export const Status = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
  background-color: ${(props) => {
    switch (props.state) {
      case "online":
        return "#00FF00";
      case "ofline":
        return "#FF00FF";
      default:
        return "000000";
    }}};
  
`;
export const Avatar = styled.img`
width: 80px;
border: 1px solid green;
border-radius: 15px;
padding: 10px`;
export const Name = styled.p`
font-size: 35px`;

import {
  Main,
  Landing,
  Logo,
  ClassStore,
  Input,
  Form,
  SearchBtn,
  RightDiv,
  RightA,
  LoginDiv,
} from "./style";

import { SearchIcon } from "@class101/ui";

export default function Header() {
  return (
    <header>
      <Main>
        <Landing>
          <Logo>CLASS101</Logo>
          <ClassStore>
            <h4>클래스</h4>
            <h4>스토어</h4>
          </ClassStore>

          <Form>
            <Input placeholder="찾으시는 취미가 있으신가요?"></Input>
            <SearchBtn>
              <SearchIcon size={20} />
            </SearchBtn>
          </Form>

          <LoginDiv>
            <RightDiv>
              <RightA>크리에이터지원</RightA>
            </RightDiv>
            <RightDiv>
              <RightA>기업교육</RightA>
            </RightDiv>
            <RightDiv>
              <RightA>로그인</RightA>
            </RightDiv>
          </LoginDiv>
        </Landing>
      </Main>
    </header>
  );
}

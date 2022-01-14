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
  NoDecoA,
} from "./style";
import { SearchIcon } from "@class101/ui";

export default function TopHeader() {
  return (
    <header>
      <Main>
        <Landing>
          <NoDecoA href={process.env.REACT_APP_URL}>
            <Logo>CLASS101</Logo>
          </NoDecoA>
          <ClassStore>
            <NoDecoA href={process.env.REACT_APP_URL}>
              <h4>클래스</h4>
            </NoDecoA>
            <NoDecoA href={process.env.REACT_APP_URL}>
              <h4>스토어</h4>
            </NoDecoA>
          </ClassStore>

          <Form>
            <Input placeholder="찾으시는 취미가 있으신가요?"></Input>
            <SearchBtn>
              <SearchIcon size={20} />
            </SearchBtn>
          </Form>

          <LoginDiv>
            <RightDiv>
              <RightA href={process.env.REACT_APP_URL}>크리에이터지원</RightA>
            </RightDiv>
            <RightDiv>
              <RightA href={process.env.REACT_APP_URL}>기업교육</RightA>
            </RightDiv>
            <RightDiv>
              <RightA href={process.env.REACT_APP_URL}>로그인</RightA>
            </RightDiv>
          </LoginDiv>
        </Landing>
      </Main>
    </header>
  );
}

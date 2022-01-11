import { Main, Landing, Logo, ClassStore, Input } from "./style";

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
          <div>
            <div>
              <div>
                <Input placeholder="찾으시는 취미가 있으신가요?"></Input>
              </div>
            </div>
          </div>

          <div>
            <div>
              <a>크리에이터지원</a>
            </div>
            <div>
              <a>기업교육</a>
            </div>
            <div>
              <a>로그인</a>
            </div>
          </div>
        </Landing>
      </Main>
    </header>
  );
}

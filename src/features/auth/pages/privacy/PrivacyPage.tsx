import { useRouter } from 'next/router';

import * as style from '@/features/auth/pages/privacy/PrivacyPage.css.ts';

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <>
      <main className={`${style.container} privacy-container`}>
        <article className={style.article}>
          <header>
            <h1 className={style.title}>개인 정보보호 방침</h1>
          </header>

          <p>
            <em>
              황선태(&#39;https://jiary.vercel.app&#39;이하 &#39;Jiary&#39;)
            </em>
            은(는) 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을
            보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록
            다음과 같은 처리방침을 두고 있습니다.
          </p>
          <p>
            <em>황선태(&#39;Jiary&#39;)</em> 은(는) 회사는 개인정보처리방침을
            개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할
            것입니다.
          </p>
          <p className="ls2">
            ○ 본 방침은부터 <em>2023</em>년<em>09</em>월 <em>06</em>
            일부터 시행됩니다.
          </p>
          <br />
          <p className="lh6 bs4">
            <strong>1. 개인정보의 처리 목적</strong>
            <br />
            <br />
            <em>
              황선태(&#39;https://jiary.vercel.app&#39;이하 &#39;Jiary&#39;)
            </em>
            은(는) 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는
            다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는
            사전동의를 구할 예정입니다.
          </p>
          <ul className="list_indent2 mgt10">
            <p className="ls2">가. 홈페이지 회원가입 및 관리</p>
            <p className="ls2">
              회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
              서비스 부정이용 방지 등을 목적으로 개인정보를 처리합니다.
            </p>
            <br />
            <p className="ls2">나. 재화 또는 서비스 제공</p>
            <p className="ls2">
              콘텐츠 제공, 본인인증 등을 목적으로 개인정보를 처리합니다.
            </p>
            <br />
          </ul>
          <p className="lh6 bs4">
            <strong>2. 개인정보의 처리 및 보유 기간</strong>
            <br />
            <br />①<em>황선태(&#39;Jiary&#39;)</em>은(는) 법령에 따른 개인정보
            보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은
            개인정보 보유,이용기간 내에서 개인정보를 처리,보유합니다.
            <br />
            <br />② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
          </p>
          <ul className="list_indent2 mgt10">
            <li className="tt">1.홈페이지 회원가입 및 관리</li>
            <li className="tt">
              홈페이지 회원가입 및 관리와 관련한 개인정보는 수집.이용에 관한
              동의일로부터 1년까지 위 이용목적을 위하여 보유.이용됩니다.
            </li>
            <li>
              보유근거 : 서비스 이용계약 또는 회원가입 해지시까지, 다만
              채권․채무관계 잔존시에는 해당 채권․채무관계 정산시까지
            </li>
            <li>
              관련법령 : 1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년
              <br />
              2) 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
              <br />
            </li>
            <li>예외사유 :</li>
          </ul>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>
              3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
              개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
            </strong>
          </p>
          <br />

          <p className="ls2">
            ① 정보주체는 황선태에 대해 언제든지 개인정보 열람,정정,삭제,처리정지
            요구 등의 권리를 행사할 수 있습니다.
          </p>
          <p className="sub_p">
            ② 제1항에 따른 권리 행사는황선태에 대해 개인정보 보호법 시행령
            제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수
            있으며 황선태은(는) 이에 대해 지체 없이 조치하겠습니다.
          </p>
          <p className="sub_p">
            ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자
            등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법
            시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
          </p>
          <p className="sub_p">
            ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항,
            제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
          </p>
          <p className="sub_p">
            ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
            대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          </p>
          <p className="sub_p">
            ⑥ 황선태은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구,
            처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
            대리인인지를 확인합니다.
          </p>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>4. 처리하는 개인정보의 항목 작성 </strong>
            <br />
            <br />①
            <em>
              황선태(&#39;https://jiary.vercel.app&#39;이하 &#39;Jiary&#39;)
            </em>
            은(는) 다음의 개인정보 항목을 처리하고 있습니다.
          </p>
          <ul className="list_indent2 mgt10">
            <li className="tt">홈페이지 회원가입 및 관리</li>
            <li>필수항목 : Google 이메일, 프로필, Open Id, App data</li>
          </ul>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>
              5. 개인정보의 파기
              <br />
              <em>황선태(&#39;Jiary&#39;)</em>
              은(는) 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이
              해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과
              같습니다.
            </strong>
          </p>

          <p className="ls2">
            -파기절차
            <br />
            이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져(종이의 경우
            별도의 서류) 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후
            혹은 즉시 파기됩니다. 이 때, DB로 옮겨진 개인정보는 법률에 의한
            경우가 아니고서는 다른 목적으로 이용되지 않습니다.
            <br />
            <br />
            -파기기한
            <br />
            이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의
            종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의
            폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는
            개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그
            개인정보를 파기합니다.
          </p>
          <p className="sub_p mgt10">-파기방법</p>
          <p className="sub_p">
            전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을
            사용합니다
          </p>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>
              6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항
            </strong>
          </p>

          <p className="ls2">
            황선태 은 정보주체의 이용정보를 저장하고 수시로 불러오는 ‘쿠키’를
            사용하지 않습니다.
          </p>
          <br />

          <p className="sub_p mgt30">
            <strong>7. 개인정보 보호책임자 작성 </strong>
          </p>
          <p className="sub_p mgt10">
            ①
            <span className="colorLightBlue">
              황선태(‘https://jiary.vercel.app’이하 ‘Jiary)
            </span>
            은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보
            처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와
            같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <ul className="list_indent2 mgt10">
            <li className="tt">▶ 개인정보 보호책임자</li>
            <li>성명 :황선태</li>
            <li>연락처 :pain103@naver.com</li>
          </ul>
          <p className="sub_p">※ 개인정보 보호 담당부서로 연결됩니다.</p>
          <p />
          <p className="sub_p">
            ② 정보주체께서는 황선태(‘https://jiary.vercel.app’이하 ‘Jiary) 의
            서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
            문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
            담당부서로 문의하실 수 있습니다.
            황선태(‘https://jiary.vercel.app’이하 ‘Jiary) 은(는) 정보주체의
            문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
          </p>
          <br />

          <p className="sub_p mgt30">
            <strong>8. 개인정보 처리방침 변경 </strong>
          </p>
          <p className="sub_p mgt10">
            ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
            변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
            전부터 공지사항을 통하여 고지할 것입니다.
          </p>
          <br />
          <br />
          <p className="lh6 bs4">
            <strong>
              9. 개인정보의 안전성 확보 조치
              <em>황선태(&#39;Jiary&#39;)</em>은(는) 개인정보보호법 제29조에
              따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적
              조치를 하고 있습니다.
            </strong>
          </p>
          <p className="sub_p mgt10">
            1. 개인정보의 암호화
            <br />
            이용자의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어,
            본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화
            하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고
            있습니다.
            <br />
            <br />
            2. 접속기록의 보관 및 위변조 방지
            <br />
            개인정보처리시스템에 접속한 기록을 최소 6개월 이상 보관, 관리하고
            있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록 보안기능
            사용하고 있습니다.
            <br />
            <br />
            3. 개인정보에 대한 접근 제한
            <br />
            개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의
            부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
            조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단
            접근을 통제하고 있습니다.
            <br />
            <br />
          </p>
          <footer className={style.footer}>
            <p>황선태 Web Developer</p>
            <button className={style.backButton} onClick={router.back}>
              뒤로가기
            </button>
          </footer>
        </article>
      </main>
    </>
  );
}

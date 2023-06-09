import "./Main.scss";
import "../../styles/common.scss";

const Main = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>main</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="preconnect"
      />
      <link rel="stylesheet" href="style/common.css" />
      <link rel="stylesheet" href="style/main.css" />
      <nav>
        <div className="logo-wrap nav-width">
          <img
            className="logo-wrap__logo"
            src="./images/IMG_3734.JPG"
            alt="인스타그램 로고 사진"
          />
          <div className="logo-wrap__vertical-line" />
          <div className="logo-wrap__text">westagram</div>
        </div>
        <div className="search-bar-wrap nav-width">
          <input
            type="text"
            placeholder="검색"
            style={{ textAlign: "center" }}
          />
          <div className="searchPopUp" />
        </div>
        <div className="icons-wrap nav-width">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색아이콘"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트아이콘"
          />
          <img
            id="profile-img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="프로필아이콘"
          />
        </div>
      </nav>
      <div className="horizontal-line" />
      <main>
        <article className="feeds">
          <div className="feeds__header">
            <img
              className="profile-img-gradient"
              src="./images/IMG_3734.JPG"
              alt="프로필사진"
            />
            <div className="feeds__header__contents">
              <span>wecode_bootcamp</span>
              <span>WeCode - 위코드</span>
            </div>
            <i className="fa-solid fa-ellipsis" />
          </div>
          <img
            className="feeds__img"
            src="./images/sample.png"
            alt="피드이미지"
          />
          <div className="feeds__bottom-icons">
            <i className="fa-solid fa-heart" />
            <i className="fa-solid fa-comment" />
            <i className="fa-solid fa-arrow-up-from-bracket" />
            <i className="fa-solid fa-bookmark" />
          </div>
          <div className="feeds__likes">
            <div className="feeds__likes-wrap">
              <div>
                <img
                  className="feeds__likes-wrap__image"
                  src="./images/IMG_3734.JPG
        "
                  alt="프로필사진"
                />
              </div>
              <div className="feeds__likes-wrap__text">
                <span>님 외 9명이 좋아합니다.</span>
              </div>
              {/* 하트를 누르면 인원수가 +1 */}
            </div>
            {/* 아래부터 댓글 기능 구현하기 */}
            <ul className="feeds__comment" />
            <form>
              <input
                className="feeds__comment__input"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="feeds__comment__button" hidden />
            </form>
          </div>
        </article>
        <aside className="main-aside">
          <div className="main-aside__header-wrap">
            <img
              className="profile-img-gradient"
              src="./images/IMG_3734.JPG"
              alt="프로필사진"
            />
            <div className="main-aside__header-wrap__contents">
              <span>wecode_bootcamp</span>
              <span>WeCode | 위코드</span>
            </div>
          </div>
          <section className="main-aside__story-section">
            <div className="main-aside__story-section__text">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <ul className="main-aside__story-section__profile-list">
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_yum_s</span>
                  <span>16분전</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>o30fjj</span>
                  <span>36분전</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_soso_me_</span>
                  <span>46분전</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img-gradient"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_kkk_kkk00</span>
                  <span>1시간전</span>
                </div>
              </li>
            </ul>
          </section>
          <section className="main-aside__story-section">
            <div className="main-aside__story-section__text">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>
            <ul className="main-aside__story-section__profile-list">
              <li>
                <img
                  className="profile-img"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>joahyeeeeee</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>o30fjj</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_soso_me_</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
              <li>
                <img
                  className="profile-img"
                  src="./images/IMG_3734.JPG"
                  alt="프로필사진"
                />
                <div className="main-aside__story-section__profile-list__text">
                  <span>_kkk_kkk00</span>
                  <span>_legend_a님 외 2명이 ...</span>
                </div>
                <div className="main-aside__story-section__profile-list__follow">
                  <span>팔로우</span>
                </div>
              </li>
            </ul>
          </section>
          <footer>
            <div className="footer-info">
              <span>
                Instagram 정보·지원·홍보
                센터·API·채용정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
              </span>
              <br />
              <br />
              <span>© 2019 INSTAGRAM</span>
            </div>
          </footer>
        </aside>
      </main>
    </>
  );
};

export default Main;

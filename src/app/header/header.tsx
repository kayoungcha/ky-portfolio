import styles from "./header.module.scss";

interface propsType {
  scroll: { scroll: number };
  profileView: boolean;
  portfolioView: boolean;
  skillView: boolean;
  footerView: boolean;
}

export default function Header(propsType: {
  scroll: number;
  profileView: boolean;
  portfolioView: boolean;
  skillView: boolean;
  footerView: boolean;
  movePage: any;
}) {
  let scrollY: number = propsType.scroll;
  let gnbActive = propsType;

  function handleClick(e: React.MouseEvent, i: number) {
    e.preventDefault();
    propsType.movePage(i);
  }

  return (
    <>
      <header
        className={[styles.gnb, scrollY > 100 && styles.transform_header].join(
          " "
        )}
        style={scrollY > 100 ? { animation: "none" } : {}}
      >
        <nav>
          <a
            href="#"
            className={
              gnbActive.profileView && !gnbActive.portfolioView
                ? styles.active
                : ""
            }
            onClick={(e) => handleClick(e, 0)}
            title="introduce"
          >
            {scrollY < 100 ? "소개" : "I"}
          </a>
          <a
            href="#"
            className={gnbActive.portfolioView ? styles.active : ""}
            onClick={(e) => handleClick(e, 1)}
            title="portfolio"
          >
            {scrollY < 100 ? "포트폴리오" : "P"}
          </a>
          <a
            href="#"
            className={
              gnbActive.skillView &&
              !gnbActive.portfolioView &&
              !gnbActive.footerView
                ? styles.active
                : ""
            }
            onClick={(e) => handleClick(e, 2)}
            title="skill"
          >
            {scrollY < 100 ? "사용 가능 기술" : "S"}
          </a>
          <a
            href="#"
            className={gnbActive.footerView ? styles.active : ""}
            onClick={(e) => handleClick(e, 3)}
            title="More info"
          >
            {scrollY < 100 ? "더 많은 정보" : "M"}
          </a>
        </nav>
      </header>
    </>
  );
}

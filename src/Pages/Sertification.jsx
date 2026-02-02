import { useState } from "react";
import Header from "../tools/Header";
import Footer from "../tools/Footer";
import File from "../../src/components/img/main__img/file_logo.png";

import poryadok_zhalob from "../components/files/serification/poryadok_zhalob.pdf";
import sertification_schema from "../components/files/serification/sertification_schema.pdf";
import politic_conf from "../components/files/serification/politic_conf.pdf";
import politic_non_involve from "../components/files/serification/politic_non_invol.pdf";
import politic_cancel from "../components/files/serification/politic_cancel.pdf";
import politic_accordance from "../components/files/serification/politic_accordance.pdf";
import politic_distance from "../components/files/serification/politic_distance.pdf";

const files = [
  { name: "Порядок жалоб", link: poryadok_zhalob },
  { name: "Схема сертификации", link: sertification_schema },
  { name: "Политика конфиденциальности", link: politic_conf },
  { name: "Политика невовлеченности", link: politic_non_involve },
  { name: "Политика отмены", link: politic_cancel },
  { name: "Политика согласования", link: politic_accordance },
  { name: "Политика дистанции", link: politic_distance },
];

const Sertification = () => {
  const [index, setIndex] = useState(0);

  function Prev() {
    index > files.length - files.length ? setIndex(index - 1) : setIndex(files.length - 3);
  }

  function Next() {
    index + 2 < files.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  return (
    <>
      <Header />
      <main>
        <span className="sertification_title">
          НОРМАТИВНЫЕ ДОКУМЕНТЫ, ИСПОЛЬЗУЕМЫЕ ПРИ ВЫПОЛНЕНИИ РАБОТ ПО СЕРТИФИКАЦИИ СИСТЕМ
          МЕНЕДЖМЕНТА
        </span>
        <div className="sertification_list">
          <li>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</li>
          <li>
            ГОСТ Р ИСО 14001-2016 Системы экологического менеджмента. Требования и руководство по
            применению
          </li>
          <li>
            ГОСТ Р ИСО 45001-2020. Системы менеджмента безопасности труда и охраны здоровья.
            Требования и руководство по применению.
          </li>
          <li>
            ГОСТ Р ИСО/МЭК 17021-1-2017 Оценка соответствия. Требования к органам, проводящим аудит
            и сертификацию систем менеджмента
          </li>
        </div>
        <section
          style={{
            textAlign: "justify",
            width: "50%",
            border: "0.1rem white solid",
            boxShadow: "0 0 3rem 0.4rem rgba(0,0,0,0.3)",
            fontSize: "1.11rem",
            overflow: "hidden",
            padding: "0rem 2rem 2rem 2rem",
            borderRadius: "3rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", paddingTop: "1.2rem" }}>
            <div>
              <a
                href={files[index].link}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(files[index].link, "_blank");
                }}
              >
                <img src={File} style={{ width: "15rem" }} alt="" />
                <span>{files[index].name}</span>
              </a>
            </div>
            <div>
              <a
                href={files[index + 1].link}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(files[index + 1].link, "_blank");
                }}
              >
                <img src={File} style={{ width: "15rem", textAlign: "center" }} alt="" />
                <span>{files[index + 1].name}</span>
              </a>
            </div>
            <div>
              <a
                href={files[index + 2].link}
                onClick={(e) => {
                  e.preventDefault();
                  window.open(files[index + 2].link, "_blank");
                }}
              >
                <img src={File} style={{ width: "15rem", textAlign: "center" }} alt="" />
                <span>{files[index + 2].name}</span>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "1.2rem" }}>
            <button
              onClick={Prev}
              style={{
                color: "white",
                cursor: "pointer",
                borderRadius: "1rem",
                width: "7vw",
                height: "3.7vh",
                background: "#111",
                border: "none",
              }}
              type="submit"
              name="access_key"
            >
              <span style={{ lineHeight: "1rem" }}>Назад</span>
            </button>
            <button
              onClick={Next}
              style={{
                color: "white",
                cursor: "pointer",
                borderRadius: "1rem",
                width: "7vw",
                height: "3.7vh",
                background: "#111",
                border: "none",
              }}
              type="submit"
              name="access_key"
            >
              <span style={{ lineHeight: "1rem" }}>Дальше</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Sertification;

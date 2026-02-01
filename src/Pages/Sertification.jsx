import { useState } from "react";
import Header from "../tools/Header";
import Footer from "../tools/Footer";

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
  const [index, setIndex] = useState();

  return (
    <>
      <Header />
      <span className="sertification_title">
        НОРМАТИВНЫЕ ДОКУМЕНТЫ, ИСПОЛЬЗУЕМЫЕ ПРИ ВЫПОЛНЕНИИ РАБОТ ПО СЕРТИФИКАЦИИ СИСТЕМ МЕНЕДЖМЕНТА
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
          ГОСТ Р ИСО/МЭК 17021-1-2017 Оценка соответствия. Требования к органам, проводящим аудит и
          сертификацию систем менеджмента
        </li>
      </div>

      <div style={{ width: "30%", height: "30%" }}>
        <a
          href={files.link}
          onClick={(e) => {
            e.preventDefault();
            window.open(files.link, "_blank");
          }}
        >
          {files.name}
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Sertification;

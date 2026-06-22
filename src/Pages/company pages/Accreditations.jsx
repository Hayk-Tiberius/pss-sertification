import React from "react";
import Header from "../../tools/Header";
import Footer from "../../tools/Footer";
import CompanyHeader from "./CompanyHeader";

import Oblast from "../../components/img/accreditaions/Oblast.pdf";
import Attestat from "../../components/img/accreditaions/Attestat.pdf";
import System from "../../components/img/accreditaions/System.pdf";
import File from "../../components/img/main__img/file_logo.png";

const accreditaions_files = [
  { name: "Аттестат аккредитации", link: Attestat },
  { name: "Область аккредитации", link: Oblast },
];

const smk_files = [{ name: "Свидетельство СМК", link: System }];

const FileGrid = ({ files }) => (
  <div
    className="accredititaon__grid"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
    }}
  >
    {files.map((file) => (
      <div key={file.name}>
        <a
          href={file.link}
          onClick={(e) => {
            e.preventDefault();
            window.open(file.link, "_blank");
          }}
          style={{
            width: "100%",
            fontSize: "1.8rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={File} alt="" style={{ width: "7vw", textAlign: "center" }} />
          <span style={{ textAlign: "center" }}>{file.name}</span>
        </a>
      </div>
    ))}
  </div>
);

const Accreditations = () => {
  return (
    <>
      <main>
        <Header />
        <CompanyHeader />

        <section
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <section style={{ flex: 1 }}>
            <div
              className="accredititaon__title"
              style={{
                height: "12vh",
                fontSize: "1.8rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>
                Аккредитация в{" "}
                <a
                  href="https://pub.fsa.gov.ru/ral/view/13235/accredited-entity"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://pub.fsa.gov.ru/ral/view/13235/accredited-entity",
                      "_blank",
                    );
                  }}
                >
                  Федеральной службе по аккредитации
                </a>
              </span>
            </div>
            <FileGrid files={accreditaions_files} />
          </section>

          <section style={{ flex: 1 }}>
            <div
              className="accredititaon__title"
              style={{
                height: "12vh",
                fontSize: "1.8rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Свидетельство СМК
            </div>
            <FileGrid files={smk_files} />
          </section>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Accreditations;

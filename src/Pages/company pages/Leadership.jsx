import React from "react";
import Header from "../../tools/Header";
import Footer from "../../tools/Footer";
import CompanyHeader from "./CompanyHeader";
import RON_Photo from "../../components/img/RON/Romashko_Oleg.png";

const timeline = [
  {
    year: 1984,
    text: "Инженер-экономист (организация управления в строительстве), Московский институт управления им. С.Орджоникидзе.",
  },
  {
    year: 1993,
    text: "Кандидат экономических наук (экономики и управления производством (строительство)), Центральный научно-исследовательский институт экономики и управления в строительстве.",
  },
  {
    year: 1998,
    text: "Ведущий аудитор систем менеджмент качества (строительство, инженерные и архитектурные бюро, предоставление услуг предприятиям) TÜV CERT (TÜV Thüringen).",
  },
  { year: 1999, text: "Директор ООО «ПРОМСТРОЙ-Сертификация»." },
  {
    year: 2002,
    text: "Руководитель органа по сертификации систем менеджмента (ISO 9001, ISO 14001, OHSAS 18001) в системе сертификации «Мосстройсертификация».",
  },
  {
    year: 2004,
    text: "Ведущий аудитор систем менеджмент качества (строительство) сертификационного общества DNV (Det Norske Veritas).",
  },
  {
    year: 2010,
    text: "Ведущий аудитор систем менеджмент качества (строительство, инженерные и архитектурные бюро, предоставление услуг предприятиям) TÜV International Certification (TÜV Thüringen).",
  },
  { year: 2011, text: "Руководитель органа по сертификации систем менеджмента." },
];

const styles = {
  wrapper: {
    maxWidth: 920,
    margin: "0 auto",
    padding: "24px 16px 40px",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#333",
  },
  profile: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
    marginBottom: 24,
    flexWrap: "wrap",
  },
  photo: {
    width: 150,
    height: 200,
    objectFit: "cover",
    border: "1px solid #ccc",
    flexShrink: 0,
    background: "#e5e5e5",
  },
  infoBlock: {
    minWidth: 260,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    margin: "0 0 10px",
    color: "#222",
  },
  role: {
    fontSize: 13,
    fontWeight: "bold",
    margin: "0 0 8px",
    lineHeight: 1.5,
  },
  email: {
    fontSize: 13,
  },
  emailLink: {
    color: "#3366bb",
    textDecoration: "underline",
  },
  bio: {
    fontSize: 13,
    lineHeight: 1.6,
    marginBottom: 20,
  },
  timelineTable: {
    display: "grid",
    gridTemplateColumns: "60px 1fr",
    rowGap: 14,
    columnGap: 16,
    fontSize: 13,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  timelineYear: {
    fontWeight: "bold",
  },
};

const Leadership = () => {
  return (
    <>
      <main>
        <Header />
        <CompanyHeader />

        <div style={styles.wrapper}>
          <div style={styles.profile}>
            <img src={RON_Photo} alt="Ромашко Олег Николаевич" style={styles.photo} />
            <div style={styles.infoBlock}>
              <h1 style={styles.name}>Ромашко Олег Николаевич</h1>
              <p style={styles.role}>
                Директор, руководитель органа по сертификации систем менеджмента качества
              </p>
              <p style={styles.email}>
                Электронная почта:{" "}
                <a href="mailto:oleg.romashko@ps-s.ru" style={styles.emailLink}>
                  oleg.romashko@ps-s.ru
                </a>
              </p>
            </div>
          </div>

          <p style={styles.bio}>
            Ромашко О.Н. родился в 1962 г. в г. Пальдиски, Эстония. После окончания института в 1984
            г. работал как инженер в проектном институте (ПИ-2), в дальнейшем с 1986 по 1996 г.
            занимался исследованиями в области управления в строительстве (ЦНИИпроект,
            Центринвестпроект). С 1996 г. профессиональная деятельность связана с разработкой и
            сертификацией систем менеджмента в организациях строительного комплекса:
          </p>

          <div style={styles.timelineTable}>
            {timeline.map((item) => (
              <React.Fragment key={item.year}>
                <div style={styles.timelineYear}>{item.year}</div>
                <div>{item.text}</div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Leadership;

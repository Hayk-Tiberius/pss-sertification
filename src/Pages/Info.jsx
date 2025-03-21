import React, { useState } from "react";
import Header from "../tools/Header.jsx";
import Footer from "../tools/Footer";
import "./Info.scss";

const Info = () => {
    const [expandedSections, setExpandedSections] = useState([false, false]);

    const toggleContent = (index) => {
        const newExpandedSections = [...expandedSections];
        newExpandedSections[index] = !newExpandedSections[index]; 
        setExpandedSections(newExpandedSections);
    };

    return (
        <>
            <Header />
            <main className="info__main">
                <section className="info__section">
                <h2>Для заявителей</h2>
                 
                    <span>Перечень документов для сертификации</span>
                    <span className="info__text" style={{ display: expandedSections[0] ? "block" : "none" }}>
                    Политика в области качества (если она выполнена в виде отдельного документа и не включена в Руководство по качеству);<br />
                    Руководство по качеству;<br />
                    Структурная схема проверяемой организации с указанием административных и инженерных служб, основных и вспомогательных подразделений (цехов, участков, производственных площадок);<br />
                    Структурная схема службы качества проверяемой организации (если она не включена в общую организационную структуру);<br />
                    Перечень документов системы менеджмента качества;<br />
                    Обязательные документированные процедуры;<br />
                    Комплект документов по факту проведения внутренних проверок системы менеджмента (один цикл внутренних проверок, охватывающий всю область применения СМ);<br />
                    Документы по проведению анализа системы менеджмента, со стороны руководства организации (анализ, предшествующий сертификации);<br />
                    Документы, необходимые организации для обеспечения эффективного планирования, осуществления процессов и управления ими в соответствии с действующим перечнем документов СМ, включая записи (выборочно, по запросу органа по сертификации);<br />

                    </span>
                    <button onClick={() => toggleContent(0)}>
                        {expandedSections[0] ? "Скрыть" : "Показать"}
                    </button>
                    <br/>
                    <span>Перечень документов для сертификации</span>
                    <span className="info__text" style={{ display: expandedSections[1] ? "inline" : "none" }}>
                        Политика в области качества (если она выполнена в виде отдельного документа и не включена в Руководство по качеству);
                    </span>
                     <button onClick={() => toggleContent(1)}>
                        {expandedSections[1] ? "Скрыть" : "Показать"} 
                    </button>
                    <br/>
                    <span>Требования к заявителю</span>
                    <span className="info__text" style={{ display: expandedSections[2] ? "inline" : "none" }}>
                    Заявитель на проведение работ по сертификации систем менеджмента обязан выполнять следующие условия:
                    Выполнять установленных требований к системам менеджмента, прошедшим сертификацию, а также требований к проведению работ по сертификации;
                    Принимать необходимые меры по контролю выполнения установленных требований к системам менеджмента и рассмотрению жалоб;
                    Предоставлять в целях проведения работ по сертификации систем менеджмента копии документов по сертификации в соответствии с требованиями схем сертификации;
                    Выполнять установленные требований, требования органа по сертификации в отношении использования знаков соответствия, ссылок на сертификацию системы менеджмента в средствах массовой информации;
                    Регистрировать жалобы, касающихся выполнения требований к системам менеджмента и предоставлять их органу по сертификации по его запросу; принимать соответствующие меры в отношении таких жалоб и любых недостатков, обнаруженных в системах менеджмента, которые влияют на соответствие требованиям к ним и документировать предпринятые действия;
                    Информировать орган по сертификации об изменениях, которые могут повлиять на выполнение требований к системам менеджмента;
                    </span>
                    <button onClick={() => toggleContent(2)}>
                        {expandedSections[2] ? "Скрыть" : "Показать"} 
                    </button>
                </section>

                <section className="info__section">
                    <h2>Для сертифицированных организаций</h2>
                    <span>Перечень документов для инспекционного контроля</span>
                    <span className="info__text" style={{ display: expandedSections[3] ? "inline" : "none" }}>
                            Справка о наличии (отсутствии) структурных и качественных изменений в системе менеджмента качества
                            Справка о выполнении корректирующих действий по устранению несоответствий и уведомлений системы менеджмента качества;
                            Справка о текущей численности работников;
                            Справка о действующих временных площадках (строительных площадках, объектах инженерных изысканий и прочих проектах);
                            Измененные документы системы менеджмента качества (при наличии);
                            Комплект документов по факту проведения внутренних проверок системы менеджмента качества (за период от предыдущего аудита, охватывающий всю область применения СМК);
                            Документы по проведению анализа системы менеджмента качества, со стороны руководства организации (текущий анализ, предшествующий инспекционному контролю);
                            Документы, необходимые организации для обеспечения эффективного планирования, осуществления процессов и управления ими в соответствии с действующим перечнем документов СМК, включая записи (выборочно, по запросу органа по сертификации);</span>
                    <button onClick={() => toggleContent(3)}>
                        {expandedSections[3] ? "Скрыть" : "Показать"} 
                    </button>
                    <br/>
                    <span>Права и обязанности сертифицированных организаций</span> 
                    <span className="info__text" style={{ display: expandedSections[4] ? "inline" : "none" }}>Права:
                            использовать сертификат соответствия в соответствии с установленными правилами;
                            обращаться в орган по сертификации по всем вопросам (предложениям), связанным с организацией и проведением сертификации, использованием сертификата соответствия, применением стандартов на системы менеджмента;
                            подавать в орган по сертификации или вышестоящую организацию апелляции / жалобы на действия органа по сертификации в соответствии с установленной процедурой;
                            получать (по письменному запросу) дубликаты документов по сертификации и последующим процедурам;
                            Обязанности:
                            Сертифицированная организация (владелец сертификата соответствия) обязана:
                            обеспечивать функционирование сертифицированной системы менеджмента в соответствии с требованиями стандарта;
                            использовать сертификат соответствия применительно только к той области, которая определена в сертификате;
                            не использовать сертификат соответствия и документы по сертификации (акты о результатах аудитов и т.д.) таким образом, чтобы это могло дискредитировать орган по сертификации или вводить в заблуждение потребителей;
                            использовать Знак соответствия в соответствии с правилами на его применение (Разрешением);
                            своевременно информировать орган по сертификации обо всех изменениях в деятельности системы менеджмента (изменения в организационной структуре, собственности, технологиях изготовления, условиях производства, процессах появление новых продуктов и услуг, изменение расположения и количества сотрудников, серьезные происшествия), которые могут влиять на сертификат соответствия. На основании этой информации орган по сертификации может:
                            уменьшить либо увеличить стоимость предстоящего инспекционного контроля в соответствии с изменением численности работников либо количества производственных площадок;
                            провести внеплановый либо дополнительный аудит по инспекционному контролю сертифицированной системы менеджмента качества с соответствующей оплатой;
                            представлять необходимые документы и материалы для инспекционного контроля сертифицированной системы менеджмента: справки о наличии (отсутствии) изменений в организационной структуре управления и в сертифицированной системе менеджмента; о выполнении корректирующих действий по устранению несоответствий и уведомлений, выявленных при сертификации системы менеджмента качества или при предыдущем инспекционном контроле; о текущей численности работников;
                            обеспечить представителю (ям) исполнителя необходимый доступ в подразделения (производственные площадки) и их сопровождение при проведении инспекционного контроля непосредственно у Заказчика на месте;
                            в случае приостановления или отмены действия сертификата соответствия прекратить использование всех рекламных материалов, содержащих ссылки на сертификат, и течение 2 недель вернуть в орган по сертификации сертификат соответствия. Сертификат соответствия может быть приостановлен:
                            если Заказчик не смог обеспечить проведение аудитов по инспекционному контролю сертифицированной системы менеджмента в согласованные сроки;
                            если корректирующие действия по несоответствиям не реализованы;
                            если Заказчик не произвел необходимую оплату инспекционного контроля.
                            Действие сертификата соответствия может быть отменено:
                            если Заказчик не предпринял адекватных действий после приостановки;
                            если Заказчик не произвел оплату после приостановки;
                            информировать Исполнителя о любых существующих или потенциальных опасностях в области безопасности, здоровья и экологии, а также о любых необходимых мерах безопасности. При выполнении работ на месте (производственной площадке), Заказчик обязуется обеспечить все адекватные меры безопасности, чтобы условия работы были безопасными и соответствовали всем нормативно-правовым требованиям, а также обеспечить, чтобы все риски, которые нельзя полностью устранить, управлялись и были сведены к допустимому уровню;
                    </span>
                    <button onClick={() => toggleContent(4)}>
                        {expandedSections[4] ? "Скрыть" : "Показать"} 
                    </button>
                    <br />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Info;

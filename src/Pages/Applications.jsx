import React from "react";
import Header from "../tools/Header.jsx"

const Applications = () => {
  const [result, setResult] = React.useState("");
  const [formValues, setFormValues] = React.useState({});

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    setResult("Отправка....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b83076a4-0aa2-4eda-b923-33e119d8afcb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Заявка была успешно отправлена");
      event.target.reset();
      setFormValues({});
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    console.log(formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <>
      <Header />
      <form onSubmit={onSubmit}>
        <div className="application_container">
          <div className="application_container_item">
            <Input
              name="Наименование организации"
              size="large"
              placeholder="Наименование организации"
              prefix={<GlobalOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Наименование организации"]}
              onChange={handleInputChange}
            />
            <Input
              name="ФИО Ген. директора"
              size="large"
              placeholder="ФИО Ген. директора"
              prefix={<UserOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["ФИО Ген. директора"]}
              onChange={handleInputChange}
            />
            <Input
              name="Юридический адрес"
              size="large"
              placeholder="Юридический адрес"
              prefix={<HomeOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Юридический адрес"]}
              onChange={handleInputChange}
            />
            <Input
              name="Фактический адрес"
              size="large"
              placeholder="Фактический адрес"
              prefix={<HomeOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Фактический адрес"]}
              onChange={handleInputChange}
            />
            <TextArea
              name="Банковские реквизиты"
              size="large"
              rows={1}
              placeholder="Банковские реквизиты"
              prefix={<CreditCardOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Банковские реквизиты"]}
              onChange={handleInputChange}
            />
            <Input
              name="ФИО контактного лица"
              size="large"
              placeholder="ФИО контактного лица"
              prefix={<UserSwitchOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["ФИО контактного лица"]}
              onChange={handleInputChange}
            />
            <Input
              name="Телефон"
              size="large"
              placeholder="Телефон"
              prefix={<PhoneOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Телефон"]}
              onChange={handleInputChange}
            />
            <Input
              name="E-mail"
              size="large"
              placeholder="E-mail"
              prefix={<MailOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["E-mail"]}
              onChange={handleInputChange}
            />
            <Input
              name="Сайт"
              size="large"
              placeholder="Сайт"
              prefix={<ChromeOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Сайт"]}
              onChange={handleInputChange}
            />
            <Select
              name="Объект сертификации/аттестации/декларации"
              labelRender={labelRender}
              defaultValue="1"
              style={{ width: "100%", marginBottom: "1em" }}
              options={options}
              value={formValues["Объект сертификации/аттестации/декларации"]}
              onChange={(value) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  "Объект сертификации/аттестации/декларации": value,
                }))
              }
            />
            <Input
              name="Месяц и год внедрения систем менеджмента: ММ/ГГГГ"
              size="large"
              placeholder="Месяц и год внедрения систем менеджмента: ММ/ГГГГ"
              prefix={<FieldTimeOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Месяц и год внедрения систем менеджмента: ММ/ГГГГ"]}
              onChange={handleInputChange}
            />
            <Input
              name="Общая численность работающих (включая филиалы):"
              size="large"
              placeholder="Общая численность работающих (включая филиалы):"
              prefix={<TeamOutlined />}
              style={{ marginBottom: "1em" }}
              value={formValues["Общая численность работающих (включая филиалы):"]}
              onChange={handleInputChange}
            />
            <button
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
              value="b83076a4-0aa2-4eda-b923-33e119d8afcb"
            >
              Отправить заявку
            </button>
            <span>{result}</span>
          </div>
        </div>
      </form>
    </>
  );
};


export default Applications
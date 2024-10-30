import React from "react";
import Header from "../tools/Header.jsx"
import "./Applications.scss"
import { UserOutlined, GlobalOutlined,HomeOutlined,TeamOutlined, CreditCardOutlined,PhoneOutlined,MailOutlined,ChromeOutlined,FieldTimeOutlined,UserSwitchOutlined  } from '@ant-design/icons';
import { Input, Select } from 'antd';


const { TextArea } = Input;

const options = [
    { label: "Система менеджмента качества ГОСТ Р ИСО 9001", value:"Система менеджмента качества ГОСТ Р ИСО 9001" },
    { label: "Система экологического менеджмента ГОСТ Р ИСО 14001", value: "Система экологического менеджмента ГОСТ Р ИСО 14001" },
    { label: "Система менеджмента охраны здоровья и обеспечения безопасности труда ГОСТ Р ИСО 45001", value: "Система менеджмента охраны здоровья и обеспечения безопасности труда ГОСТ Р ИСО 45001"},
    { label: "ГОСТ ISO/IEC 17025-2019", value: "ГОСТ ISO/IEC 17025-2019"}
]

const labelRender = (props) => {
    const {label,value} = props;
    if (label) {
        return value;
    }
    return <span>Не выбрано</span>
}


const Applications = () => {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b83076a4-0aa2-4eda-b923-33e119d8afcb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return (
        <>
        <Header />
        <div className="application_container">
            <div className="application_container_item">
                <Input size="large" placeholder="Наименование организации" prefix={<GlobalOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="ФИО Ген. директора" prefix={<UserOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="Юридический адрес" prefix={<HomeOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="Фактический адрес" prefix={<HomeOutlined />} style={{ marginBottom: '1em' }} />
                <TextArea size="large" rows={1} placeholder="Банковские реквизиты" prefix={<CreditCardOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="ФИО контактного лица" prefix={<UserSwitchOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="Телефон" prefix={<PhoneOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="E-mail" prefix={<MailOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="Сайт" prefix={<ChromeOutlined />} style={{ marginBottom: '1em' }} />
                <Select labelRender={labelRender} defaultValue="1" style={{ width: '100%', marginBottom: '1em' }} options={options} />
                <Input size="large" placeholder="Месяц и год внедрения систем менеджмента: ММ/ГГГГ" prefix={<FieldTimeOutlined />} style={{ marginBottom: '1em' }} />
                <Input size="large" placeholder="Общая численность работающих (включая филиалы):" prefix={<TeamOutlined />} style={{ marginBottom: '1em' }} />
                <div>
      <form onSubmit={onSubmit}>

        <button type="submit" name="access_key" value="b83076a4-0aa2-4eda-b923-33e119d8afcb">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
            </div>
        </div>
        </>
    )
}

export default Applications
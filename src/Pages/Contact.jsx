import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Header from "../tools/Header.jsx"
import "../Pages/Contact.scss"
import Footer from "../tools/Footer";

const Contact = () => {
    const defaultState = {
        center: [55.6665344, 37.575556],
        zoom: 16,
      };
    return (
        <>
        <Header />
        <article className='main__contact'>
            <div className='contact__text'>
            <span className='contact__title'>Контакты</span><br/>

            ООО "ПРОМСТРОЙ-Сертификация"<br />
            Фактический адрес: 117418, г. Москва, ул. Зюзинская, д. 6, к. 2, помещение XV, комн. 17, 18, этаж 2;<br />
            Юридический адрес: 117418, г. Москва, ул. Зюзинская, д. 6, к. 2, помещение XV, комн. 17, 18, этаж 2;<br />
            Почтовый адрес: 117461, Москва, а/я 15<br />
            Директор: Ромашко Олег Николаевич<br />
            Главный бухгалтер: Малушина Виктория Андреевна<br />
            Тел./факс: +7(499)578-26-59<br />
            Электронная почта:<br />
              Канцелярия: ps-s@ps-s.ru<br />
              Администратор сайта: psscertificationadm@gmail.com<br />
            Реквизиты:<br />
              ИНН 7714156856<br />
              КПП 772701001<br />
              р/с 40702810300370000653 в ОАО ОТП Банк г. Москва<br />
              к/с 30101810000000000311<br />
              БИК 044525311<br />
              ОКПО – 51114774<br />
              ОКОГУ – 49013<br />
              ОКАТО – 45277556000<br />
              ОКВЭД – 74.20.4<br />
                <div className='yandex__map'>
                    <span className='contact__title2'>Как к нам добраться</span><br />
                    <YMaps >
                        <Map defaultState={defaultState}>
                            <Placemark geometry={[55.666534434302974,37.57555683064955]}  />
                        </Map>
                    </YMaps>
                </div>    
            </div>
        </article>
        <Footer />
        </>
    )
}

export default Contact
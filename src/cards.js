import React from 'react';
import './cards.css'


const cardsInfo=[
    {photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/noutbuki.png', name: 'Ноутбуки'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyutery.png', name: 'Компьютеры'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/monitory.png', name: 'Мониторы'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/tovary-dlya-gejmerov.png', name: 'Gaming'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/planshety.png', name: 'Планшеты'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kabeli-i-perekhodniki.png', name: 'Кабели и переходники'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/kompyuternye-komplektuyushchie.png', name: 'Комплектующие'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/setevoe-oborudovanie.png', name: 'Сетевое'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/naushniki-i-aksessuary.png', name: 'Наушники'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/klaviatury-i-myshi.png', name: 'Клавиатуры'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/aksessuari-dlia-elektronyky.png', name: 'Аксессуары'},
{photo: 'https://video.rozetka.com.ua/img_superportal/kompyutery_i_noutbuki/ofisnaya-tekhnika.png', name: 'Оргтехника'}
]
function Card(props) {
    return (
        <div className='card'>
            <img src={props.photo} className='img'></img>
            <h2>{props.name}</h2>
        </div>
  
    );
  }
  
  export function CardContainer() {
    return (
        <div className='container'>
            {cardsInfo.map((card, index) => (
                <Card key={index} photo={card.photo} name={card.name} />
            ))}
        </div>
   
    );
  }
  
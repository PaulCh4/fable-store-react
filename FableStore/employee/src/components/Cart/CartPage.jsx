import React from 'react'

import styles from '../../styles/CartPage.module.css';
import ProductList from './ProductList';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { clearProducts } from '../../store/Slices/cartSlice';



const CartPage = () => {
  const totalCost = useSelector(state => state.cart.totalCost)

  const { register, handleSubmit, watch, formState: { errors }, reset ,clearErrors} = useForm();
  const dispatch = useDispatch();
  
  // Обработчик события при отправке формы
  const onSubmit = (data) => {
    const formData = {
      city: data.city,
      deliveryMethod,
      address: data.address,
      name: data.name,
      number: data.number,
      mail: data.mail,
      paymentMethod,
      comment: data.comment,
    };
    console.log(formData);
    alert(`Заказ оформлен. Город: ${formData.city}, Способ доставки: ${formData.deliveryMethod}, Адрес: ${formData.address}, Имя и фамилия: ${formData.name}, Телефон: ${formData.number}, Почта: ${formData.mail}, Способ оплаты: ${formData.paymentMethod}, Комментарий: ${formData.comment}`);
    dispatch(clearProducts());
    reset();
  };


  const [deliveryMethod, setDeliveryMethod] = useState('inStore');

  const handleDeliveryMethodChange = (method) => {
    setDeliveryMethod(method);
    setPaymentMethod('online');
  };

  
  const [paymentMethod, setPaymentMethod] = useState('online');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className={styles.container}>
      <section>
        {/* Форма */}
        <form className={styles.cartForm} onSubmit={handleSubmit(onSubmit)}>

          <label>Ваш город</label>
          <input type="text" id="city" {...register('city', { required: true })} 
          placeholder="Введите город"
          onChange={()=> clearErrors()}
          className={styles.inputCity}/>
          {errors.city && <p className={styles.errorMessage}>Обязательное поле</p>}


          <label>Способ доставки</label>
          <div className={styles.deliveryMethod}>
            <button type="button"
              className={deliveryMethod === 'inStore' ? styles.activeButton : ''}
              onClick={() => handleDeliveryMethodChange('inStore')}
            >В магазин</button>

            <button type="button"
              className={deliveryMethod === 'toDoor' ? styles.activeButton : ''}
              onClick={() => handleDeliveryMethodChange('toDoor')}
            >До двери</button>
          </div>

          <label>Адрес</label>
          <input type="text" id="address" {...register('address', { required: true })} 
          placeholder="Введите адрес"
          onChange={()=> clearErrors()}/>
          {errors.address && <p className={styles.errorMessage}>Обязательное поле</p>}


          <label>Данные получателя</label>

          <div className={styles.userFormData}>
            <label>Имя и фамилия</label>
            <input type="text" id="name" {...register('name', { required: true })} 
            placeholder="Введите имя и фамилию"
            onChange={()=> clearErrors()}/>
            {errors.name && <p className={styles.errorMessage}>Обязательное поле</p>}

            <label>Телефон</label>
            <input type="text" id="number" {...register('number', { required: true })} 
            placeholder="Введите номер" 
            onChange={()=> clearErrors()}/>
            {errors.number && <p className={styles.errorMessage}>Обязательное поле</p>}

            <label>Почта</label>
            <input type="text" id="mail" {...register('mail', { required: true })} 
            placeholder="Введите почту" 
            onChange={()=> clearErrors()}/>
            {errors.mail && <p className={styles.errorMessage}>Обязательное поле</p>}
          </div>


          <label >Способы оплаты</label>
          <div className={styles.paymentMethod}>
            <button type="button"
              className={`${styles.paymentMethodButton} ${paymentMethod === 'online' ? styles.activeButton : ''}`}
              onClick={() => handlePaymentMethodChange('online')}
            >Картой на сайте</button>

            {deliveryMethod === 'toDoor' && (
              <button type="button"
                className={`${styles.paymentMethodButton} ${paymentMethod === 'offline' ? styles.activeButton : ''}`}
                onClick={() => handlePaymentMethodChange('offline')}
              >Наличными курьеру</button>
            )}
          </div>



          <textarea id="comment" {...register('comment')} />
     

          <div className={styles.formGroup}>
            <input type="checkbox" id="agree" {...register('agree', { required: true })} />
            <label htmlFor="agree">Я соглашаюсь с условием оферты и политикой лояльности</label>
          </div>


          <button type="submit" className="order-button" 
            disabled={!watch('agree')}>
            Заказать
          </button>
        </form>
      </section>

      <section>
        <ProductList />

        {/* --- TotalPricePanel ---- */}
        <div className={styles.totalPricePanel}>
          <p>Сумма: {totalCost} $</p>
          <p>Доставка: 0 $</p>
          <p>Промокод: {"0"} $</p>
          <h1>Итог: {totalCost} $</h1>
          {/* <label htmlFor="">
            <input type="text" />
            <button>Применить</button>
          </label> */}
        </div>
      </section>


    </div>
  );
}


export default CartPage
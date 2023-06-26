import React from 'react'

import styles from '../../styles/Collection.module.css';
import ProductList from './ProductList';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const CartPage = () => {
  const totalCost = useSelector(state => state.cart.totalCost)

  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const onSubmit = (data)=>{
    alert(JSON.stringify(data))
  }

  return (
    <div>
      <p style={{"display": "flex"}}>Корзина - Оформление заказа</p>

      <div style={{"display": "flex", "gap": "20px"}}>
          
          {/* --- FORM ---- */}
          <section >
            <form onSubmit={handleSubmit(onSubmit)} style={{"display": "grid"}}>
              <input {...register('firstName',{required: true})}/>
              {errors.firstName && <p>This field is required</p>}

              <input {...register('firstName1',{required: true})}/>
              {errors.firstName1 && <p>This field is required</p>}

              <input {...register('firstName2',{required: true})}/>
              {errors.firstName2 && <p>This field is required</p>}

              <input {...register('firstName3',{required: true})}/>
              {errors.firstName3 && <p>This field is required</p>}

              <input type="submit" />
            </form>
          </section>


          {/* --- Cart ---- */}
          <section>
              <ProductList />

              {/* --- TotalPricePanel ---- */}
              <div>
                <p>Сумма: {totalCost} $</p>
                <p>Доставка: 0 $</p>
                <p>Промокод: {"0"} $</p>
                <p>Итог: {totalCost} $</p>
                <label htmlFor="">
                  <input type="text" />
                  <button>Применить</button>
                </label>
              </div>

          </section>

      </div>
    </div>
  )
}

export default CartPage

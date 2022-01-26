import React from 'react';
import styles from './styles.module.scss';

export default function Select({ items = [], id = 'userselect', label, bc, ...props }) {
  const { onChange } = props;
  return (
    <>
      <label className={`text-xl font-bold w-full`} htmlFor={`${id}`}>
        {label}
      </label>
      <select
        className={`cursor-pointer w-full bg-white rounded-md border border-${bc} py-1 px-2 ` + styles.select}
        id={`${id}` || 'userselect'}
        onChange={onChange}
      >
        {items.map((item, index) => {
          return (
            <option className={`bg-white font-light`} value={item.value} key={`userselect${index}`}>
              {item.title}
            </option>
          );
        })}
      </select>
    </>
  );
}

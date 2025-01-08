'use client';

import React from 'react';

import { Icon, IconType, Input,  Calendar, Select } from 'ui-kit-conf/dist';
import { ISelectOptions } from 'ui-kit-conf/dist/types/components/Dropdown/Dropdown';
import cls from './EventLocationForm.module.scss';
import {ContentLayout } from '@/ui/ContentLayout/ContentLayout';

export const EventLocationForm = () => (
    <ContentLayout>
      <span className={cls.mainTitle}><h3>Место и дата проведения</h3></span>
      <div className={cls.inputContainer}> 
        <div className={cls.cityBlock}>
        <label className={cls.cityLabel}>
          Город проведения <p className={cls.tagging}>*</p>
        </label>
        <div className={cls.citySelect} >
        <Select className={cls.select} placeholder='Введите город' options={[]} selectedOption={undefined} onOptionClick={function (option: ISelectOptions): void {
          throw new Error('Function not implemented.');
        } } />
        </div>
        </div>
        <div className={cls.twoInputLine}>
          <div className={cls.leftBlock}>
            <label className={cls.leftLabel}>Адрес проведения <p className={cls.tagging}>*</p></label>
            <div className={cls.leftInput}>
            <Input placeholder='Введите адрес' />
            </div>
          </div>
          <div className={cls.rightBlock}>
            <label className={cls.rightLabel}>Ссылка на карты <p className={cls.tagging}>*</p></label>
            <div className={cls.rightInput}>
            <Input placeholder='Введите город' />
            </div>
          </div>
        </div>
        <div className={cls.twoInputLine}>
          <div className={cls.leftBlock}>
            <label className={cls.leftLabel}>Дата начала <p className={cls.tagging}>*</p></label>
            <div className={cls.leftInput}>
            <Calendar startDate={null} endDate={null} onChangeStartDate={function (date: Date | null): void {
              throw new Error('Function not implemented.');
            } } onChangeEndDate={function (date: Date | null): void {
              throw new Error('Function not implemented.');
            } } ></Calendar>
            </div>
          </div>
          <div className={cls.rightBlock}>
            <label className={cls.rightLabel}>Время начала <p className={cls.tagging}>*</p></label>
            <div className={cls.rightInput}>
            <Input placeholder='00:00' />
            </div>
          </div>
        </div>
        <div className={cls.twoInputLine}>
          <div className={cls.leftBlock}>
            <label className={cls.leftLabel}>Дата завершения </label>
            <div className={cls.leftInput}>
            <Calendar startDate={null} endDate={null} onChangeStartDate={function (date: Date | null): void {
              throw new Error('Function not implemented.');
            } } onChangeEndDate={function (date: Date | null): void {
              throw new Error('Function not implemented.');
            } } ></Calendar>
            </div>
          </div>
          <div className={cls.rightBlock}>
            <label className={cls.rightLabel}>Время завершения </label>
            <div className={cls.rightInput}>
            <Input placeholder='00:00' />
            </div>
          </div>
        </div>
        
        
      </div>
    </ContentLayout>
  )
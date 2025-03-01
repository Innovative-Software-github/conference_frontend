'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useMediaQuery } from 'react-responsive'

import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { SplitContainer } from '../../ui/SplitContainer/SplitContainer'
import { CoverPhotoUploader } from './components/CoverPhotoUploader/CoverPhotoUploader'
import { TagSelector } from './components/TagSelector/TagSelector'
import { ConstraintContainer } from '../../ui/ConstraintContainer/ConstaintContainer'
import { defaultCreateEventValues } from './utils'
import { IEventCreateRequest } from '../../services/events/interfaces'
import { IFiltersConfig } from '../../services/static/filtersConfig/interfaces'
import { CreateEventDescription } from './components/CreateEventDescription/CreateEventDescription'
import { SumbitButtons } from './components/SumbitButtons/SumbitButtons'
import { CreateEventCost } from './components/CreateEventCost/CreateEventCost'
import { CreateEventLocation } from './components/CreateEventLocation/CreateEventLocation'
import { MediaQuery } from '../../constants/MediaQuery'

import cls from './CreateEventPage.module.scss';
import { IResponse } from '../../services/customFetch'
import { ICurrentUserResponse } from '../../services/user/interfaces'

export interface ICreateEventPage {
  currentUser: IResponse<ICurrentUserResponse>
  filtersConfig: IFiltersConfig;
}

export const CreateEventPage: React.FC<ICreateEventPage> = ({
  currentUser,
  filtersConfig,
}) => {
  const isMobile = useMediaQuery({ maxWidth: MediaQuery.BigMobile });

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IEventCreateRequest>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: defaultCreateEventValues,
  });

  const ticketTypeValue = watch('ticketType');

  // const validationRules = React.useMemo(() => (
  //   createValidationRulesLogin()
  // ), []);

  const onSubmit = (data: IEventCreateRequest) => {
    console.log(data);
  }

  return (
    <>
      <MovingLabelsBar />
      <Header isUserAuth={currentUser.ok} />
      <main>
        <form>
          <ConstraintContainer className={cls.container}>
            <SplitContainer
              title='Предложить событие'
              leftContent={
                <CoverPhotoUploader
                  control={control}
                />
              }
              rightContent={
                <TagSelector
                  control={control}
                  tracksFilterConfig={filtersConfig.tracksFilterConfig}
                />
              }
            />
            <SplitContainer
              leftContent={
                <CreateEventDescription control={control} errors={errors} />
              }
              rightContent={
                <div className={cls.sectionsContainer}>
                  <CreateEventCost control={control} errors={errors} ticketTypeValue={ticketTypeValue} />
                  {!isMobile ? <SumbitButtons isFormValid={isValid} /> : null}
                </div>
              }
            />
            <SplitContainer
              leftContent={
                <CreateEventLocation
                  citiesFilterConfig={filtersConfig.citiesFilterConfig}
                  control={control}
                  errors={errors}
                />
              }
              rightContent={isMobile ? <SumbitButtons isFormValid={isValid} /> : null}
            />
          </ConstraintContainer>
          <button type='button' onClick={handleSubmit(onSubmit)}>click</button>
        </form>
      </main>
      <Footer />
    </>
  )
}
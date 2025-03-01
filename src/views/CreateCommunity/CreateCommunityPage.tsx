'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form';

import { Button } from 'ui-kit-conf/dist';
import { ICurrentUserResponse } from '../../services/user/interfaces';
import { IResponse } from '../../services/customFetch';
import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ConstraintContainer } from '../../ui/ConstraintContainer/ConstaintContainer';
import { CoverPhotoUploader } from './components/CoverPhotoUploader/CoverPhotoUploader';
import { ICommunityCreateRequest } from '../../services/communities/interfaces';

import cls from './CreateCommunityPage.module.scss';
import { defaultCreateCommunityValues } from './utils';
import { SplitContainer } from '../../ui/SplitContainer/SplitContainer';
import { CreateCommunityForm } from './components/CreateCommunityForm/CreateCommunityForm';
import { ContentLayout } from '../../ui/ContentLayout/ContentLayout';

export interface ICreateEventPage {
  currentUser: IResponse<ICurrentUserResponse>
}

export const CreateCommunityPage: React.FC<ICreateEventPage> = ({
  currentUser,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommunityCreateRequest>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: defaultCreateCommunityValues,
  });

  const onSumbit = (data: ICommunityCreateRequest) => {
    console.log(data, errors);
  }

  return (
    <div className={cls.container}>
      <MovingLabelsBar />
      <Header isUserAuth={currentUser.ok} />
      <main className={cls.main}>
        <ConstraintContainer className={cls.contentContainer}>
          <SplitContainer
            title='Создать сообщество'
            leftContent={<CoverPhotoUploader control={control} />}
            rightContent={null}
          />
          <SplitContainer
            leftContent={<CreateCommunityForm control={control} errors={errors} />}
            rightContent={null}
          />
          <SplitContainer
            leftContent={
              <ContentLayout>
                <Button
                  variant='default'
                  onClick={handleSubmit(onSumbit)}
                >
                  Сохранить
                </Button>
              </ContentLayout>
            }
            rightContent={null}
          />
        </ConstraintContainer>
      </main>
      <Footer />
    </div>
  )
}

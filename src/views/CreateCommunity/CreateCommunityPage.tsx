'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
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
import { CreateCommunityForm } from './components/CreateCommunityForm/CreateCommunityForm';
import { ContentLayout } from '../../ui/ContentLayout/ContentLayout';
import { createCommunity } from '@/services/communities/request';
import { ROUTES } from '@/constants/Routes';
import { Title } from '@/ui/Title/Title';

export interface ICreateEventPage {
  currentUser: IResponse<ICurrentUserResponse>
}

export const CreateCommunityPage: React.FC<ICreateEventPage> = ({
  currentUser,
}) => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICommunityCreateRequest>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: defaultCreateCommunityValues,
  });

  const onSumbit = async (data: ICommunityCreateRequest) => {
    try {
      const response = await createCommunity(data);

      if (!response.ok) {
        toast.error('Что - то пошло не так')

        return
      }

      toast.success('Событие создано успешно')
      router.push(ROUTES.home);
    } catch (error) {
      toast.error('Произошла ошибка сервера, попробуйте позже')
    }
  }

  return (
    <div className={cls.container}>
      <MovingLabelsBar />
      <Header isUserAuth={currentUser.ok} />
      <main className={cls.main}>
        <ConstraintContainer className={cls.contentContainer}>
          <Title>Создать сообщество</Title>
          <ContentLayout title='Обложка' className={cls.layout}>
            <CoverPhotoUploader control={control} />
          </ContentLayout>
          <ContentLayout title='Описание сообщества' className={cls.layout}>
            <CreateCommunityForm control={control} errors={errors} />
          </ContentLayout>
          <ContentLayout className={cls.layout}>
            <Button
              variant='default'
              onClick={handleSubmit(onSumbit)}
            >
              Сохранить
            </Button>
          </ContentLayout>
        </ConstraintContainer>
      </main>
      <Footer />
    </div>
  )
}

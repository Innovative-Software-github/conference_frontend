import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../../components/Header/Header';
import PopularConferencesSwiperContainer from './components/PopularConferencesSwiper/SwiperContainer';
import { Events } from './components/Events/Events';
import { IEventsResponse } from '@/services/events/interfaces';
import { IFiltersConfig } from '../../services/static/filtersConfig/interfaces';
import { slidesData } from './todo:delete';
import { Footer } from '../../components/Footer/Footer';
import { ICurrentUserResponse } from '../../services/user/interfaces';
import { IResponse } from '../../services/customFetch';

export interface IMainPage {
  currentUser: IResponse<ICurrentUserResponse>;
  events: IEventsResponse[];
  filtersConfig: IFiltersConfig;
};

export const MainPage: React.FC<IMainPage> = ({
  currentUser,
  events,
  filtersConfig,
}) => (
  <div>
    <MovingLabelsBar />
    <Header isUserAuth={currentUser.ok} />
    <main>
      <PopularConferencesSwiperContainer slides={slidesData} />
      <Events defaultEvents={events} filtersConfig={filtersConfig} />
    </main>
    <Footer />
  </div>
);
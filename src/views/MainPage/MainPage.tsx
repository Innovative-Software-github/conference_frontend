import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar';
import { Header } from '../../components/Header/Header';
import PopularConferencesSwiperContainer from './components/PopularConferencesSwiper/SwiperContainer';
import { Events } from './components/Events/Events';
import { IEventsResponse } from '@/services/events/interfaces';
import { IFiltersConfig } from '../../services/static/filtersConfig/interfaces';
import { labels, slidesData } from './todo:delete';

export interface IMainPage {
  events: IEventsResponse[];
  filtersConfig: IFiltersConfig;
};

export const MainPage: React.FC<IMainPage> = ({
  events,
  filtersConfig,
}) => (
  <div>
    <MovingLabelsBar />
    <Header />
    <main>
      <PopularConferencesSwiperContainer slides={slidesData} />
      <Events defaultEvents={events} filtersConfig={filtersConfig} />
    </main>
    <footer>footerы</footer>
  </div>
);
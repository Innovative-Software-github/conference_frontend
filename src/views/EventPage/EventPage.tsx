import * as React from 'react'

import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { SimilarEvents } from './components/SimilarEvents/SimilarEvents'
import { IEventsResponse } from '../../services/events/interfaces'
import { SocialShare } from './components/SocialShare/SocialShare'
import { EventDetails } from './components/EventDetails/EventDetails'
import { EventTopSection } from './components/EventTopSection/EventTopSection'
import { ICurrentUserResponse } from '../../services/user/interfaces'
import { IResponse } from '../../services/customFetch'

export interface IEventPage {
  currentUser: IResponse<ICurrentUserResponse>;
  similarEvents: IEventsResponse[];
}

export const EventPage: React.FC<IEventPage> = ({
  currentUser,
  similarEvents,
}) => (
  <div>
    <MovingLabelsBar />
    <Header isUserAuth={currentUser.ok} />
    <main>
      <EventTopSection />
      <EventDetails eventInfo={null} />
      <SocialShare />
      <SimilarEvents similarEvents={similarEvents} />
    </main>
    <Footer />
  </div>
)

import * as React from 'react'

import { MovingLabelsBar } from '../../components/MovingLabelsBar/MovingLabelsBar'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { SimilarEvents } from './components/SimilarEvents/SimilarEvents'
import { IEventsResponse } from '../../services/events/interfaces'
import { SocialShare } from './components/SocialShare/SocialShare'
import { EventDetails } from './components/EventDetails/EventDetails'
import { EventTopSection } from './components/EventTopSection/EventTopSection'

export interface IEventPage {
  similarEvents: IEventsResponse[];
}

export const EventPage: React.FC<IEventPage> = ({
  similarEvents,
}) => (
  <div>
    <MovingLabelsBar />
    <Header />
    <main>
      <EventTopSection />
      <EventDetails eventInfo={null} />
      <SocialShare />
      <SimilarEvents similarEvents={similarEvents} />
    </main>
    <Footer />
  </div>
)

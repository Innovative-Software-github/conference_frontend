import { IEventCreateRequest } from '../../services/events/interfaces';
import { TICKET_PRICE_VALUES } from './components/CreateEventCost/delete';

export const defaultCreateEventValues: IEventCreateRequest = {
  coverImages: [],
  selectedTracks: [],
  name: '',
  description: '',
  cities: {
    id: '',
    title: '',
  },
  address: '',
  startDate: '',
  endDate: '',
  startTime: '',
  endTime: '',
  ticketType: TICKET_PRICE_VALUES[0],
  ticketPrice: '',
  online: false,
  offline: false,
} as const;

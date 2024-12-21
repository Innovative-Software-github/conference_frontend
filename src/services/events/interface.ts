export interface ICreateEventRequest {
  title: string,
  event_type: number,
  start_date: Date,
  end_date: Date,
  registration_url: string,
  location: string,
  picture_ids: number[],
  tracks: number[],
  is_draft: true,
  ticket_type: number,
  price: number,
  city_id: number,
}

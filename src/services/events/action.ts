'use server';

import { IApiError } from '../customFetch/customFetch';
import { HttpStatusCode } from '../HttpStatusCode';
import { createEvent } from './api';
import { redirect } from 'next/navigation';

export async function createEventAction() {
  try {
    const result = await createEvent();

    return result;
  } catch (error) {
    const apiError = error as IApiError;

    if (apiError.status === HttpStatusCode.Unauthorized) {
      console.log('v1')
    }
  
    throw error;
  }
}

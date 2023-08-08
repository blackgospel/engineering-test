import { IParcSchema } from './parcs.schema';
import { IUserSchema } from './users.schema';

export type IBookingSchema = {
  id: string;
  user: IUserSchema['id'];
  parc: IParcSchema['id'];
  bookingdate: string;
  comments: string;
};

export type IBookingAPI = IBookingSchema[];

import type { Request, Response } from 'express';
export declare function createBooking(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getMyBookings(req: Request, res: Response): Promise<void>;
export declare function cancelMyBooking(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getAllBookings(req: Request, res: Response): Promise<void>;
export declare function updateBookingStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function acceptBooking(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteBooking(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=booking.controller.d.ts.map
import type { Request, Response } from 'express';
export declare function getPlaces(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getPlaceById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function createPlace(req: Request, res: Response): Promise<void>;
export declare function updatePlace(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deletePlace(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function toggleFeaturePlace(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=place.controller.d.ts.map
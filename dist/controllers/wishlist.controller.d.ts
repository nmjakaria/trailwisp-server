import type { Request, Response } from 'express';
export declare function addToWishlist(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getMyWishlist(req: Request, res: Response): Promise<void>;
export declare function removeFromWishlist(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=wishlist.controller.d.ts.map
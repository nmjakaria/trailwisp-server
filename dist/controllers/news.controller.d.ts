import type { Request, Response } from 'express';
export declare function getLatestNews(req: Request, res: Response): Promise<void>;
export declare function getAllNews(req: Request, res: Response): Promise<void>;
export declare function createNews(req: Request, res: Response): Promise<void>;
export declare function deleteNews(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=news.controller.d.ts.map
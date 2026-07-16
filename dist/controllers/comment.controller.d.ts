import type { Request, Response } from 'express';
export declare function createComment(req: Request, res: Response): Promise<void>;
export declare function getAllComments(req: Request, res: Response): Promise<void>;
export declare function getCommentsForTarget(req: Request, res: Response): Promise<void>;
export declare function getBestComments(req: Request, res: Response): Promise<void>;
export declare function toggleBestComment(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteComment(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=comment.controller.d.ts.map
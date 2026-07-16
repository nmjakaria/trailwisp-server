import type { Request, Response } from 'express';
export declare function getStories(req: Request, res: Response): Promise<void>;
export declare function getStoryById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function createStory(req: Request, res: Response): Promise<void>;
export declare function updateStory(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function deleteStory(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function toggleFeatureStory(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function getMyStories(req: Request, res: Response): Promise<void>;
//# sourceMappingURL=story.controller.d.ts.map
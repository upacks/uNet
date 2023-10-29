import { Request, Response } from 'express';
export declare class Host {
    server: any;
    io: any;
    app: any;
    requests: any;
    name: string;
    timeout: number;
    port: number;
    redis: boolean;
    constructor(conf: {
        name: string; /** name alias **/
        port?: number;
        static?: string; /** if serves static **/
        timeout?: number; /** request timeout **/
        redis?: boolean; /** use redis **/
    });
    emit: (channel: string, data: any) => void;
    on: (channel: string, callback: (req: Request, res: Response) => void) => void;
    exit: () => void;
}
//# sourceMappingURL=host.d.ts.map
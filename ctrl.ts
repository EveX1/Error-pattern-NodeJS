import { Request, Response } from "express";
import { getUser} from "./logic";

export async function doSomethingWithUser(req: Request, res: Response): Promise<void> {
    // eslint-disable-next-line no-useless-catch
    try {
        // do some control code
        const userId = parseInt(req.params.id, 10);
        const user = await getUser(userId);
        res.status(200).json(user);
    }
    catch (error) {
        // I can process the error here, or throw it to a generic error catcher (like a middleware, see app.ts)
        throw error;
    }
}
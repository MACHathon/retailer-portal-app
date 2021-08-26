import { promises } from 'fs';
import path from 'path';

export const getData = async (fileName: string) =>  {
    const filePath = path.resolve(process.cwd(), 'data', fileName);
    const jsonData: any = await promises.readFile(filePath);

    return JSON.parse(jsonData);
}
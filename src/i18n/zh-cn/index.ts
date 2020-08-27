/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// This is just an example,
// so you can safely delete all default props below
import fs from 'fs-extra';
import path from 'path';
const packageJson = fs.readJsonSync(path.join(__dirname, 'strings.json'));
export default packageJson;

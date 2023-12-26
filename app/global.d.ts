import type { Database as DB } from '../lib/database.types';

declare global {
	type Database = DB;
	type Member = DB['public']['Tables']['member']['Row'];
}

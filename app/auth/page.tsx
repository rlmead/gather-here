import Auth from './auth';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session }
  } = await supabase.auth.getSession();

  return (
    <Auth session={session} />
  );
}

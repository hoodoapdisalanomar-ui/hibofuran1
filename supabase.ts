import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fdzpxxikvrwixfskidnn.supabase.co';
const supabaseKey = 'sb_publishable_tNkq_T-OdzaJrhtIpF6nTQ_NbYeTCNo';

export const supabase = createClient(supabaseUrl, supabaseKey);
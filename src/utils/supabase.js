// @supabase/supabase-js  - this will enable to make a api call to backend

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

const supabaseCLient = async(supabaseAccessToken) =>{
    const supabase = createClient(supabaseUrl,supabaseKey,{
        global:{
            headers:{
                Authorization: `Bearer ${supabaseAccessToken}`
            }
        }
    })

    return supabase;
}
export default supabaseCLient
        
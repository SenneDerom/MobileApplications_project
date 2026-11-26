import { supabase } from '../lib/supabase';
import type { Step } from '../types/Step';

const STEPS_TABLE = 'steps';

export async function getSteps(): Promise<Step[]> {
  const { data, error } = await supabase
    .from(STEPS_TABLE)
    .select('id, qr_code:code, title, location, visited')
    .order('id', { ascending: true });

  if (error) {
    throw new Error(`Could not load steps: ${error.message}`);
  }

  return data;
}

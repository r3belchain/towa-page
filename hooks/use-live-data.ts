"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";



type ServerStatsRow = {
  id: number;
  total_members: number;
  online_count: number;
  updated_at: string;
};

type BoosterRow = {
  discord_user_id: string;
  username: string;
  avatar_url: string;
  boosting_since: string;
};

type MemberRow = {
  discord_user_id: string;
  username: string;
  avatar_url: string;
  event_type: "join" | "leave";
  event_at: string;
};

type VoiceActivityRow = {
  discord_user_id: string;
  username: string;
  avatar_url: string;
  channel_id: string;
  channel_name: string;
  joined_at: string;
};


function useRealtimeTable<T>(
  table: string,
  fetcher: () => Promise<T>,
  initial: T,
) {
  const [data, setData] = useState<T>(initial);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const instanceId = useRef(Math.random().toString(36).slice(2));

  useEffect(() => {
    let isMounted = true;
    let channel: ReturnType<typeof supabase.channel> | null = null;

    async function load() {
      try {
        console.log(`[${table}] Fetching data...`);
        const result = await fetcher();
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        console.error(`[${table}] Error:`, err);
        if (isMounted)
          setError(err instanceof Error ? err.message : "Gagal memuat data");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    load();

    channel = supabase
      .channel(`${table}-${instanceId.current}`)
      .on("postgres_changes", { event: "*", schema: "public", table }, () => {
        load();
      })
      .subscribe();

    return () => {
      isMounted = false;
      if (channel) supabase.removeChannel(channel);
    };
  }, [table]);

  return { data, loading, error };
}


export function useServerStats() {
  return useRealtimeTable<ServerStatsRow | null>(
    "server_stats",
    async () => {
      const { data, error } = await supabase
        .from("server_stats")
        .select("*")
        .eq("id", 1)
        .single();
      if (error) throw error;
      return data;
    },
    null,
  );
}

export function useBoosters() {
  return useRealtimeTable<BoosterRow[]>(
    "boosters",
    async () => {
      const { data, error } = await supabase
        .from("boosters")
        .select("*")
        .order("boosting_since", { ascending: false });
      if (error) throw error;
      return data ?? [];
    },
    [],
  );
}

export function useRecentMembers(limit = 10) {
  return useRealtimeTable<MemberRow[]>(
    "members",
    async () => {
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("event_type", "join")
        .order("event_at", { ascending: false })
        .limit(limit);
      if (error) throw error;
      return data ?? [];
    },
    [],
  );
}

export type VoiceChannelGroup = {
  channelId: string;
  name: string;
  people: number;
  avatars: string[]; // username, dipakai buat inisial di UI
};

export function useVoiceActivity() {
  const { data, loading, error } = useRealtimeTable<VoiceActivityRow[]>(
    "voice_activity",
    async () => {
      const { data, error } = await supabase.from("voice_activity").select("*");
      if (error) throw error;
      return data ?? [];
    },
    [],
  );

  const grouped: VoiceChannelGroup[] = Object.values(
    data.reduce<Record<string, VoiceChannelGroup>>((acc, row) => {
      if (!acc[row.channel_id]) {
        acc[row.channel_id] = {
          channelId: row.channel_id,
          name: row.channel_name,
          people: 0,
          avatars: [],
        };
      }
      acc[row.channel_id].people += 1;
      acc[row.channel_id].avatars.push(row.username);
      return acc;
    }, {}),
  );

  return { data: grouped, loading, error };
}

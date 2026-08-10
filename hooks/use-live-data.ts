"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useRef, useState } from "react";

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

type StaffMemberRow = {
  discord_user_id: string;
  username: string;
  display_name: string;
  avatar_url: string;
  role_id: string;
  role_name: string;
  role_color: string;
  position_order: number;
  updated_at: string;
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

export type VoiceMember = {
  username: string;
  avatarUrl?: string;
};

export type VoiceChannelGroup = {
  channelId: string;
  name: string;
  people: number;
  members: VoiceMember[];
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
          members: [],
        };
      }
      acc[row.channel_id].people += 1;

      acc[row.channel_id].members.push({
        username: row.username,
        avatarUrl: row.avatar_url ?? undefined,
      });

      return acc;
    }, {}),
  );

  return { data: grouped, loading, error };
}

export function useStaffMembers() {
  return useRealtimeTable<StaffMemberRow[]>(
    "staff_members",
    async () => {
      const { data, error } = await supabase
        .from("staff_members")
        .select("*")
        .order("position_order", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
    [],
  );
}

export function useDonors() {
  return useRealtimeTable<StaffMemberRow[]>(
    "donors",
    async () => {
      const { data, error } = await supabase
        .from("donors")
        .select("*")
        .order("position_order", { ascending: true });
      if (error) throw error;
      return data ?? [];
    },
    [],
  );
}

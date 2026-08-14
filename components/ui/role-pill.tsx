"use client";

import { useTheme } from "@/lib/theme-provider";
import {
  autoUpdate,
  flip,
  FloatingPortal,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";

export type RolePillMember = {
  discordUserId: string;
  username: string;
  avatarUrl: string;
};

const TONE_CLASSES: Record<string, string> = {
  default:
    "border-towa-ink bg-towa-bg text-towa-text hover:border-towa-ink dark:!border-towa-accent-2 dark:!bg-[#12121e]/60 dark:!text-towa-text dark:!shadow-[0_0_10px_rgba(47,232,255,0.1)] dark:hover:!shadow-[0_0_20px_rgba(47,232,255,0.4)]",
  amber: "border-[#f0b673] bg-[#ffe8d1] text-[#a35a12] hover:border-[#c97a1f]",
  rose: "border-[#f0a3c4] bg-[#ffe1ee] text-[#a3255e] hover:border-[#c94b85]",
  royal:
    "border-[#d4af37] bg-gradient-to-br from-[#fff3d0] to-[#ffe8b0] text-[#7a5200] shadow-[0_0_0_1px_#d4af37]",
};

const TONE_FILL: Record<string, string> = {
  default: "var(--towa-accent-2)",
  amber: "#c97a1f",
  rose: "#c94b85",
  royal: "#a67c00",
};

export function RolePill({
  label,
  members,
  icon,
  tone = "default",
}: {
  label: string;
  members: RolePillMember[];
  icon?: ReactNode;
  tone?: keyof typeof TONE_CLASSES;
}) {
  const [open, setOpen] = useState(false);
  const { isDesktop } = useTheme();

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "top",
    whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip({ padding: 12 }), shift({ padding: 12 })],
  });

  const hover = useHover(context, { enabled: isDesktop, move: false });
  const click = useClick(context, { enabled: !isDesktop });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "dialog" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    click,
    dismiss,
    role,
  ]);

  if (members.length === 0) return null;

  return (
    <>
      <motion.button
        ref={refs.setReference}
        {...getReferenceProps()}
        type="button"
        whileHover="hover"
        initial="rest"
        animate="rest"
        whileTap={{ scale: 0.97 }}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}

        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 px-5 py-2.5 text-sm font-black shadow-[2px_2px_0_var(--towa-ink)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--towa-ink)] dark:shadow-none dark:hover:!shadow-[0_0_15px_rgba(47,232,255,0.4)] ${TONE_CLASSES[tone]}`}
      >
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 origin-left"
          style={{ backgroundColor: TONE_FILL[tone] }}
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />

        <span className="relative z-10 flex items-center gap-2 transition-colors duration-200 group-hover:text-towa-ink">
          {icon && (
            <motion.span
              className="inline-flex"
              variants={{
                rest: { rotate: 0, scale: 1 },
                hover: {
                  rotate: [0, -12, 10, -6, 0],
                  scale: 1.15,
                  transition: { duration: 0.4, ease: "easeInOut" },
                },
              }}
            >
              {icon}
            </motion.span>
          )}
          {label}
          <span className="text-xs font-bold opacity-60 group-hover:opacity-100">{members.length}</span>
        </span>
      </motion.button>
      
      <FloatingPortal>
        <AnimatePresence>
          {open && (
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="z-50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 4 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="w-64 rounded-2xl border-2 border-towa-ink bg-towa-bg p-3 shadow-[5px_5px_0_var(--towa-ink)] transition-colors duration-300 dark:!border-towa-accent-2/50 dark:!bg-[#0a0a12]/90 dark:!shadow-[0_0_20px_rgba(47,232,255,0.2)] dark:backdrop-blur-md"
              >
                <p className="px-1 pb-2 text-[11px] font-black uppercase tracking-wider text-towa-accent-2">
                  {label} · {members.length} orang
                </p>
                <div className="flex max-h-64 flex-col gap-0.5 overflow-y-auto towa-scrollbar">
                  {members.map((member) => (
                    <div
                      key={member.discordUserId}
                      className="flex items-center gap-2 rounded-lg px-1 py-1.5 transition-colors hover:bg-towa-bg-alt dark:hover:bg-towa-accent-2/10"
                    >
                      <img
                        src={member.avatarUrl}
                        alt=""
                        className="size-8 shrink-0 rounded-full border border-towa-border/50 object-cover dark:border-transparent"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      <p className="truncate text-sm font-bold text-towa-text">
                        {member.username}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
}
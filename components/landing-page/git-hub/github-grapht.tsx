"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

interface Day {
    date: string;
    contributionCount: number;
    color: string;
}

interface Week {
    contributionDays: Day[];
}

interface Calendar {
    totalContributions: number;
    weeks: Week[];
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const LEGEND_COLORS_DARK = [
    "rgb(22, 27, 34)",
    "rgb(14, 68, 41)",
    "rgb(0, 109, 50)",
    "rgb(38, 166, 65)",
    "rgb(57, 211, 83)",
];

const LEGEND_COLORS_LIGHT = [
    "rgb(235, 237, 240)",
    "rgb(172, 224, 192)",
    "rgb(127, 201, 155)",
    "rgb(77, 175, 124)",
    "rgb(34, 139, 58)",
];

function getContributionLevel(count: number): number {
    if (count === 0) return 0;
    if (count <= 1) return 1;
    if (count <= 3) return 2;
    if (count <= 5) return 3;
    return 4;
}

function getMonthPosition(weekIndex: number, weeks: Week[]): number | null {
    if (weekIndex === 0) return 0;

    const firstDay = weeks[weekIndex].contributionDays[0];
    if (!firstDay) return null;

    const date = new Date(firstDay.date);
    const dayOfMonth = date.getDate();

    if (dayOfMonth <= 7) {
        return weekIndex * 13;
    }

    return null;
}

export default function GithubGraph({
    username,
    year = new Date().getFullYear(),
}: {
    username: string;
    year?: number;
}) {
    const { theme, resolvedTheme } = useTheme();
    const [calendar, setCalendar] = useState<Calendar | null>(null);
    const [hover, setHover] = useState<{ x: number; y: number; day: Day } | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = mounted && (resolvedTheme === 'dark' || theme === 'dark');
    const legendColors = isDark ? LEGEND_COLORS_DARK : LEGEND_COLORS_LIGHT;
    const textColor = isDark ? "rgb(139, 148, 158)" : "rgb(88, 96, 105)";
    const strokeColor = isDark ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.04)";

    useEffect(() => {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
        const load = async () => {
            try {
                if (backendUrl && backendUrl !== 'undefined') {
                    const res = await fetch(
                        `${backendUrl}/api/v1/git/contributions?user=${username}&year=${year}`
                    )
                    if (res.ok) {
                        const data = await res.json()
                        if (data?.weeks) {
                            setCalendar(data)
                            return
                        }
                    }
                }

                const res = await fetch(
                    `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
                )
                if (!res.ok) return
                const data = await res.json() as {
                    total?: Record<string, number>
                    contributions?: { date: string; count: number }[]
                }
                const contributions = (data.contributions ?? []).filter((c) =>
                    c.date.startsWith(String(year))
                )
                if (!contributions.length) return

                const weeks: Week[] = []
                let currentWeek: Day[] = []
                const firstDow = new Date(contributions[0].date).getDay()
                for (let i = 0; i < firstDow; i++) {
                    currentWeek.push({ date: '', contributionCount: 0, color: '' })
                }
                for (const c of contributions) {
                    currentWeek.push({
                        date: c.date,
                        contributionCount: c.count,
                        color: '',
                    })
                    if (currentWeek.length === 7) {
                        weeks.push({ contributionDays: currentWeek })
                        currentWeek = []
                    }
                }
                if (currentWeek.length) {
                    while (currentWeek.length < 7) {
                        currentWeek.push({ date: '', contributionCount: 0, color: '' })
                    }
                    weeks.push({ contributionDays: currentWeek })
                }

                setCalendar({
                    totalContributions:
                        data.total?.[String(year)] ??
                        contributions.reduce((sum, c) => sum + c.count, 0),
                    weeks,
                })
            } catch {
                // keep skeleton if contributions cannot be loaded
            }
        }

        load()
    }, [username, year]);

    if (!calendar || !mounted) {
        return (
            <div className="relative w-full flex flex-col">
                {/* Contributions text skeleton - matches "X contributions in year" placement */}
                <div className="h-4 w-36 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse self-end mb-4" />
                {/* Graph skeleton - mirrors actual contribution grid layout */}
                <div className="w-full flex flex-col justify-center items-center">
                    <div className="w-full overflow-hidden rounded-lg" style={{ maxWidth: "100%" }}>
                        <div className="w-full h-[107px] relative overflow-hidden rounded-lg bg-neutral-200/60 dark:bg-neutral-800/60">
                            {/* Contribution grid cells - 53 weeks × 7 days */}
                            <div
                                className="absolute inset-2 top-5 grid gap-px"
                                style={{
                                    gridTemplateColumns: "repeat(53, minmax(0, 1fr))",
                                    gridTemplateRows: "repeat(7, minmax(0, 1fr))",
                                }}
                            >
                                {Array.from({ length: 53 * 7 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="min-w-0 min-h-0 rounded-[2px] bg-neutral-300/95 dark:bg-neutral-700/95"
                                    />
                                ))}
                            </div>
                            {/* Shimmer */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent pointer-events-none"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                style={{ width: "50%" }}
                            />
                        </div>
                    </div>
                    {/* Legend skeleton - Less | squares | More */}
                    <footer className="self-end mt-2 flex items-center gap-2 flex-wrap">
                        <div className="h-3 w-8 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                        <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-2.5 h-2.5 rounded-[2px] bg-neutral-200 dark:bg-neutral-800 shrink-0"
                                />
                            ))}
                        </div>
                        <div className="h-3 w-8 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                    </footer>
                </div>
            </div>
        );
    }

    const weeks = calendar.weeks;
    const svgWidth = weeks.length * 13 + 26;
    const svgHeight = 107;
    const cellSize = 10;

    const monthPositions: { month: string; x: number }[] = [];
    weeks.forEach((_, weekIndex) => {
        const position = getMonthPosition(weekIndex, weeks);
        if (position !== null) {
            const firstDay = weeks[weekIndex].contributionDays[0];
            if (firstDay) {
                const date = new Date(firstDay.date);
                const month = MONTHS[date.getMonth()];
                if (!monthPositions.find(m => m.month === month)) {
                    monthPositions.push({ month, x: position });
                }
            }
        }
    });

    return (
        <div className="relative   w-full flex flex-col ">
            <motion.p initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                viewport={{ once: true }} className="text-neutral-700 dark:text-neutral-400 text-sm mb-4 self-end ">
                {calendar.totalContributions} contributions in {year}
            </motion.p>
            <div className="w-full [&>svg]:w-full [&>svg]:h-auto [&>svg]:max-w-full [&>svg]:overflow-visible flex flex-col justify-center items-center">
                <div className="" style={{ maxWidth: "100%" }}>
                    <motion.svg
                        initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                        width={svgWidth}
                        height={svgHeight}
                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                        className=""
                        style={{ maxWidth: "100%" }}
                    >
                        <g className="react-activity-calendar__legend-month">
                            {monthPositions.map(({ month, x }) => (
                                <text
                                    key={`${month}-${x}`}
                                    x={x + 26}
                                    y={0}
                                    dominantBaseline="hanging"
                                    fill={textColor}
                                    className="text-neutral-100 dark:text-neutral-700"
                                    style={{ fontSize: "11px" }}
                                >
                                    {month}
                                </text>
                            ))}
                        </g>

                        {weeks.map((week, weekIndex) => {
                            const translateX = weekIndex * 13;
                            return (
                                <g key={weekIndex} transform={`translate(${translateX}, 0)`}>
                                    {week.contributionDays.map((day, dayIndex) => {
                                        const y = 19 + dayIndex * 13;
                                        const level = getContributionLevel(day.contributionCount);
                                        const fillColor = legendColors[level];

                                        return (
                                            <rect
                                                key={dayIndex}
                                                x={0}
                                                y={y}
                                                width={cellSize}
                                                height={cellSize}
                                                rx={2}
                                                ry={2}
                                                fill={fillColor}
                                                data-date={day.date}
                                                data-level={level}
                                                style={{ stroke: strokeColor }}
                                                onMouseEnter={(e) => {
                                                    const rect = e.currentTarget.getBoundingClientRect();
                                                    const container = e.currentTarget.closest('.relative')?.getBoundingClientRect();
                                                    if (container) {
                                                        setHover({
                                                            x: rect.left - container.left + rect.width / 2,
                                                            y: rect.top - container.top,
                                                            day,
                                                        });
                                                    }
                                                }}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        );
                                    })}
                                </g>
                            );
                        })}
                    </motion.svg>
                </div>

                <footer className="self-end mt-2" style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px", whiteSpace: "nowrap" }}>
                    <div className="react-activity-calendar__legend-colors" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "3px" }}>
                        <span className="text-neutral-600 dark:text-neutral-400" style={{ marginRight: "0.4em", fontSize: "11px" }}>Less</span>
                        {legendColors.map((color, index) => (
                            <svg key={index} width="10" height="10">
                                <rect
                                    width="10"
                                    height="10"
                                    fill={color}
                                    rx={2}
                                    ry={2}
                                    style={{ stroke: strokeColor }}
                                />
                            </svg>
                        ))}
                        <span className="text-neutral-600 dark:text-neutral-400" style={{ marginLeft: "0.4em", fontSize: "11px" }}>More</span>
                    </div>
                </footer>


            </div>


            {hover && (
                <motion.div
                    layout
                    className="absolute px-3 py-2 bg-neutral-900/95 dark:bg-neutral-800/95 border border-neutral-700 dark:border-neutral-700 text-xs rounded-lg pointer-events-none z-10 shadow-lg backdrop-blur-sm"
                    style={{
                        left: hover.x,
                        top: hover.y - 12,
                        transform: "translate(-50%, -100%)",
                    }}
                >
                    <div className="font-semibold text-white dark:text-white">
                        {hover.day.contributionCount} contributions
                    </div>
                    <div className="text-neutral-300 dark:text-neutral-400">{hover.day.date}</div>
                </motion.div>
            )}
        </div>
    );
}
